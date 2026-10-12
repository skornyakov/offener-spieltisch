# Spielbrücke Webseite: Anleitung

Stand: 12.10.2026

Diese Anleitung führt dich einmal durch die Einrichtung (etwa 45 bis 60 Minuten) und erklärt danach, wie das Team die Seite pflegt. Programmieren musst du nichts.

## So hängt alles zusammen

- **GitHub** speichert die Seite als Dateien.
- **Pages CMS** ist die Oberfläche, in der das Team Texte, Blogbeiträge und Bilder bearbeitet. Jede gespeicherte Änderung landet automatisch bei GitHub.
- **GitHub Pages** baut die Seite nach jeder Änderung neu und stellt sie ins Netz. Das dauert etwa ein bis zwei Minuten.
- **Google Forms** nimmt Anmeldungen für Spieltische entgegen, die Antworten landen in einer Google-Tabelle.
- **Google-Tabelle und Google My Maps** liefern die zwei Karten der Spielorte ("Das ganze Jahr" und "Spielwoche"). Sie werden auf der Seite eingebettet.
- **Uberspace** stellt das Postfach für kontakt@spielbruecke.de bereit. Mit der Webseite hat Uberspace nichts zu tun.

Kosten: 0 Euro, solange das Repository öffentlich ist. Für die eigene Domain kommen nur deren Kosten dazu.

---

## Teil 1: Einmalige Einrichtung

### Schritt 1: GitHub-Konto und leeres Repository

1. Falls noch nicht vorhanden: Konto auf github.com anlegen. Tipp: Eine eigene Organisation für die Initiative (z. B. "spielbruecke") macht es später leichter, Rechte zu teilen.
2. Oben rechts auf **+** und **New repository**.
3. Name: z. B. `spielbruecke`. Sichtbarkeit: **Public** (für kostenloses GitHub Pages nötig).
4. **Keine** Häkchen bei README, .gitignore oder Lizenz setzen. Das Repository muss leer sein.
5. **Create repository**.

### Schritt 2: Die Dateien hineinbringen

**Weg A (am einfachsten):** Schick mir im Chat den Namen, z. B. `skornyakov/offener-spieltisch`. Ich lade die Dateien direkt hoch. Du bekommst dabei eventuell eine Freigabe-Abfrage, die du bestätigen musst.

**Weg B (selbst):** Mit der kostenlosen App **GitHub Desktop**:
1. App installieren und mit GitHub anmelden.
2. **File > Clone repository**, dein neues Repository wählen, auf den Rechner holen.
3. Den Inhalt des ZIP-Pakets in diesen Ordner kopieren. Wichtig: Auch die unsichtbaren Dateien `.pages.yml`, `.gitignore` und den Ordner `.github` mitkopieren (auf dem Mac im Finder mit Cmd + Shift + Punkt sichtbar machen).
4. In GitHub Desktop unten eine Beschreibung eintragen ("Erste Version"), **Commit to main**, dann **Push origin**.

Das Hochladen über die GitHub-Webseite per Drag and Drop würde ich nicht nehmen, weil die unsichtbaren Dateien dabei leicht verloren gehen.

### Schritt 3: GitHub Pages einschalten

1. Im Repository auf **Settings > Pages**.
2. Unter **Build and deployment > Source** die Option **GitHub Actions** wählen.
3. Oben auf den Reiter **Actions** gehen. Dort sollte "Seite veröffentlichen" laufen. Falls nicht: den Eintrag links anklicken und **Run workflow**.
4. Nach ein bis zwei Minuten steht unter **Settings > Pages** die Adresse, z. B. `https://skornyakov.github.io/offener-spieltisch/`.

Wenn ein Lauf rot wird: Klick darauf und schick mir die Fehlermeldung.

### Schritt 4: Pages CMS verbinden

1. Auf **app.pagescms.org** gehen und mit GitHub anmelden.
2. Pages CMS bittet darum, seine GitHub-App zu installieren. Wähle dabei **nur** das Repository `offener-spieltisch` aus, nicht alle.
3. Das Repository öffnen. Links erscheinen **Blog**, **Seiten**, **Startseite**, **Einstellungen** und **Medien**.
4. Team einladen: Wie ich die Doku verstehe, lädt man Mitstreiter:innen per E-Mail ein, sie brauchen dann kein eigenes GitHub-Konto. Den genauen Menüpunkt habe ich nicht selbst ausprobiert, er heißt in der Doku "Collaborators".

### Schritt 5: Impressum und Datenschutz ausfüllen

