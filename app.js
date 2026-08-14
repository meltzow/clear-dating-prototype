const baseScreens=[...(window.CLEAR_SCREENS_A||[]),...(window.CLEAR_SCREENS_B||[])];

const preferenceScreen={
  id:'preference',
  html:`<div class="eye">Für das Beispiel</div>
    <h2>Wen würdest du beim Dating grundsätzlich kennenlernen?</h2>
    <p class="muted">Damit sich die Beispielsituation für dich möglichst realistisch anfühlt.</p>
    <button class="opt" data-k="partnerPreference">Frauen</button>
    <button class="opt" data-k="partnerPreference">Männer</button>
    <button class="opt" data-k="partnerPreference">Egal</button>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Die Beispielsituation soll für die Testperson grundsätzlich romantisch vorstellbar sein.',
  probe:'Bitte wähle die Antwort, die für dich am ehesten passt.',
  follow:'Wenn „Egal“ passt, wähle einfach Egal. Für den Test wird dann eine der beiden Varianten verwendet.',
  observe:'Diese Auswahl ist keine Hypothese des Tests. Sie dient nur dazu, unnötige emotionale Distanz zum Beispielszenario zu vermeiden.'
};

const V=[baseScreens[0],preferenceScreen,...baseScreens.slice(1)];
let i=0,enter=Date.now();
const D={version:'2.1',startedAt:new Date().toISOString(),choices:{},scales:{},text:{},events:[],times:{},notes:'',scenario:null};
const screen=document.getElementById('screen');

function log(type,o={}){D.events.push({time:new Date().toISOString(),screen:V[i].id,type,...o})}

function storeText(){
  const f=document.getElementById('freefeedback');if(f)D.text.freefeedback=f.value;
  const t=document.getElementById('teachback');if(t)D.text.teachback=t.value;
}

function configureScenario(preference){
  if(D.scenario && D.scenario.preference===preference)return;
  let gender;
  if(preference==='Frauen')gender='female';
  else if(preference==='Männer')gender='male';
  else gender=Math.random()<0.5?'female':'male';
  D.scenario={preference,gender,name:gender==='female'?'Anna':'Jonas'};
  log('scenario_selected',{preference,scenarioGender:gender,scenarioName:D.scenario.name});
}

function personalizeText(value){
  if(!value || !D.scenario || D.scenario.gender!=='male')return value;
  return value
    .replace(/Annas/g,'Jonas’')
    .replace(/Anna/g,'Jonas')
    .replace(/\bSie\b/g,'Er')
    .replace(/\bsie\b/g,'er')
    .replace(/\bIhre\b/g,'Seine')
    .replace(/\bihre\b/g,'seine')
    .replace(/\bihr Interesse\b/g,'sein Interesse')
    .replace(/\bbei ihr\b/g,'bei ihm')
    .replace(/\bmit ihr\b/g,'mit ihm')
    .replace(/\bvon ihr\b/g,'von ihm')
    .replace(/\bzu ihr\b/g,'zu ihm');
}

function bind(){
  document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const k=b.dataset.k;
    if(b.classList.contains('multi')){
      if(b.textContent.includes('Noch nichts davon')){
        document.querySelectorAll(`[data-k="${k}"]`).forEach(x=>x.classList.remove('sel'));
        b.classList.add('sel');
      }else{
        document.querySelectorAll(`[data-k="${k}"]`).forEach(x=>{if(x.textContent.includes('Noch nichts davon'))x.classList.remove('sel')});
        b.classList.toggle('sel');
      }
      D.choices[k]=[...document.querySelectorAll(`[data-k="${k}"].sel`)].map(x=>x.textContent.trim());
    }else{
      document.querySelectorAll(`[data-k="${k}"]`).forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');
      D.choices[k]=b.textContent.trim();
    }
    if(k==='partnerPreference')configureScenario(D.choices[k]);
    log('choice',{key:k,value:D.choices[k]});
  });
  document.querySelectorAll('[data-scale]').forEach(g=>g.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    g.querySelectorAll('button').forEach(x=>x.classList.remove('sel'));
    b.classList.add('sel');
    D.scales[g.dataset.scale]=Number(b.textContent);
    log('scale',{key:g.dataset.scale,value:Number(b.textContent)});
  }));
}

function show(n){
  storeText();
  if(V[i])D.times[V[i].id]=(D.times[V[i].id]||0)+(Date.now()-enter);
  i=Math.max(0,Math.min(n,V.length-1));
  enter=Date.now();
  const current=V[i];
  screen.innerHTML=personalizeText(current.html);
  document.getElementById('prog').textContent=`${i+1} / ${V.length}`;
  document.getElementById('goal').textContent=personalizeText(current.goal);
  document.getElementById('probe').textContent=personalizeText(current.probe);
  document.getElementById('follow').textContent=personalizeText(current.follow);
  document.getElementById('observe').textContent=personalizeText(current.observe);
  bind();log('view');scrollTo(0,0);
}

function next(){
  if(V[i].id==='preference' && !D.choices.partnerPreference){
    alert('Bitte wähle eine Option aus.');
    return;
  }
  show(i+1);
}
function finish(){storeText();show(i+1)}
function saveNotes(){D.notes=document.getElementById('notes').value}
function downloadData(){
  storeText();saveNotes();D.completedAt=new Date().toISOString();
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(D,null,2)],{type:'application/json'}));
  a.download=`clear-test-v2-1-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}
if(new URLSearchParams(location.search).get('moderator')==='1')document.getElementById('mod').classList.add('show');
show(0);
