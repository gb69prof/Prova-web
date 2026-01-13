# Web App Esempio (Media + Testo + Icone)

## Contenuto
- `index.html`: pagina principale con area media (immagine/mappa/video/3D) + pannello testo
- `approfondimento.html`: pagina separata per l'icona 4
- `css/style.css`: stile
- `js/app.js`: logica dei pulsanti (icona 1/2/3)
- `js/three_scene.js`: demo 3D con cubo (Three.js da CDN)
- `assets/placeholder.jpg`: immagine segnaposto

## Come sostituire i tuoi contenuti
Apri `js/app.js` e cambia:
- `CONFIG.mapEmbedUrl` (Google Maps embed)
- `CONFIG.videoEmbedUrl` (YouTube embed)
- `CONFIG.imageUrl` (la tua immagine in `assets/`)

## Nota 3D
Questa demo mostra un cubo. Se vuoi una mesh vera:
- metti un file `.glb` in `assets/`
- aggiungiamo `GLTFLoader` e il codice di caricamento.
