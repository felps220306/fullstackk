const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'relampago_mcqueen.png'; // caminho da imagem enviada

// Posição inicial
let x = canvas.width / 2;
let y = canvas.height / 2;

// Tamanho da imagem no canvas
const imgWidth = 120;
const imgHeight = 70;

// Função para desenhar
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, imgWidth, imgHeight);
}

// Atualiza posição com o mouse
canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  x = mouseX - imgWidth / 2;
  y = mouseY - imgHeight / 2;

  // Mantém a imagem dentro do canvas
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x + imgWidth > canvas.width) x = canvas.width - imgWidth;
  if (y + imgHeight > canvas.height) y = canvas.height - imgHeight;

  draw();
});

// Mantém a imagem visível se o mouse sair do canvas
canvas.addEventListener('mouseleave', draw);

// Quando a imagem carregar, desenha no canvas
img.onload


