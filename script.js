// =====================================
// 1. Ajuste do volume da música
// =====================================
window.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = document.getElementById("musica-fundo");
  // Define o volume para 30% (ajuste como preferir)
  musicaFundo.volume = 0.1;
});

// =====================================
// 2. Slideshow Automático com Transição
// =====================================
const slides = document.querySelectorAll(".slides img");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Inicia o slide e alterna a cada 3 segundos
setInterval(nextSlide, 3000);
showSlide(currentSlide);

// =====================================
// 3. Efeito de “corações caindo”
// =====================================
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "❥"; // Pode usar "♥", "❣", etc.
  heart.style.position = "absolute";
  heart.style.top = "-50px";
  
  // Tamanho aleatório entre 20px e 40px
  const size = Math.random() * 20 + 20;
  heart.style.fontSize = size + "px";
  
  // Cores românticas aleatórias
  const colors = ["#ffffff", "#ffe4e1", "#ffcccc", "#ff99aa", "#ffc0cb"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Posição horizontal aleatória (0% a 100%)
  heart.style.left = Math.random() * 100 + "%";
  heart.style.zIndex = 9999;
  
  // Animação de queda
  const fallDuration = Math.random() * 5 + 5; // entre 5s e 10s
  heart.style.transition = `transform ${fallDuration}s linear`;

  heartsContainer.appendChild(heart);

  // Delay pequeno para disparar o CSS transition
  setTimeout(() => {
    // Rotação e queda
    heart.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
  }, 50);

  // Remove o coração após cair
  setTimeout(() => {
    heart.remove();
  }, fallDuration * 1000);
}

// Cria um coração a cada 700ms
setInterval(createHeart, 700);

console.log("Site romântico com música, corações e slideshow. Volume reduzido!");