Beide Seiten sind Platzhalter mit einem deutlichen Warnhinweis. Bevor ihr die Adresse irgendwo teilt:
- **Impressum:** Angaben eurer Firma eintragen.
- **Datenschutz:** Die Seite listet auf, was vorkommen muss (Hosting bei GitHub, Google-Karten per Klick, Anmeldeformular bei Google Forms, keine Tracking-Cookies). Den eigentlichen Text bitte mit einem Generator erstellen oder prüfen lassen. Das ist keine Rechtsberatung von mir.
- Die Datenschutzerklärung muss jetzt auch das Anmeldeformular (Google Forms) abdecken.

### Schritt 6: Domain spielbruecke.de (DNS bei Cloudflare)

Reihenfolge laut GitHub: erst die Domain bei GitHub eintragen, dann DNS setzen.

1. **Domain bei GitHub verifizieren (empfohlen):** Profilbild > Settings > Pages > "Add a domain". Den angezeigten TXT-Eintrag bei Cloudflare anlegen und bei GitHub bestätigen.
2. **Im Repository:** Settings > Pages > Custom domain: `spielbruecke.de` eintragen und speichern. Eine CNAME-Datei braucht ihr nicht.
3. **Bei Cloudflare (DNS):**
   - A-Einträge für `spielbruecke.de`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional AAAA-Einträge: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - CNAME `www` auf `skornyakov.github.io` (ohne Repo-Namen)
   - Bei diesen Einträgen den Cloudflare-Proxy ausschalten ("DNS only", graue Wolke), damit GitHub das HTTPS-Zertifikat ausstellen kann. Das ist meine Empfehlung, nicht aus der GitHub-Doku.
   - Keine Wildcard-Einträge (`*.spielbruecke.de`) anlegen.
4. **Warten:** Nach einigen Minuten bis Stunden ist die Seite unter spielbruecke.de erreichbar. "Enforce HTTPS" unter Settings > Pages anhaken, sobald es anklickbar ist (laut GitHub bis zu 24 Stunden).
5. Die Seite passt ihre Links automatisch an, dafür ist nichts zu ändern.

### Schritt 7: E-Mail kontakt@spielbruecke.de bei Uberspace

1. Auf dem Uberspace: `uberspace mail domain add spielbruecke.de`
2. `uberspace records show spielbruecke.de` zeigt die nötigen DNS-Einträge (MX, SPF als TXT, DKIM als TXT auf `uberspace._domainkey`). Diese bei Cloudflare anlegen.
3. Postfach anlegen: `uberspace mail user add <name>`. Achtung: Ein Uberspace-Postfach gilt für alle Domains auf deinem Uberspace. Gibt es schon ein Postfach "kontakt" für eine andere Domain, landet die Post im selben Postfach.
4. Mit `uberspace mail domain list` prüfen, ob die Domain aktiv ist.

---

## Teil 2: Anmeldung und Karten

### Das Anmeldeformular

1. Formular in Google Forms anlegen (Fragen siehe Planungsdokument "webseite-plan-schritt-2" im Projekt).
2. In Google Forms unter **Antworten** eine Google-Tabelle verknüpfen. Die Antworten landen dort im Blatt der Formularantworten.
3. Den Link zum Formular kopieren und in Pages CMS unter **Einstellungen > "Anmeldung: Link zum Google-Formular"** einfügen.
4. Solange das Feld leer ist, zeigt die Seite "Spieltisch anbieten" den Hinweis "Die Anmeldung öffnet in Kürze" mit der Kontakt-Mail.

### Die Tabelle

Eine Google-Tabelle mit diesen Blättern:

- **Formularantworten** (automatisch). Hier nichts verändern.
- **Orte** (Haupttabelle): links die internen Spalten (Veröffentlichen Spielwoche = 1, Veröffentlichen regelmäßig = 1, Status, Geprüft am, Notiz), ab dann genau die Spalten des Antwortblatts in derselben Reihenfolge. Geprüfte Antworten als ganze Zeile hierher kopieren. Kommt eine neue Formularfrage dazu (Google hängt sie rechts an), hier ebenfalls rechts eine Spalte anhängen.
- **Export Spielwoche** und **Export regelmäßig**: holen per Formel nur die Zeilen mit einer 1 und nur die öffentlichen Spalten. Diese Blätter nie von Hand bearbeiten.

Wichtig: Nie das Blatt "Orte" selbst exportieren. My Maps zeigt jede Spalte im Popup, auch E-Mail und Telefon.

### Die zwei Karten in My Maps

1. Auf **mymaps.google.com** zwei Karten anlegen, z. B. "Spielbrücke: das ganze Jahr" und "Spielbrücke: Spielwoche 2027".
2. Jeweils das Export-Blatt öffnen, **Datei > Herunterladen > CSV**, und in die passende Karte importieren. Adressspalte als Position, Name als Titel.
3. Farben nach "Art des Ortes": bei der Ebene auf **Einheitlicher Stil** klicken und nach der Spalte gruppieren.
4. Beide Karten über **Teilen** öffentlich machen, dann im Menü mit den drei Punkten **In meine Website einbetten** wählen und den Code kopieren.
5. In Pages CMS unter **Einstellungen** in die Felder für die Karte "Das ganze Jahr" bzw. "Spielwoche" einfügen. Ist ein Feld leer, zeigt der Reiter "Diese Karte kommt bald".
6. Unter **"Welche Karte ist vorausgewählt?"** legt ihr fest, welcher Reiter beim Öffnen aktiv ist. Bis Januar "Das ganze Jahr", in der Spielwoche "Spielwoche".

