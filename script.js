function abrirTapa() {
  const lid = document.getElementById("lid");
  lid.setAttribute("y", "40");

  setTimeout(() => {
    lid.setAttribute("y", "60");
  }, 3000);
}

function hablar() {
  const voz = document.getElementById("voz");
  const animacion = document.getElementById("animacion");

  voz.play();
  animacion.classList.add("show");

  setTimeout(() => {
    animacion.classList.remove("show");
  }, 4000);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function ampliar(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: `rgba(39, 174, 96, ${Math.random()})`
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

lottie.loadAnimation({
  container: document.getElementById('binnyAnimation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/binny.json' // Ruta al archivo JSON
});


