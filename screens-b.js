window.CLEAR_SCREENS_B=[
{
  id:'myPart',
  html:`<div class="eye">Dein Teil</div>
    <h2>Was ist dir beim Kennenlernen wichtig?</h2>
    <p class="muted">Wähle alles, was für dich in dieser Situation wichtig wäre.</p>
    <button class="opt multi" data-k="needs">Dass Initiative von beiden kommt.</button>
    <button class="opt multi" data-k="needs">Dass wir regelmäßig Kontakt haben.</button>
    <button class="opt multi" data-k="needs">Dass ich nicht ständig rätseln muss, woran ich bin.</button>
    <button class="opt multi" data-k="needs">Dass ich jemandem Zeit lassen kann, ohne sofort Klarheit zu brauchen.</button>
    <button class="opt multi" data-k="needs">Dass ich direkt ansprechen kann, wenn mich etwas beschäftigt.</button>
    <button class="opt multi exclusive" data-k="needs">Ich weiß es gerade nicht.</button>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Perspektive vom Verhalten des anderen auf eigene Bedürfnisse verschieben.',
  probe:'Was davon wäre dir in dieser Situation wirklich wichtig?',
  follow:'Fehlt etwas Wichtiges in der Auswahl?',
  observe:'Nicht bewerten, welche Bedürfnisse „gesund“ oder richtig sind.'
},
{
  id:'action',
  html:`<div class="eye">Deine Entscheidung</div>
    <h2>Mit Blick auf das, was dir wichtig ist:</h2>
    <div id="needsSummary" class="card soft"></div>
    <h2>Was möchtest du jetzt tun?</h2>
    <button class="opt" data-k="decision">Ich warte erst einmal ab.</button>
    <button class="opt" data-k="decision">Ich schreibe [[NAME]] einmal und frage konkret nach einem Treffen.</button>
    <button class="opt" data-k="decision">Ich lasse den nächsten Schritt erst einmal bei [[NAME]] und investiere nicht weiter.</button>
    <button class="opt" data-k="decision">Ich weiß es noch nicht.</button>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Eine eigene Handlung ermöglichen, ohne eine richtige Lösung vorzugeben.',
  probe:'Welche Option passt am ehesten zu dir?',
  follow:'Fehlt eine Handlung, die du eher wählen würdest?',
  observe:'Entscheidend ist Klarheit, nicht welche Option gewählt wird.'
},
{
  id:'after',
  html:`<div class="eye">Nach CLEAR</div>
    <h2>Wie ist es für dich gerade?</h2>
    <h3>Wie klar ist dir gerade, was du als Nächstes tun möchtest?</h3>
    <p class="muted small">1 = überhaupt nicht klar · 5 = sehr klar</p>
    <div class="scale" data-scale="clarityAfter"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <h3 style="margin-top:24px">Wie stark beschäftigt dich die Situation gerade?</h3>
    <p class="muted small">1 = gar nicht · 5 = sehr stark</p>
    <div class="scale" data-scale="loadAfter"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Dieselben zwei Messgrößen wie vor CLEAR erneut erheben.',
  probe:'Bitte beantworte beide Fragen noch einmal so, wie es sich jetzt für dich anfühlt.',
  follow:'Keine Bewertung des Unterschieds vorwegnehmen.',
  observe:'Kernsignal: Veränderung clarityBefore → clarityAfter. Mental Load ist sekundär.'
},
{
  id:'realityTest',
  html:`<div class="eye">Im echten Leben</div>
    <h2>Stell dir vor, dir passiert in den nächsten Wochen wirklich etwas Ähnliches.</h2>
    <h3>Würdest du CLEAR in so einer Situation öffnen?</h3>
    <button class="opt" data-k="useIntent">Ja</button>
    <button class="opt" data-k="useIntent">Vielleicht</button>
    <button class="opt" data-k="useIntent">Nein</button>
    <h3 style="margin-top:22px">Was würdest du heute ohne CLEAR am ehesten tun?</h3>
    <button class="opt" data-k="alternative">Selbst darüber nachdenken</button>
    <button class="opt" data-k="alternative">Mit Freund oder Freundin sprechen</button>
    <button class="opt" data-k="alternative">ChatGPT oder einen anderen AI-Chat nutzen</button>
    <button class="opt" data-k="alternative">Google, Reddit oder Social Media nutzen</button>
    <button class="opt" data-k="alternative">Nichts Besonderes tun</button>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Testen, ob CLEAR einen realen Platz im bestehenden Verhalten gewinnen könnte.',
  probe:'Bitte antworte so realistisch wie möglich, nicht so, wie es für das Produkt gut wäre.',
  follow:'Warum würdest du wahrscheinlich genau das tun?',
  observe:'„Ja“ allein reicht nicht. Besonders wichtig ist das heute tatsächlich genutzte Ersatzverhalten.'
},
{
  id:'feedback',
  html:`<div class="eye">Zum Schluss</div>
    <h2>Was hat dir CLEAR in dieser Situation gebracht – oder was hat dir gefehlt?</h2>
    <textarea id="freefeedback" placeholder="Zum Beispiel: Was war hilfreich, unklar, unnötig oder fehlte? …"></textarea>
    <p class="muted small">Es gibt keine richtige Antwort. Kritik hilft uns mehr als Zustimmung.</p>
    <div class="bottom"><button class="primary" onclick="finishTest()">Test abschließen</button></div>`,
  goal:'Offenes, nicht suggestives Feedback nach dem eigentlichen Mess-Flow.',
  probe:'Was würdest du am Produkt verändern oder weglassen?',
  follow:'Gab es einen Moment, an dem du dachtest: Das brauche ich nicht?',
  observe:'Wörtliche Formulierungen notieren; nicht verteidigen oder erklären.'
}
];