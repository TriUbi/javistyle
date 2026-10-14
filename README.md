# La Javi Paz

En hemsida på spanska byggd med React och vanlig CSS. Vite används för
utvecklingsserver och produktionsbygge. Inga andra paket eller externa typsnitt.

## Struktur

- `frontend/index.html`: HTML-ingång.
- `frontend/src/main.jsx`: startar React.
- `frontend/src/App.jsx`: sidans innehåll.
- `frontend/src/styles.css`: responsiv design.
- `backend/`: reserverad för framtida server och betalningar.

## Öppna sidan

```sh
npm --prefix frontend install
npm run dev
```

Öppna adressen som Vite visar i terminalen.

Kör kommandona från projektets rot (`lajavipaz`).

`npm run build` skapar produktionsfiler i `frontend/dist`.
`npm run preview` visar det färdiga bygget lokalt.

## Innehåll

Texter, fem tjänster, grundarens historia och kontaktuppgifter utgår från
https://javiera-paz.lovable.app/ och har bearbetats för denna sida.
Kontaktknappar och Empecemos öppnar ett formulär i en dialog. Formuläret
öppnar besökarens e-postprogram med mottagare, ämne och meddelande förifyllda.
Besökaren skickar själv meddelandet från sin e-postapp. Ingen server krävs.
Bokningssystem och betalningar är ännu inte implementerade.

## Fotografier

Användarens fotografier finns i `frontend/public/img/`. Ett urval används
på sidan: i heron, collaget, tjänsterna och grundarens porträtt.
Webbkopiorna har en längsta sida på 1600 pixlar för snabbare laddning.
Originalen i Downloads har inte ändrats. Inga bilder från referenshemsidan används.

## Sidor

- `/`: startsida.
- `/testimonios/`: omdömet från Selena Malvenda från Javis webbplats.
- `/metodo/`: Javis metod med samtal, analys och uppbyggnad.
- `/servicios/`: tjänster och kontakt för varje rådgivning.
- `/mi-historia/`: separat sida om Javiera, med egen HTML-ingång och metadata.

Vite bygger alla sex sidorna utan routerpaket.

## Fotos adicionales disponibles

- `DSC02626.jpg`: notas y planificación de una asesoría.
- `DSC02566.jpg`: selección de prendas en el armario.
- `DSC02494.jpg`: rueda de color y materiales de colorimetría.
- `DSC02443.jpg`: Javi y una clienta con una muestra de color.
- `DSC02401.jpg`: selección de accesorios frente al espejo.
- `DSC02364.jpg`: acompañamiento en la elección de gafas.

Estas seis fotos están guardadas para futuras secciones.

## Blog

`/blog/` visar en tidningsliknande sida med kategorifilter. Artiklar öppnas via
`/blog/?articulo=<slug>`. Fyra redaktionella utkast finns i
`frontend/src/data/articles.js` för granskning före publicering.

## GitHub Pages

El workflow `.github/workflows/pages.yml` publica las seis páginas al hacer push
a `main`. En GitHub, selecciona Settings → Pages → Source → GitHub Actions.
El proyecto usa Flexbox para sus distribuciones y conserva el formulario por correo.

Para comprobar una publicación bajo el nombre del repositorio:

```sh
SITE_BASE_PATH=/lajavipaz/ npm run build
```
