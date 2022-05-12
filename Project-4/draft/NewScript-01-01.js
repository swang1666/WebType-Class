let bubbles = [];

let birds = []; 

function preload() {
    for(let i = 0; i < 8; i++){
        birds[i] = loadImage("img/BB-Swollow-"+i+".png")
    }

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 14; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(60, 240);
        let bird = random(birds);
        let b = new Bubble(x, y, r, bird);
        bubbles.push(b);
    }

  }

  function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }

}
  
  function draw() {
    background(255);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  }

  class Bubble {
      constructor(x, y, r, img) {
          this.x = x;
          this.y = y;
          this.r = r;
          this.bird = img;
      }

      clicked(px, py) {
          let d = dist(px, py, this.x, this.y);
          if (d < this.r) {
    
          }
      }

      move() {
          this.x = this.x;
          this.y = this.y;
      }

      show() {
          image(this.bird, this.x, this.y, this.r, this.r);
          //stroke(255);
          //strokeWeight(4);
          //fill(this.brightness,125);
          //ellipse(this.x, this.y, this.r * 2);
      }
  }

