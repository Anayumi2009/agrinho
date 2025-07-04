let tractorX = 200;  // Posição inicial do trator
let tractorY = 400;
function setup() {
  createCanvas(800, 600);
  background(135, 206, 235);  // Cor do céu
}

function draw() {
  background(135, 206, 235);  // Redesenha o fundo para o trator se mover no campo
  
  // Fundo (campo)
  drawField();

  // Trator
  drawTractor();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    tractorX -= 10;  // Move para a esquerda
  } else if (keyCode === RIGHT_ARROW) {
    tractorX += 10;  // Move para a direita
  } else if (keyCode === UP_ARROW) {
    tractorY -= 10;  // Move para cima
  } else if (keyCode === DOWN_ARROW) {
    tractorY += 10;  // Move para baixo
  }
}

function drawField() {
  // Grama (simples retângulos verdes)
  fill(34, 139, 34);  // cor da grama
  noStroke();
  rect(0, height - 100, width, 100); // Campo

  // Sol (círculo amarelo)
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 100, 100, 100); // Sol
  
  // Nuvens (círculos brancos)
  fill(255);
  ellipse(100, 80, 80, 50); // Nuvem 1
  ellipse(200, 60, 90, 60); // Nuvem 2
  ellipse(600, 150, 100, 60); // Nuvem 3
}

function drawTractor() {
  // Corpo do trator (retângulo verde)
  fill(0, 128, 0);
  rect(tractorX, tractorY, 150, 60);

  // Roda traseira (círculo)
  fill(50);
  ellipse(tractorX + 30, tractorY + 60, 50, 50);

  // Roda dianteira (círculo)
  ellipse(tractorX + 130, tractorY + 60, 50, 50);

  // Janela do trator (retângulo)
  fill(0, 191, 255);
  rect(tractorX + 35, tractorY + 10, 40, 30);

  // Capô do trator (triângulo)
  fill(0, 128, 0);
  triangle(tractorX + 80, tractorY, tractorX + 100, tractorY, tractorX + 90, tractorY - 30);
  
  // Chassi (retângulo pequeno)
  fill(139, 69, 19);  // Cor marrom
  rect(tractorX + 40, tractorY + 60, 40, 20); // Pequeno retângulo para o chassi

  // Escapamento (círculo)
  fill(169, 169, 169);  // Cor do escapamento
  ellipse(tractorX + 120, tractorY - 20, 20, 20);
}