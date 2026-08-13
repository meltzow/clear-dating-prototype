const V=[...(window.CLEAR_SCREENS_A||[]),...(window.CLEAR_SCREENS_B||[])];
let i=0,enter=Date.now();
const D={version:'2.0',startedAt:new Date().toISOString(),choices:{},scales:{},text:{},events:[],times:{},notes:''};
const screen=document.getElementById('screen');
function log(type,o={}){D.events.push({time:new Date().toISOString(),screen:V[i].id,type,...o})}
function storeText(){const f=document.getElementById('freefeedback');if(f)D.text.freefeedback=f.value;const t=document.getElementById('teachback');if(t)D.text.teachback=t.value}
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
  screen.innerHTML=V[i].html;
  document.getElementById('prog').textContent=`${i+1} / ${V.length}`;
  document.getElementById('goal').textContent=V[i].goal;
  document.getElementById('probe').textContent=V[i].probe;
  document.getElementById('follow').textContent=V[i].follow;
  document.getElementById('observe').textContent=V[i].observe;
  bind();log('view');scrollTo(0,0);
}
function next(){show(i+1)}
function finish(){storeText();show(i+1)}
function saveNotes(){D.notes=document.getElementById('notes').value}
function downloadData(){
  storeText();saveNotes();D.completedAt=new Date().toISOString();
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(D,null,2)],{type:'application/json'}));
  a.download=`clear-test-v2-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}
if(new URLSearchParams(location.search).get('moderator')==='1')document.getElementById('mod').classList.add('show');
show(0);
