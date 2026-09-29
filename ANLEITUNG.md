# Spielwoche Webseite: Anleitung

Stand: 29.09.2026

Diese Anleitung führt dich einmal durch die Einrichtung (etwa 45 bis 60 Minuten) und erklärt danach, wie das Team die Seite pflegt. Programmieren musst du nichts.

## So hängt alles zusammen

- **GitHub** speichert die Seite als Dateien.
- **Pages CMS** ist die Oberfläche, in der das Team Texte, Blogbeiträge und Bilder bearbeitet. Jede gespeicherte Änderung landet automatisch bei GitHub.
- **GitHub Pages** baut die Seite nach jeder Änderung neu und stellt sie ins Netz. Das dauert etwa ein bis zwei Minuten.
- **Google-Tabelle und Google My Maps** liefern die Karte der Spielorte. Die Karte wird auf der Seite eingebettet.

Kosten: 0 Euro, solange das Repository öffentlich ist. Für die eigene Domain kommen nur deren Kosten dazu.

---

## Teil 1: Einmalige Einrichtung

### Schritt 1: GitHub-Konto und leeres Repository

1. Falls noch nicht vorhanden: Konto auf github.com anlegen. Tipp: Eine eigene Organisation für die Initiative (z. B. "spielwoche") macht es später leichter, Rechte zu teilen.
2. Oben rechts auf **+** und **New repository**.
3. Name: z. B. `spielwoche`. Sichtbarkeit: **Public** (für kostenloses GitHub Pages nötig).
4. **Keine** Häkchen bei README, .gitignore oder Lizenz setzen. Das Repository muss leer sein.
5. **Create repository**.

### Schritt 2: Die Dateien hineinbringen

**Weg A (am einfachsten):** Schick mir im Chat den Namen, z. B. `spielwoche-initiative/spielwoche`. Ich lade die Dateien direkt hoch. Du bekommst dabei eventuell eine Freigabe-Abfrage, die du bestätigen musst.

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
4. Nach ein bis zwei Minuten steht unter **Settings > Pages** die Adresse, z. B. `https://spielwoche-initiative.github.io/spielwoche/`.

Wenn ein Lauf rot wird: Klick darauf und schick mir die Fehlermeldung.

### Schritt 4: Pages CMS verbinden

1. Auf **app.pagescms.org** gehen und mit GitHub anmelden.
2. Pages CMS bittet darum, seine GitHub-App zu installieren. Wähle dabei **nur** das Repository `spielwoche` aus, nicht alle.
3. Das Repository öffnen. Links erscheinen **Blog**, **Seiten**, **Startseite**, **Einstellungen** und **Medien**.
4. Team einladen: Wie ich die Doku verstehe, lädt man Mitstreiter:innen per E-Mail ein, sie brauchen dann kein eigenes GitHub-Konto. Den genauen Menüpunkt habe ich nicht selbst ausprobiert, er heißt in der Doku "Collaborators".

### Schritt 5: Impressum und Datenschutz ausfüllen

Beide Seiten sind Platzhalter mit einem deutlichen Warnhinweis. Bevor ihr die Adresse irgendwo teilt:
- **Impressum:** Angaben eurer Firma eintragen.
- **Datenschutz:** Die Seite listet auf, was vorkommen muss (Hosting bei GitHub, Google-Karte per Klick, keine Tracking-Cookies). Den eigentlichen Text bitte mit einem Generator erstellen oder prüfen lassen. Das ist keine Rechtsberatung von mir.
- Unter **Einstellungen** die echte Kontakt-E-Mail eintragen (steht jetzt auf hallo@example.org, auch auf der Seite "Kontakt").

### Schritt 6: Eigene Domain (optional, später)

1. Unter **Settings > Pages > Custom domain** die Domain eintragen, z. B. `www.spielwoche.de`.
2. Beim Domainanbieter einen DNS-Eintrag setzen. GitHub zeigt an, welchen. Die Anleitung dazu steht in der GitHub-Hilfe unter "Managing a custom domain for your GitHub Pages site".
3. Die Seite passt ihre Links automatisch an, dafür ist nichts zu ändern.

---

## Teil 2: Die Karte der Spielorte

### Google-Tabelle anlegen

Eine Zeile pro Ort. Vorschlag für die Spalten:

| Spalte | Beispiel |
|---|---|
| Name | Café Würfelglück |
| Adresse | Musterstraße 1, 10999 Berlin |
| Art des Ortes | Café |
| Wann | jeden Freitag, 18 bis 21 Uhr |
| Plätze | 2 Tische, bis 10 Personen |
| Typische Spiele | Carcassonne, Codenames, Wizard |
| Für wen | Erwachsene, Einsteiger willkommen |
| Kosten | frei, Verzehr erwünscht |
| Link | https://... |
| Freigegeben | ja |
| Zuletzt geprüft | 29.09.2026 |

