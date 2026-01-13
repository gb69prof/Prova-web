// Demo 3D minimale (Three.js) - cubo rotante.
// Per caricare una mesh GLB in futuro: aggiungi GLTFLoader e un file .glb nella cartella assets.

(function(){
  const canvas = document.getElementById("threeCanvas");
  if (!canvas || !window.THREE) return;

  let renderer, scene, camera, cube, animId;
  let running = false;

  function init(){
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    scene = new THREE.Scene();

    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 450;

    camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.set(0, 0.9, 2.4);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(2, 3, 1);
    scene.add(dir);

    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.35, metalness: 0.1 });
    cube = new THREE.Mesh(geo, mat);
    scene.add(cube);

    resize();
  }

  function resize(){
    if (!renderer || !camera) return;
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function tick(){
    if (!running) return;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.005;
    renderer.render(scene, camera);
    animId = requestAnimationFrame(tick);
  }

  function start(){
    if (running) return;
    running = true;
    tick();
  }

  function stop(){
    running = false;
    if (animId) cancelAnimationFrame(animId);
  }

  function ensureRunning(){
    if (!renderer) init();
    resize();
    start();
  }

  window.addEventListener("resize", resize);

  // Espone un handle usato da app.js
  window.__threeDemo = { ensureRunning, stop };
})();
