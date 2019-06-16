function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.maxspeed = 2;
  this.h = 120;

  this.strkW = windowHeight*0.002;
  if (this.strkW < .5) {
    this.strkW = .5;
  }

  console.log(this.strkW);

  let xoff = 50;
  let grisMin = 80;
  let grisMax = 225;


  // this.maxspeed = function(){
  //   this.maxspeed = this.maxspeed ;
  // }
  // if (this.maxspeed > 10) {
  //   this.maxspeed = 1;
  // }



  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

// noir et blanc //
  this.show = function() {
    stroke(this.h, 20);
    this.h = this.h + map(noise(xoff),0,1,-.1,.4);
    if (this.h > grisMax) {
      this.h = grisMin*grisMax/2;
    }

    if (this.h < grisMin) {
      this.h = grisMin;
    }


    strokeWeight(this.strkW);


    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    // bezier(this.pos.x, this.pos.y,width,height,width+width/2,height+height/2, this.prevPos.x, this.prevPos.y);

    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }

}