Koordinaten braucht ihr nicht. Google findet die Orte über die Adresse. Google empfiehlt, nicht mehr als 2000 Zeilen auf einmal zu importieren.

**Freigabe und interne Spalten:** My Maps zeigt alle importierten Spalten im Popup an. Wenn "Freigegeben" und "Zuletzt geprüft" nicht öffentlich sein sollen, legt in der Tabelle ein zweites Blatt "Karte" an, das nur die öffentlichen Spalten der freigegebenen Zeilen enthält (z. B. mit der Formel `FILTER`), und importiert dieses Blatt. Wie My Maps bei mehreren Blättern auswählt, bitte beim ersten Import ausprobieren.

### Karte in My Maps erstellen

1. Auf **mymaps.google.com** eine neue Karte anlegen und benennen.
2. In der Legende bei der Ebene auf **Importieren** und die Google-Tabelle wählen.
3. Die Adressspalte als Position wählen, den Namen als Titel.
4. Farben oder Symbole nach "Art des Ortes" vergeben: Bei der Ebene auf **Einheitlicher Stil** klicken und nach der Spalte gruppieren.

### Karte auf der Seite einbinden

1. In My Maps die Karte über **Teilen** öffentlich machen.
2. Im Menü mit den drei Punkten **In meine Website einbetten** wählen und den angezeigten Code kopieren.
3. In Pages CMS unter **Einstellungen > Karte (Google My Maps)** einfügen und speichern.
4. Nach ein bis zwei Minuten zeigt die Seite an der Stelle der Karte einen Knopf "Karte laden". Erst nach dem Klick lädt Google (Datenschutz). Besucher:innen können "Karte künftig direkt laden" anhaken.

Die genauen Menübezeichnungen in My Maps habe ich nicht in dieser Sitzung geprüft. Falls sie abweichen: Gesucht ist der Einbettungscode (beginnt mit `<iframe`).

### Neue oder geänderte Orte übernehmen

Die Karte aktualisiert sich **nicht** automatisch. Nach Änderungen in der Tabelle:

1. In My Maps bei der Ebene auf die drei Punkte.
2. **Neu importieren und zusammenführen > Neu importieren > Alle Elemente ersetzen**.
3. Die Tabelle wählen. Farben nach Spalte bleiben erhalten.

An der Webseite muss dafür nichts geändert werden. Tipp: eine feste Person und ein fester Tag, z. B. jeden Montag.

---

## Teil 3: Die Seite pflegen

### Blogbeitrag schreiben

1. Pages CMS > **Blog** > **Neuer Eintrag**.
2. Titel, Datum, Kurzbeschreibung, Text. Bild ist optional.
3. **Entwurf** anhaken, wenn der Beitrag noch nicht erscheinen soll.
4. Speichern. Nach ein bis zwei Minuten ist er online. Die drei neuesten Beiträge erscheinen automatisch auf der Startseite.

### Unterseite anlegen oder ändern

1. Pages CMS > **Seiten**. Dort liegen Idee, Spielorte, Mitmachen, Kontakt, Impressum, Datenschutz.
2. Neue Seite: **Neuer Eintrag**. Die Adresse ergibt sich aus dem Titel beim ersten Speichern, z. B. Titel "Presse" wird zu `/presse/`. Spätere Titeländerungen ändern die Adresse nicht.
3. Damit sie im Menü erscheint: **Einstellungen > Hauptmenü** einen Eintrag mit Beschriftung und Link `/presse/` ergänzen.

Hinweis zur Seite **Spielorte**: Sie zeigt automatisch die Karte über dem Text. Wenn ihr sie umbenennt, bitte den Dateinamen `karte.md` behalten.

### Startseite ändern

Pages CMS > **Startseite**. Dort stehen Claim, Einleitung, Knopftexte, die drei Schritte, die Texte zur Karte, zur Spielwoche und die Mitmachen-Kacheln.

### Links richtig schreiben

- Interne Seiten mit Schrägstrichen: `/mitmachen/`
- Externe Seiten vollständig: `https://...`
- Die Sprungmarken auf der Mitmachen-Seite ergeben sich aus den Überschriften: "Für Orte" wird zu `/mitmachen/#fur-orte`. Wer die Überschrift ändert, muss den Link auf der Startseite anpassen.

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
| `data/einstellungen.yaml` | Name, Menü, Kontakt, Karte |
| `layouts/` | Aufbau der Seiten (Hugo-Vorlagen) |
| `assets/css/stil.css` | Farben und Gestaltung |
| `static/` | Schriften, Favicon, hochgeladene Bilder |
| `.pages.yml` | Was im CMS bearbeitet werden kann |
| `.github/workflows/` | Automatisches Veröffentlichen |

Die Seite wird mit Hugo gebaut, Version 0.167.0 ist fest eingestellt. Updates sind nicht nötig, die Seite läuft so weiter.
