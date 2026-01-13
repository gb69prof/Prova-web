// ====== Config rapida (sostituisci con i tuoi contenuti) ======
const CONFIG = {
  // Mappa (Embed) - qui Foggia come esempio
  mapEmbedUrl: "https://www.google.com/maps?q=Foggia&output=embed",

  // Video - esempio YouTube
  // Sostituisci l'ID video: https://www.youtube.com/watch?v=ID -> src: https://www.youtube.com/embed/ID
  videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  // Immagine principale
  imageUrl: "assets/placeholder.jpg"
};

const el = (id) => document.getElementById(id);

const heroImage = el("heroImage");
const mapWrap = el("mapWrap");
const videoWrap = el("videoWrap");
const threeWrap = el("threeWrap");
const mapFrame = el("mapFrame");
const videoFrame = el("videoFrame");
const modeBadge = el("modeBadge");

function setBadge(label){
  modeBadge.textContent = label;
}

function hideAll(){
  heroImage.classList.add("hidden");
  mapWrap.classList.add("hidden");
  videoWrap.classList.add("hidden");
  threeWrap.classList.add("hidden");
  mapWrap.setAttribute("aria-hidden", "true");
  videoWrap.setAttribute("aria-hidden", "true");
  threeWrap.setAttribute("aria-hidden", "true");
}

function showImage(){
  hideAll();
  heroImage.src = CONFIG.imageUrl;
  heroImage.classList.remove("hidden");
  setBadge("IMMAGINE");
}

function showMap(){
  hideAll();
  if (!mapFrame.src) mapFrame.src = CONFIG.mapEmbedUrl;
  mapWrap.classList.remove("hidden");
  mapWrap.setAttribute("aria-hidden", "false");
  setBadge("MAPPA");
}

function showVideo(){
  hideAll();
  if (!videoFrame.src) videoFrame.src = CONFIG.videoEmbedUrl;
  videoWrap.classList.remove("hidden");
  videoWrap.setAttribute("aria-hidden", "false");
  setBadge("VIDEO");
}

function showThree(){
  hideAll();
  threeWrap.classList.remove("hidden");
  threeWrap.setAttribute("aria-hidden", "false");
  setBadge("3D");
  // avvia/resize scena
  if (window.__threeDemo) window.__threeDemo.ensureRunning();
}

function setActiveTool(mode){
  document.querySelectorAll(".tool").forEach((t) => {
    const isBtn = t.tagName.toLowerCase() === "button";
    if (!isBtn) return;
    const active = t.dataset.mode === mode;
    t.classList.toggle("active", active);
    t.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll("button.tool").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    setActiveTool(mode);
    if (mode === "image") showImage();
    if (mode === "map") showMap();
    if (mode === "video") showVideo();
    if (mode === "three") showThree();
  });
});

// Pulsanti demo
el("btnReplaceText").addEventListener("click", () => {
  el("title").textContent = "Tappa 1 — Esempio di Titolo";
  el("subtitle").textContent = "Qui incolli un testo vero: breve, chiaro, con un ritmo leggibile su telefono.";
  el("content").innerHTML = `
    <p><strong>Esempio:</strong> Foggia cresce tra pianura e passaggi storici. Questa scheda mostra come integrare media e testo senza appesantire.</p>
    <p class="note"><strong>Consiglio pratico:</strong> spezza il testo in blocchi, usa titoletti e non fare “muri”.</p>
  `;
});

el("btnReplaceImage").addEventListener("click", () => {
  // Simula una nuova immagine (riusa la stessa, ma qui metterai la tua)
  CONFIG.imageUrl = "assets/placeholder.jpg";
  showImage();
  setActiveTool("image");
});

// init
showImage();