Die genauen Menübezeichnungen in My Maps habe ich nicht selbst geprüft. Gesucht ist der Einbettungscode (beginnt mit `<iframe`).

### Neue oder geänderte Orte übernehmen

Die Karten aktualisieren sich **nicht** automatisch. Nach Änderungen in der Tabelle:

1. Das passende Export-Blatt als CSV herunterladen.
2. In My Maps bei der Ebene auf die drei Punkte, **Neu importieren und zusammenführen > Neu importieren > Alle Elemente ersetzen**, die CSV wählen.

An der Webseite muss dafür nichts geändert werden.

---

## Teil 3: Die Seite pflegen

### Blogbeitrag schreiben

1. Pages CMS > **Blog** > **Neuer Eintrag**.
2. Titel, Datum, Kurzbeschreibung, Text. Bild ist optional.
3. **Entwurf** anhaken, wenn der Beitrag noch nicht erscheinen soll.
4. Speichern. Nach ein bis zwei Minuten ist er online. Die drei neuesten Beiträge erscheinen automatisch auf der Startseite.

### Unterseite anlegen oder ändern

1. Pages CMS > **Seiten**. Dort liegen Idee, Spielorte, Spieltisch anbieten, Mitmachen, Kontakt, Impressum, Datenschutz.
2. Neue Seite: **Neuer Eintrag**. Die Adresse ergibt sich aus dem Titel beim ersten Speichern, z. B. Titel "Presse" wird zu `/presse/`. Spätere Titeländerungen ändern die Adresse nicht.
3. Damit sie im Menü erscheint: **Einstellungen > Hauptmenü** einen Eintrag mit Beschriftung und Link `/presse/` ergänzen.

Hinweis zur Seite **Spielorte**: Sie zeigt automatisch die Karten über dem Text. Wenn ihr sie umbenennt, bitte den Dateinamen `karte.md` behalten.

Hinweis zur Seite **Spieltisch anbieten** (`anmelden.md`): Das Häkchen "Anmelde-Knopf anzeigen" blendet oben und unten den Knopf zum Formular ein. Das Häkchen geht bei jeder Seite. Titel und Texte könnt ihr frei ändern, die Adresse `/anmelden/` bleibt.

### Startseite ändern

Pages CMS > **Startseite**. Dort stehen Claim, Einleitung, Knopftexte, die drei Schritte, die Texte zur Karte, zur Spielwoche und die Mitmachen-Kacheln.

### Links richtig schreiben

- Interne Seiten mit Schrägstrichen: `/mitmachen/`
- Externe Seiten vollständig: `https://...`
- Die Sprungmarken auf der Mitmachen-Seite ergeben sich aus den Überschriften: "Spiele anleiten" wird zu `/mitmachen/#spiele-anleiten`, aus Umlauten wird der Grundbuchstabe (ü wird u). Wer die Überschrift ändert, muss den Link auf der Startseite anpassen.

### Bilder und Illustrationen austauschen

- Blogbeiträge: Feld **Bild**.
- Die Spiel-Illustrationen (Würfel, Figuren, Karten) sind im Code gezeichnet. Wenn Freiwillige Fotos oder Zeichnungen liefern, baue ich euch dafür Bildfelder ein.

---

## Was ohne Programmierhilfe nicht geht

Farben, Schriften, der Aufbau der Startseite oder neue Bereiche. Dafür müssen Dateien im Ordner `layouts` oder `assets` geändert werden. Meldet euch dann mit einem Wunsch, das ist meist eine kleine Änderung.

## Übersicht der Dateien (für Neugierige)

| Ordner / Datei | Inhalt |
|---|---|
| `content/` | Seiten und Blogbeiträge (Markdown) |
| `data/startseite.yaml` | Texte der Startseite |
| `data/einstellungen.yaml` | Name, Menü, Kontakt, Anmeldung, Karten |
| `layouts/` | Aufbau der Seiten (Hugo-Vorlagen) |
| `assets/css/stil.css` | Farben und Gestaltung |
| `static/` | Schriften, Favicon, hochgeladene Bilder |
| `.pages.yml` | Was im CMS bearbeitet werden kann |
| `.github/workflows/` | Automatisches Veröffentlichen |

Die Seite wird mit Hugo gebaut, Version 0.167.0 ist fest eingestellt. Updates sind nicht nötig, die Seite läuft so weiter.
