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
  goal:'Perspektive vom Verhalten des CLEAR-Matches auf eigene Bedürfnisse verschieben.',
  probe:'Was davon wäre dir in dieser Situation wirklich wichtig?',
  follow:'Fehlt etwas Wichtiges in der Auswahl?',
  observe:'Nicht bewerten, welche Bedürfnisse richtig oder gesund sind.'
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
  html:`<div class="eye">Nach der CLEAR-Unterstützung</div>
    <h2>Wie ist es für dich gerade?</h2>
    <h3>Wie klar ist dir gerade, was du als Nächstes tun möchtest?</h3>
    <p class="muted small">1 = überhaupt nicht klar · 5 = sehr klar</p>
    <div class="scale" data-scale="clarityAfter"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <h3 style="margin-top:24px">Wie stark beschäftigt dich die Situation gerade?</h3>
    <p class="muted small">1 = gar nicht · 5 = sehr stark</p>
    <div class="scale" data-scale="loadAfter"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Dieselben zwei Messgrößen wie vor der Unterstützung erneut erheben.',
  probe:'Bitte beantworte beide Fragen noch einmal so, wie es sich jetzt für dich anfühlt.',
  follow:'Keine Bewertung des Unterschieds vorwegnehmen.',
  observe:'Kernsignal: Veränderung clarityBefore → clarityAfter. Mental Load ist sekundär.'
},
{
  id:'marketplaceTest',
  html:`<div class="eye">CLEAR als Dating-App</div>
    <h2>Diese Unterstützung wäre direkt Teil der Dating-App CLEAR.</h2>
    <p>Du würdest sie also dort bekommen, wo du [[NAME]] kennengelernt hast – nicht in einer zusätzlichen App.</p>
    <h3>Wie wertvoll wäre so eine Unterstützung für dich als Bestandteil einer Dating-App?</h3>
    <p class="muted small">1 = gar nicht wertvoll · 5 = sehr wertvoll</p>
    <div class="scale" data-scale="marketplaceValue"><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
    <h3 style="margin-top:22px">Wäre diese Art der Unterstützung für dich ein Grund, CLEAR als Dating-App auszuprobieren?</h3>
    <button class="opt" data-k="marketplaceIntent">Ja, ein klarer Grund</button>
    <button class="opt" data-k="marketplaceIntent">Vielleicht / zusammen mit anderen Gründen</button>
    <button class="opt" data-k="marketplaceIntent">Nein</button>
    <div class="bottom"><button class="primary" onclick="next()">Weiter</button></div>`,
  goal:'Testen, ob die Let-Them/Let-Me-Unterstützung als Differenzierungsmerkmal des Dating-Marktplatzes relevant ist.',
  probe:'Bitte antworte so, als würdest du zwischen Dating-Apps auswählen.',
  follow:'Was müsste CLEAR zusätzlich bieten, damit du es wirklich ausprobieren würdest?',
  observe:'Ein positiver Clarity-Effekt allein reicht nicht; wichtig ist, ob die Mechanik die Wahl der Dating-App beeinflusst.'
},
{
  id:'feedback',
  html:`<div class="eye">Zum Schluss</div>
    <h2>Was hat dir an dieser CLEAR-Funktion etwas gebracht – oder was hat dir gefehlt?</h2>
    <textarea id="freefeedback" placeholder="Zum Beispiel: Was war hilfreich, unklar, unnötig oder fehlte? …"></textarea>
    <h3>Wenn du CLEAR als Dating-App mit Tinder, Bumble, Hinge oder anderen Apps vergleichst: Was müsste CLEAR anders oder besser machen?</h3>
    <textarea id="marketplaceFeedback" placeholder="Was müsste dich wirklich zum Ausprobieren bewegen? …"></textarea>
    <p class="muted small">Es gibt keine richtige Antwort. Kritik hilft uns mehr als Zustimmung.</p>
    <div class="bottom"><button class="primary" onclick="finishTest()">Test abschließen</button></div>`,
  goal:'Offenes Feedback zur Funktion und zur Marketplace-Differenzierung sammeln.',
  probe:'Was würdest du am Produkt verändern oder weglassen?',
  follow:'Was wäre für dich ein echter Wechsel- oder Ausprobiergrund gegenüber deiner heutigen Dating-App?',
  observe:'Wörtliche Formulierungen notieren; nicht verteidigen oder erklären.'
}
];