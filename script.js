// ====================================================
// 1) SENHA DE 4 DÍGITOS (Overlay) + Proteção do Site
// ====================================================
const CORRECT_PASSWORD = "1910"; // Ajuste a senha aqui

// Ao carregar DOM, associamos eventos para o overlay de senha
window.addEventListener("DOMContentLoaded", () => {
  const passwordOverlay = document.getElementById("password-overlay");
  const passwordInput = document.getElementById("passwordInput");
  const accessBtn = document.getElementById("accessBtn");

  accessBtn.addEventListener("click", () => {
    const userInput = passwordInput.value;
    if (userInput === CORRECT_PASSWORD) {
      // Remove o overlay ao digitar senha correta
      passwordOverlay.style.display = "none";
    } else {
      alert("Senha incorreta. Tente novamente!");
      passwordInput.value = "";
      passwordInput.focus();
    }
  });
});

// =====================================
// 2) Ajuste do volume da música
// =====================================
window.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = document.getElementById("musica-fundo");
  // Define o volume para 10% (ou outro valor de 0.0 a 1.0)
  musicaFundo.volume = 0.1;
});

// =====================================
// 3) Slideshow Automático com Transição
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
// 4) Efeito de “corações caindo”
// =====================================
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "❥"; // Pode usar "♥", "❣" etc.
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
  
  // Animação de queda (5s a 10s)
  const fallDuration = Math.random() * 5 + 5; 
  heart.style.transition = `transform ${fallDuration}s linear`;

  heartsContainer.appendChild(heart);

  // Pequeno delay para iniciar a queda
  setTimeout(() => {
    heart.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
  }, 50);

  // Remove coração após cair
  setTimeout(() => {
    heart.remove();
  }, fallDuration * 1000);
}

// Cria um coração a cada 700ms
setInterval(createHeart, 700);

console.log("Site romântico com senha, música, corações e slideshow. Volume reduzido!");
