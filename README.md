# Unbeatable Personal Training — website

Statische website (HTML, CSS en een beetje JavaScript) voor [unbeatable-pt.nl](https://unbeatable-pt.nl). Geen bouwstap, geen framework: wat je in deze map ziet, is wat er online staat.

## Mapstructuur

```
index.html          Homepagina
over-anke.html      Pagina "Over Anke"
css/style.css       Alle opmaak (kleuren en lettertypes bovenaan in :root)
js/main.js          Animaties, mobiel menu en het contactformulier
assets/             Logo en foto's
download-fotos.sh   Haalt eenmalig de foto's op van de oude Lovable-site
```

## Eerste keer: foto's ophalen

De foto's staan nog op de oude site en moeten eenmalig de repo in, vóórdat de Lovable-site offline gaat of het domein wordt omgezet. Twee manieren:

- **Zonder terminal (aanbevolen):** zet de bestanden op GitHub, ga naar het tabblad **Actions**, kies **Foto's ophalen** en klik **Run workflow**. Na een halve minuut staan de foto's in `assets/`.
- **Met terminal:** draai `bash download-fotos.sh` in deze map en commit de map `assets/`.

## Tekst of foto's aanpassen

- **Tekst:** open `index.html` of `over-anke.html` en wijzig de tekst tussen de tags. Elke sectie begint met een duidelijke opmerking, bijvoorbeeld `<!-- ===== AANBOD ===== -->`.
- **Foto vervangen:** zet een nieuwe foto in `assets/` met dezelfde bestandsnaam, of pas de `src="assets/..."` aan. Liefst JPG, maximaal ±1600 px breed.
- **Kleuren:** bovenaan `css/style.css` (`--gold`, `--bg`, enz.).
- **Review toevoegen:** kopieer een `<figure class="rcard">…</figure>`-blok in de sectie REVIEWS en pas naam en tekst aan. Elke rij staat er twee keer in (voor de doorlopende animatie), dus zet een nieuwe review in beide helften van dezelfde rij.
- **Aantal reviews / score:** zoek op `41` in `index.html` (staat in de hero, de cijferbalk, de reviewsectie en de SEO-gegevens bovenaan).

## Contact

Er is bewust geen formulier en geen WhatsApp-knop: bezoekers mailen of appen Anke direct. Het mailadres en telefoonnummer staan in de sectie CONTACT in `index.html` en in de footer van beide pagina's.

## Online zetten met GitHub Pages

1. Zet deze map in een GitHub-repository.
2. Ga naar **Settings → Pages**, kies **Deploy from a branch**, branch `main`, map `/ (root)`.
3. Voeg onder **Custom domain** `unbeatable-pt.nl` toe (GitHub maakt dan een `CNAME`-bestand aan).
4. Zet bij de domeinregistrar de DNS-records voor GitHub Pages:
   - A-records voor `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME voor `www`: `<gebruikersnaam>.github.io`
5. Vink **Enforce HTTPS** aan zodra dat kan.

Elke wijziging die op `main` komt, staat binnen een minuut of twee live.

## Let op: oude link

De oude site gebruikte `/over-anke`; deze versie gebruikt `/over-anke.html`. GitHub Pages serveert `over-anke.html` ook gewoon op `/over-anke`, dus bestaande links blijven werken.
