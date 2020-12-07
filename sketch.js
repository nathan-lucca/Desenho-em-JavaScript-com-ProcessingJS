/* Desenho de um Boneco de Neve usando o Processing.JS! */

function setup() {
  createCanvas(410, 400); // criando um quadrado da proporção de 410 x 450
}

function draw() {
  background(135, 206, 250); // cor do background

  fill(50, 205, 50); // cor do chão
  strokeWeight(1); // grossura da borda
  stroke(50, 205, 50); // cor da borda do chão
  rect(1, 300, 408, 100); // chão

  fill(255, 250, 250); // cor das bolas
  strokeWeight(0); // grossura da borda das bolas
  stroke(255, 250, 250); // cor da borda as bolas
  ellipse(200, 300, 150, 150); // bola maior
  ellipse(200, 200, 100, 100); // bola média

  fill(255, 255, 0); // cor do sol
  ellipse(70, 70, 100, 100); // sol

  fill(255, 250, 240); // cor da nuvem
  ellipse(160, 40, 50, 50); // nuvem
  ellipse(200, 40, 50, 50); // nuvem2
  ellipse(240, 40, 50, 50); // nuvem3
  ellipse(300, 40, 50, 50); // nuvem4
  ellipse(340, 40, 50, 50); // nuvem5
  ellipse(380, 40, 50, 50); // nuvem6

  fill(0, 0, 0); // cor do chapéu
  stroke(0, 0, 0); // cor da borda do chapéu
  ellipse(200, 155, 110, 10); // chapéu
  rect(164, 70, 75, 85); // parte de cima do chapéu
  fill(255, 0, 0); // cor do laço do chapéu
  rect(164, 120, 75, 20); // laço do chapéu

  fill(0, 0, 0); // cor das bolas menores
  strokeWeight(1); // grossura da borda das bolas menores
  ellipse(200, 260, 25, 25); // bola menor da bola média
  ellipse(200, 300, 25, 25); // segunda bola menor da bola média
  ellipse(200, 340, 25, 25); // terceira bola menor da bola média

  fill(0, 0, 0); // cor dos olhos
  strokeWeight(0); // grossura da borda dos olhos
  ellipse(180, 180, 20, 20); // olho esquerdo
  ellipse(220, 180, 20, 20); // olho direito

  strokeWeight(5); // grossura da boca
  point(180, 215); // ponto1
  point(185, 218); // ponto2
  point(190, 221); // ponto3
  point(196, 223); // ponto4
  point(202, 223); // ponto5
  point(208, 222); // ponto6
  point(214, 220); // ponto7
  point(220, 218); // ponto8

  fill(255, 190, 0); // cor do nariz
  strokeWeight(0); // grossura da borda do nariz
  ellipse(200, 205, 20, 20); // nariz

  fill(255, 250, 240); // cor do brilho do nariz
  ellipse(197, 202, 8, 7); // brilho do nariz

  strokeWeight(3); // grossura dos braços
  stroke(139, 69, 19); // cor dos braços
  line(124, 290, 50, 280); // braço esquerdo
  line(275, 290, 350, 280); // braço direito

}
