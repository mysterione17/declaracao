const audio = document.getElementById("bg-music");
const toggle = document.getElementById("toggleMusic");
toggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggle.textContent = "⏸️";
  } else {
    audio.pause();
    toggle.textContent = "▶️";
  }
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];

  for (let i = 0; i < 100; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    });
  }
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  for (let p of particlesArray) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
}

initParticles();
animateParticles();
window.addEventListener("resize", initParticles);
