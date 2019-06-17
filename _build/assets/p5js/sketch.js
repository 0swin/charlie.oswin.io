var canvas;
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  pixelDensity(1);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.parent('p5Container');
  canvas.style('z-index','-1');
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP();
  flowfield = new Array(cols*rows);
  for (var i = 0; i < 20; i++){
    particles[i] = new Particle();
  }

}

function draw(){
  var yoff = 20;
   noiseDetail(1,0)
   // noiseDetail(4,.4)
  for (var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x < cols; x++) {

      var index = x + y * cols;
      // changer multiplicateur pour plus de variété dans la direction des vecteurs
      // var angle = noise(xoff, yoff, zoff)*TWO_PI*map(mouseY,0,width,1,2);
      // var angle = noise(xoff, yoff, zoff)*TWO_PI*2;
      // var angle = noise(xoff, yoff, zoff)*TWO_PI*2000;

      // var angle = noise(xoff, yoff, zoff)*TWO_PI*25;
      var angle = noise(xoff, yoff, zoff)*TWO_PI/2;


      var r = noise(xoff, yoff)*255 ;
      var v = p5.Vector.fromAngle(angle);
      // control magnétisme aux vecteurs
      v.setMag(10);
      flowfield[index] = v;
      xoff += inc;
      stroke(0,50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      // rect(x*scl, y*scl, scl, scl);
    }
    yoff += inc;

    zoff += 0.0001;
  }

  for (var i = 0; i <particles.length; i++){
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
}

}
