// Kleine Helfer für die Seite: Menü auf dem Handy und Karte erst nach Klick laden.
(function () {
  // Menü auf kleinen Bildschirmen
  var knopf = document.querySelector('.menue-knopf');
  var menue = document.getElementById('hauptmenue');
  if (knopf && menue) {
    knopf.addEventListener('click', function () {
      var offen = knopf.getAttribute('aria-expanded') === 'true';
      knopf.setAttribute('aria-expanded', String(!offen));
      menue.classList.toggle('offen', !offen);
    });
  }

  // Karte (Google My Maps) erst nach Zustimmung laden
  var SCHLUESSEL = 'karte-direkt-laden';
  function merkenLesen() {
    try { return window.localStorage.getItem(SCHLUESSEL) === 'ja'; } catch (e) { return false; }
  }
  function merkenSchreiben() {
    try { window.localStorage.setItem(SCHLUESSEL, 'ja'); } catch (e) { /* egal */ }
  }
  function ladeKarte(rahmen) {
    var src = rahmen.getAttribute('data-karte');
    if (!src || rahmen.classList.contains('geladen')) return;
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Karte der Spielorte';
    iframe.loading = 'lazy';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    rahmen.innerHTML = '';
    rahmen.appendChild(iframe);
    rahmen.classList.add('geladen');
  }
  var rahmenListe = document.querySelectorAll('.karte-rahmen[data-karte]');
  var direkt = merkenLesen();
  Array.prototype.forEach.call(rahmenListe, function (rahmen) {
    if (direkt) { ladeKarte(rahmen); return; }
    var laden = rahmen.querySelector('[data-karte-laden]');
    var merken = rahmen.querySelector('[data-karte-merken]');
    if (laden) {
      laden.addEventListener('click', function () {
        if (merken && merken.checked) merkenSchreiben();
        ladeKarte(rahmen);
      });
    }
  });
})();
