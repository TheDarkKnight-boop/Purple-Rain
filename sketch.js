// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background
//this is just a test comment 
var drops = [];
var paused = false; 
// TODO: Add a backgroundColor variable here. Something like var backgroundColor = [0, 0, 130];
function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  if (paused) {
    // do paused stuff
    console.log('PAUSED'); 
    textSize(80);  
    text('PAUSED', 100, 100); 
  } else {
    // TODO: Change this call to use the backgroundColor variable from above.
    background(0, 0, 150);
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
  }
}

function keyPressed() {
  if (key === 'p') {
    if (paused) {
      paused = false;
    } else {
      paused = true; 
    }
  }
}

function mouseClicked() {
  // TODO: Don't call background() here, just set the backgroundColor variable to the new value.
  background(255); 
}   
