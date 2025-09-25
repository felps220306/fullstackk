// Gera um inteiro aleatório de 0 a 99 quando a página carrega
// (valor 2.0) Math.random()  +  (valor 1.0) Math.floor()
let segredo = Math.floor(Math.random() * 100); // 0 incluso, 100 não incluso

// Referências aos elementos
const form = document.getElementById("formGuess");
const input = document.getElementById("palpite");
const statusEl = document.getElementById("status");
const btnReset = document.getElementById("btnReset");

// Função para avaliar o palpite
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = parseInt(input.value, 10);

  // validação básica
  if (Number.isNaN(valor) || valor < 0 || valor > 99) {
    statusEl.textContent = "Digite um número válido entre 0 e 99.";
    // pinta de vermelho para indicar erro de entrada também
    // (valor 2.0) usar setProperty para trocar a cor de fundo
    statusEl.style.setProperty("background-color", "red");
    statusEl.style.setProperty("color", "white");
    return;
  }

  // (valor 2.0) if: maior, menor, igual
  if (valor === segredo) {
    statusEl.textContent = `Acertou! O número era ${segredo}.`;
    // sucesso em verde
    statusEl.style.setProperty("background-color", "#2ecc71");
    statusEl.style.setProperty("color", "white");
    input.disabled = true;
  } else if (valor > segredo) {
    statusEl.textContent = "É menor! Tente de novo.";
    // (valor 2.0) troca fundo pra vermelho quando errar
    statusEl.style.setProperty("background-color", "red");
    statusEl.style.setProperty("color", "white");
  } else {
    statusEl.textContent = "É maior! Tente de novo.";
    // (valor 2.0) troca fundo pra vermelho quando errar
    statusEl.style.setProperty("background-color", "red");
    statusEl.style.setProperty("color", "white");
  }

  // prepara próximo chute
  input.focus();
  input.select();
});

// Botão para recomeçar o jogo
btnReset.addEventListener("click", () => {
  segredo = Math.floor(Math.random() * 100); // novo número 0–99
  statusEl.textContent = "Novo jogo! Digite um número entre 0 e 99 e clique em “Chutar”.";
  statusEl.style.setProperty("background-color", "#f0f0f0");
  statusEl.style.setProperty("color", "inherit");
  input.value = "";
  input.disabled = false;
  input.focus();
});
