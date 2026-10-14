# Asesoría de moda

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

## Innehåll att färdigställa

`ESTILO` är ett tillfälligt arbetsnamn. Tjänsterna är förslag.
Byt ut namnet och komplettera grundarens biografi, porträtt och kontaktuppgifter
innan publicering. Sidan tar ännu inte emot bokningar eller betalningar.
