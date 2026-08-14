window.CLEAR_SCREENS_A=[
{
  id:'preference',
  html:`<div class="eye">CLEAR · Dating-App-Prototyp</div>
    <h1>Eine kurze Dating-Situation</h1>
    <p>Für diesen Test stellst du dir vor, dass du die Dating-App <b>CLEAR</b> nutzt.</p>
    <h2>Wen würdest du beim Dating kennenlernen?</h2>
    <button class="opt" data-k="partnerPreference">Frauen</button>
    <button class="opt" data-k="partnerPreference">Männer</button>
    <button class="opt" data-k="partnerPreference">Egal</button>
    <p class="muted small">Die Auswahl bestimmt nur die Person im Beispiel.</p>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'CLEAR eindeutig als Dating-App einordnen und das Szenario romantisch anschlussfähig machen.',
  probe:'Was erwartest du von CLEAR, wenn du nur diesen ersten Screen siehst?',
  follow:'Danach bitte die passende Präferenz auswählen.',
  observe:'Die Testperson soll CLEAR als Dating-App verstehen. Noch keine Let-Them-Mechanik erklären.'
},
{
  id:'situation',
  html:`<div class="eye">Dein CLEAR-Match</div>
    <h2>Stell dir Folgendes vor</h2>
    <p>Du hast <b>[[NAME]]</b> über CLEAR kennengelernt. Ihr hattet ein erstes Date, das sich für dich gut angefühlt hat.</p>
    <div class="card">
      <div class="bubble">Der Abend war wirklich schön 🙂</div>
      <div class="bubble me">Fand ich auch. Ich würde dich gern wiedersehen.</div>
      <div class="bubble">Sehr gerne! Diese Woche ist bei mir ziemlich voll.</div>
      <div class="bubble me">Gerne. Meld dich einfach, wenn du weißt, wann es passt.</div>
    </div>
    <div class="card warn"><b>Seitdem sind drei Tage vergangen.</b><p>Du hast nichts von [[NAME]] gehört.</p></div>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Eine einzige realistische Unsicherheitssituation innerhalb des CLEAR-Marketplace etablieren.',
  probe:'Versetz dich kurz in diese Situation. Was geht dir spontan durch den Kopf?',
  follow:'Nicht nach einer Lösung fragen; nur spontane Reaktion aufnehmen.',
  observe:'Wirkt die Situation plausibel und emotional nachvollziehbar?'
},
{
  id:'before',
  html:`<div class="eye">In diesem Moment</div>
    <h2>Wie ist es für dich gerade?</h2>
    <h3>Wie klar ist dir gerade, was du als Nächstes tun möchtest?</h3>
    <p class="muted small">1 = überhaupt nicht klar · 5 = sehr klar</p>
    <div class="scale" data-scale="clarityBefore"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <h3 style="margin-top:24px">Wie stark beschäftigt dich die Situation gerade?</h3>
    <p class="muted small">1 = gar nicht · 5 = sehr stark</p>
    <div class="scale" data-scale="loadBefore"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Baseline für Klarheit und mentale Beschäftigung messen.',
  probe:'Bitte beantworte beide Fragen so, wie es für dich in dieser Situation wäre.',
  follow:'Nicht erklären oder interpretieren.',
  observe:'Die gleichen Fragen kommen später wortgleich erneut.'
},
{
  id:'knownOpen',
  html:`<div class="eye">CLEAR hilft dir zu sortieren</div>
    <h2>Was du gerade weißt</h2>
    <div class="card soft">
      <p>[[NAME]] hat gesagt, dass [[SUBJ]] dich gerne wiedersehen möchte.</p>
      <p>[[SUBJ_CAP]] hat gesagt, dass die Woche ziemlich voll ist.</p>
      <p>Seit drei Tagen kam keine neue Nachricht.</p>
    </div>
    <h2>Was offen ist</h2>
    <div class="card">
      <p>Warum [[SUBJ]] sich nicht meldet</p>
      <p>Wie groß [[POSS]] Interesse tatsächlich ist</p>
      <p>Ob und wann [[SUBJ]] sich wieder meldet</p>
    </div>
    <p class="muted">Für die offenen Punkte gibt es mehrere mögliche Erklärungen. Im Moment weißt du nicht, welche stimmt.</p>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'CLEAR übernimmt die Trennung zwischen Beobachtung und Interpretation; kein Nutzer-Quiz.',
  probe:'Was macht dieser Screen für dich?',
  follow:'Ist etwas davon unverständlich oder wirkt falsch?',
  observe:'Der Nutzer muss das Prinzip nicht benennen können; entscheidend ist, ob die Sortierung hilfreich wirkt.'
},
{
  id:'theirPart',
  html:`<div class="eye">[[NAME]]s Teil</div>
    <h1>Was [[NAME]] tut, ist [[POSS]] Teil.</h1>
    <div class="quote">Ob [[SUBJ]] schreibt, wann [[SUBJ]] schreibt und wie viel Initiative [[SUBJ]] zeigt, kannst du nicht steuern.</div>
    <div class="card soft"><b>Du kannst beobachten, was passiert.</b><p>Du musst den Grund dafür nicht erraten oder für [[OBJ]] erklären.</p></div>
    <div class="bottom"><button class="primary" onclick="next()">Was ist mein Teil?</button></div>`,
  goal:'Der Let-Them-Kern als eingebettete Unterstützung der Dating-App.',
  probe:'Was nimmst du aus diesem Screen mit?',
  follow:'Wenn du nur „nichts tun“ verstehst: Was glaubst du, kommt als Nächstes?',
  observe:'Problematisch wäre, wenn der Screen ausschließlich als passives Abwarten verstanden wird.'
}
];