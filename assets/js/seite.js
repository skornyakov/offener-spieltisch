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

  // Karten (Google My Maps) mit Reitern, Google erst nach Zustimmung laden
  var SCHLUESSEL = 'karte-direkt-laden';
  function merkenLesen() {
    try { return window.localStorage.getItem(SCHLUESSEL) === 'ja'; } catch (e) { return false; }
  }
  function merkenSchreiben() {
    try { window.localStorage.setItem(SCHLUESSEL, 'ja'); } catch (e) { /* egal */ }
  }

  var gruppen = document.querySelectorAll('[data-karte-gruppe]');
  Array.prototype.forEach.call(gruppen, function (gruppe) {
    var knoepfe = gruppe.querySelectorAll('[data-reiter]');
    var rahmen = gruppe.querySelector('[data-karte-rahmen]');
    var zustimmung = gruppe.querySelector('[data-karte-zustimmung]');
    var leer = gruppe.querySelector('[data-karte-leer]');
    var text = gruppe.querySelector('[data-reiter-text]');
    var extra = gruppe.querySelector('[data-karte-extra]');
    var gross = gruppe.querySelector('[data-karte-gross]');
    var laden = gruppe.querySelector('[data-karte-laden]');
    var merken = gruppe.querySelector('[data-karte-merken]');
    var erlaubt = merkenLesen();
    var iframe = null;
    var aktiv = null;

    function zeigen() {
      var src = aktiv.getAttribute('data-src');
      text.textContent = aktiv.getAttribute('data-text') || '';
      extra.hidden = !src;
      if (src) gross.href = aktiv.getAttribute('data-ansicht');
      leer.hidden = !!src;
      zustimmung.hidden = !src || erlaubt;
      if (src && erlaubt) {
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.title = 'Karte der Spielorte';
          iframe.loading = 'lazy';
          iframe.setAttribute('allowfullscreen', '');
          iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
          rahmen.appendChild(iframe);
        }
        if (iframe.getAttribute('src') !== src) iframe.src = src;
        iframe.hidden = false;
        rahmen.classList.add('geladen');
      } else if (iframe) {
        iframe.hidden = true;
        rahmen.classList.remove('geladen');
      }
    }

    function waehlen(knopf, fokus) {
      Array.prototype.forEach.call(knoepfe, function (k) {
        var an = k === knopf;
        k.setAttribute('aria-selected', String(an));
        k.tabIndex = an ? 0 : -1;
      });
      aktiv = knopf;
      if (fokus) knopf.focus();
      zeigen();
    }

    Array.prototype.forEach.call(knoepfe, function (knopf, i) {
      knopf.addEventListener('click', function () { waehlen(knopf); });
      knopf.addEventListener('keydown', function (e) {
        var ziel = null;
        if (e.key === 'ArrowRight') ziel = knoepfe[(i + 1) % knoepfe.length];
        if (e.key === 'ArrowLeft') ziel = knoepfe[(i - 1 + knoepfe.length) % knoepfe.length];
        if (ziel) { e.preventDefault(); waehlen(ziel, true); }
      });
      if (knopf.getAttribute('aria-selected') === 'true') aktiv = knopf;
    });
    if (!aktiv) aktiv = knoepfe[0];

    if (laden) {
      laden.addEventListener('click', function () {
        if (merken && merken.checked) merkenSchreiben();
        erlaubt = true;
        zeigen();
      });
    }
    waehlen(aktiv);
  });
})();
