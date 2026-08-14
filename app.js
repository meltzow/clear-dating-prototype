const V=[...(window.CLEAR_SCREENS_A||[]),...(window.CLEAR_SCREENS_B||[])];
let i=0,enter=Date.now();
const D={version:'2.2-reduced',startedAt:new Date().toISOString(),choices:{},scales:{},text:{},events:[],times:{},notes:'',scenario:null};
const screen=document.getElementById('screen');

function log(type,o={}){D.events.push({time:new Date().toISOString(),screen:V[i]?.id||'finished',type,...o})}

function configureScenario(preference){
  let gender;
  if(preference==='Frauen') gender='female';
  else if(preference==='Männer') gender='male';
  else gender=Math.random()<0.5?'female':'male';
  D.scenario={
    preference,
    gender,
    name:gender==='female'?'Anna':'Jonas',
    subject:gender==='female'?'sie':'er',
    subjectCap:gender==='female'?'Sie':'Er',
    object:gender==='female'?'sie':'ihn',
    possessive:gender==='female'?'ihr':'sein',
    namePossessive:gender==='female'?'Annas':'Jonas’'
  };
  log('scenario_selected',{preference,scenarioGender:gender,scenarioName:D.scenario.name});
}

function personalizeText(value){
  if(!value||!D.scenario)return value||'';
  return value
    .replaceAll('[[NAME]]s',D.scenario.namePossessive)
    .replaceAll('[[NAME]]',D.scenario.name)
    .replaceAll('[[SUBJ_CAP]]',D.scenario.subjectCap)
    .replaceAll('[[SUBJ]]',D.scenario.subject)
    .replaceAll('[[OBJ]]',D.scenario.object)
    .replaceAll('[[POSS]]',D.scenario.possessive);
}

function storeText(){
  const f=document.getElementById('freefeedback');
  if(f)D.text.freefeedback=f.value.trim();
}

function bind(){
  document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const k=b.dataset.k;
    if(b.classList.contains('multi')){
      const group=[...document.querySelectorAll(`[data-k="${k}"]`)];
      if(b.classList.contains('exclusive')){
        group.forEach(x=>x.classList.remove('sel'));
        b.classList.add('sel');
      }else{
        group.filter(x=>x.classList.contains('exclusive')).forEach(x=>x.classList.remove('sel'));
        b.classList.toggle('sel');
      }
      D.choices[k]=group.filter(x=>x.classList.contains('sel')).map(x=>x.textContent.trim());
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

function populateDynamicContent(){
  const summary=document.getElementById('needsSummary');
  if(summary){
    const needs=D.choices.needs||[];
    summary.innerHTML=needs.length
      ? `<b>Dir ist wichtig:</b><p>${needs.map(x=>'• '+x).join('<br>')}</p>`
      : '<b>Du hast noch nichts ausgewählt.</b>';
  }
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
  bind();
  populateDynamicContent();
  log('view');
  scrollTo(0,0);
}

function validationMessage(){
  const id=V[i].id;
  if(id==='preference'&&!D.choices.partnerPreference)return 'Bitte wähle eine Option aus.';
  if(id==='before'&&(D.scales.clarityBefore==null||D.scales.loadBefore==null))return 'Bitte beantworte beide Fragen.';
  if(id==='myPart'&&(!D.choices.needs||D.choices.needs.length===0))return 'Bitte wähle mindestens eine Option aus.';
  if(id==='action'&&!D.choices.decision)return 'Bitte wähle eine Option aus.';
  if(id==='after'&&(D.scales.clarityAfter==null||D.scales.loadAfter==null))return 'Bitte beantworte beide Fragen.';
  if(id==='realityTest'&&(!D.choices.useIntent||!D.choices.alternative))return 'Bitte beantworte beide Fragen.';
  return null;
}

function next(){
  const message=validationMessage();
  if(message){alert(message);return;}
  show(i+1);
}

function saveNotes(){
  const notes=document.getElementById('notes');
  if(notes)D.notes=notes.value;
}

function finishTest(){
  storeText();saveNotes();
  D.times[V[i].id]=(D.times[V[i].id]||0)+(Date.now()-enter);
  D.completedAt=new Date().toISOString();
  D.metrics={
    clarityChange:(D.scales.clarityAfter??0)-(D.scales.clarityBefore??0),
    mentalLoadChange:(D.scales.loadAfter??0)-(D.scales.loadBefore??0)
  };
  log('finished',{metrics:D.metrics});
  screen.innerHTML=`<div class="eye">Fertig · 10 / 10</div><h1>Danke.</h1><p>Du hast den Test abgeschlossen.</p><div class="card soft"><b>Aktuell werden die Daten noch nicht automatisch übertragen.</b><p class="small">Für den Pretest kannst du die Testdaten herunterladen.</p></div><button class="secondary" onclick="downloadData()">Testdaten herunterladen</button>`;
  document.getElementById('prog').textContent='10 / 10';
  document.getElementById('goal').textContent='Test abgeschlossen.';
  document.getElementById('probe').textContent='Was war der Moment mit dem größten oder kleinsten Nutzen?';
  document.getElementById('follow').textContent='Nichts mehr erklären; offene Reaktion aufnehmen.';
  document.getElementById('observe').textContent='Besonders wichtig: Würde die Person CLEAR in einer echten Situation tatsächlich öffnen?';
}

function downloadData(){
  storeText();saveNotes();
  if(!D.completedAt)D.completedAt=new Date().toISOString();
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(D,null,2)],{type:'application/json'}));
  a.download=`clear-test-v2-2-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

if(new URLSearchParams(location.search).get('moderator')==='1')document.getElementById('mod').classList.add('show');
show(0);