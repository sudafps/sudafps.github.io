// 🎄 Christmas-themed background: snow, candy canes, ornaments, and stars
let canvas, ctx, items = [];
const ITEM_COUNT = 200;
const IMAGES = {};

const ICONS = [
  { src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f384.svg", type: "tree" },
  { src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f36c.svg", type: "candy" },
  { src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f381.svg", type: "gift" },
  { src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2b50.svg", type: "star" },
  { src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2744.svg", type: "snow" }
];

// Preload all images before animation starts
function preloadImages() {
  return Promise.all(ICONS.map(icon => new Promise(resolve => {
    const img = new Image();
    img.src = icon.src;
    img.onload = () => { IMAGES[icon.type] = img; resolve(); };
  })));
}

function initChristmas() {
  canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();

  // Create random festive items
  for (let i = 0; i < ITEM_COUNT; i++) {
    const type = ICONS[Math.floor(Math.random() * ICONS.length)].type;
    items.push({
      type,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 15 + Math.random() * 25,
      speedY: 0.3 + Math.random() * 1.5,
      speedX: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      alpha: 0.8 + Math.random() * 0.2
    });
  }

  animateChristmas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animateChristmas() {
  // 🎅 Warm crimson background
  ctx.fillStyle = "rgba(150, 10, 45, 0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i of items) {
    i.y += i.speedY;
    i.x += i.speedX;
    i.angle += i.rotationSpeed;

    if (i.y > canvas.height + 40) i.y = -40;
    if (i.x > canvas.width + 40) i.x = -40;
    if (i.x < -40) i.x = canvas.width + 40;

    ctx.save();
    ctx.translate(i.x, i.y);
    ctx.rotate(i.angle);
    ctx.globalAlpha = i.alpha;

    const img = IMAGES[i.type];
    if (img) ctx.drawImage(img, -i.size / 2, -i.size / 2, i.size, i.size);
    else {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(0, 0, i.size / 3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(animateChristmas);
}

async function startEverything() {
  await preloadImages();
  if (!canvas) initChristmas();
  const audio = document.getElementById('audio');
  if (audio) {
    audio.volume = 0.3;
    audio.play().catch(e => console.error("Audio failed:", e));
  }
}

window.onload = async () => {
  await preloadImages();
  initChristmas();
};
