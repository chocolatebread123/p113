function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

   
}

function draw() {
  image(video, 150, 100, 300, 300);
  fill(255,0,0);
  circle(50,50,80);
  circle(50,430,80);
  circle(590,50,80);
  circle(590,430,80);
  fill(0,128,0);
  rect(90,40,460,20);
  rect(90,420,460,20);
  rect(40,90,20,300);
  rect(580,90,20,300);
}

function take_snapshot(){    
  save('student_name.png');
}


