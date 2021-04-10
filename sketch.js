const num = 30;
let walker = []; //小文字で始まるオブジェクト，大文字で始まるクラス
let walkerColor = [];
let song;

function preload() {
    song = loadSound('./music/季節は巡る.wav')
}

function setup() {
  //映像再生
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  for(let i = 0; i < num; i = i + 1) {
    walker[i] = new Walker();
    walker[i].position = createVector(random(width), random(height))
    walkerColor[i] = color(random(60, 180), random(100), random(100));
  }
  
  //楽曲再生
  song.play();
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  for(let i = 0; i < num; i = i + 1) {
    fill(walkerColor[i]);
    walker[i].draw(); 
  }
}

class Message{
  constructor() {
      fill(255);
  };
  draw() {
      fill(255);
      text('季節は巡る');
  }
}

class Walker{
  constructor() {
    this.position = createVector(width / 2, height / 2);
    fill(255, 31);
  }
  draw() {
    for(let i = 0; i < 10; i = i + 1){
    this.velocity = createVector(random(-1.0, 1.0), random(-1.0, 1.0));
    this.position.add(this.velocity);
    noStroke();    
    leaf(this.position.x, this.position.y, 40); 
    }
  }
}

function leaf(leafPositionX, leafPositionY, size) {
  push();
  translate(leafPositionX, leafPositionY);
	rotate(PI / 4.0);
  triangle(0, 0, 
           size * cos(radians(20)), size * sin(radians(20)), 
           size * cos(radians(-20)), size * sin(radians(-20)));
	rotate(PI / 4.0);
	triangle(0, 0, 
           size * 1.5 * cos(radians(1)), size * 1.5 * sin(radians(1)), 
           size * 1.5 * cos(radians(-1)), size * 1.5 * sin(radians(-1)));
  rotate(PI / 4.0);
  triangle(0, 0, 
           size * cos(radians(20)), size * sin(radians(20)), 
           size * cos(radians(-20)), size * sin(radians(-20)));
  rotate(PI / 2.0);
  triangle(0, 0, 
           size * cos(radians(20)), size * sin(radians(20)), 
           size * cos(radians(-20)), size * sin(radians(-20)));
  rotate(PI / 2.0);
  triangle(0, 0, 
           size * cos(radians(20)), size * sin(radians(20)), 
           size * cos(radians(-20)), size * sin(radians(-20)));
  pop();
}

/*function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying()はブール値を返す
        song.stop();
        //background(255, 0, 0);
    }
    else {
        song.play();
        //background(0, 255, 0);
    }
} */