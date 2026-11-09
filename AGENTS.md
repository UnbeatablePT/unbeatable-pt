# Instructies voor AI-assistenten (ChatGPT, Codex en andere)

Deze repository is de website **unbeatable-pt.nl** van Unbeatable Personal Training (Anke, Breda).
De eigenaar is geen ontwikkelaar. Zij vraagt je in gewone taal om iets aan te passen. Jij doet het werk en legt in gewone taal uit wat er veranderd is.

## Het belangrijkste eerst

- **Alles wat op `main` komt, staat binnen een paar minuten live.** GitHub Pages publiceert automatisch. Er is geen testomgeving. Wees dus zorgvuldig.
- **Werk direct op `main`.** Maak geen branches of pull requests; de eigenaar weet niet wat dat is en dan blijft het werk liggen.
- **Doe alleen wat gevraagd is.** Verander geen andere teksten, opmaak of indeling "omdat het beter kan". Stel het eventueel voor, maar voer het pas uit na een ja.
- **Is de vraag onduidelijk? Vraag het eerst.** Bijvoorbeeld: welke tekst precies, op welke pagina, wat moet ervoor in de plaats komen.

## Hoe de site in elkaar zit

Gewone HTML, CSS en een beetje JavaScript. Geen framework, geen build-stap, geen `npm`.

| Bestand | Wat erin staat |
|---|---|
| `index.html` | De homepage, met alle secties onder elkaar |
| `over-anke.html` | De pagina "Over Anke" |
| `css/style.css` | Alle opmaak. Kleuren en lettertypes staan bovenaan in `:root` |
| `js/main.js` | Animaties, mobiel menu, de pijltjes bij de reviews |
| `assets/` | Logo en foto's |
| `CNAME` | Koppeling met het domein unbeatable-pt.nl. **Nooit aanpassen of verwijderen.** |
| `.github/workflows/` | Hulpscript om foto's op te halen. **Niet aanpassen.** |

Elke sectie in de HTML begint met een opmerking zoals `<!-- ===== AANBOD ===== -->`. Volgorde op de homepage:
HERO → WELKOM → OVER ANKE (kort) → AANBOD → WAAROM → REVIEWS → CONTACT → FOOTER.

De header (menu) en footer staan in **beide** HTML-bestanden. Pas je daar iets aan (menu-item, adres, telefoonnummer, copyright), doe het dan in allebei.

## Werkwijze bij elke wijziging

1. **Lees eerst het hele bestand** dat je gaat aanpassen, niet alleen het stukje dat je zoekt.
2. **Pas het aan in het volledige bestand** en sla het geheel op. Vervang nooit losse regels zonder het geheel te zien; zo ontstaan losse `</div>`-tags die de pagina breken.
3. **Haal je een onderdeel weg? Haal dan het hele blok weg**: van de openingstag tot en met de bijbehorende sluitingstag. Gaat het om een hele sectie, dan alles van de ene `<!-- ===== … ===== -->`-opmerking tot de volgende.
4. **Controleer voor je opslaat** of elke `<div>`, `<section>`, `<a>`, `<ul>` en `<figure>` die je hebt aangeraakt een passende sluitingstag heeft.
5. **Haal je HTML weg die eigen opmaak heeft** (een eigen class), haal dan ook de bijbehorende regels uit `css/style.css` weg. Dan blijft de stylesheet schoon.
6. **Commitbericht in het Nederlands**, kort en concreet, bijvoorbeeld: `Openingstijden toegevoegd aan contactsectie`.
7. **Vertel de eigenaar daarna in gewone taal** wat er veranderd is, en dat het binnen een paar minuten op unbeatable-pt.nl staat. Zegt de site daarna nog de oude tekst, dan helpt de pagina verversen (op de telefoon het tabblad sluiten en opnieuw openen).

## Veelvoorkomende verzoeken

- **Tekst aanpassen:** zoek de tekst letterlijk op in `index.html` of `over-anke.html` en vervang alleen die tekst. Laat de tags eromheen staan.
- **Review toevoegen:** kopieer in de sectie REVIEWS een compleet `<figure class="rcard">…</figure>`-blok, plak het direct erachter en pas naam en tekst aan. Reviews komen van Google; verzin nooit zelf een review of een naam.
- **Aantal Google-reviews of score aanpassen:** zoek in `index.html` op het oude getal en pas elke plek aan: de sterrenbadge in de HERO, de kop, het Google-blok en de knop in REVIEWS, en de SEO-gegevens (`"reviewCount"` en `"ratingValue"`) in de `<head>`.
- **Foto vervangen:** de eigenaar uploadt een nieuwe foto in `assets/`. Pas daarna in de HTML het `src="assets/…"` aan. Zet ook een korte, beschrijvende `alt`-tekst.
- **Contactgegevens wijzigen:** het mailadres en telefoonnummer staan in de CONTACT-sectie van `index.html` en in de footer van **beide** pagina's. Bij het telefoonnummer ook de `tel:`-link aanpassen (formaat `tel:+316…`).

## Wat je niet doet

- Geen contactformulier, WhatsApp-knop, cookiebanner of trackingscript toevoegen. Daar is bewust voor gekozen.
- Geen frameworks, bibliotheken of build-tools toevoegen (geen React, Tailwind, npm, enz.).
- `CNAME`, de map `.github/` en de bestandsnamen in `assets/` niet aanpassen of verwijderen.
- De copyrightregel in de footer (`© … Morgen, techpartner van het MKB.`) niet aanpassen of weghalen.
- Geen teksten, reviews, prijzen of claims verzinnen. Weet je iets niet, vraag het.

## Als er iets misgaat

Elke wijziging is terug te draaien. Breekt een wijziging de site, of vindt de eigenaar het niet mooi, zet dan het bestand terug naar de versie van vóór die commit en commit dat op `main` met een bericht als `Vorige versie van de homepage teruggezet`. Vertel de eigenaar dat het weer zoals vroeger is.

Voor grotere aanpassingen aan het ontwerp of de opbouw van de site kan de eigenaar beter contact opnemen met Morgen.
