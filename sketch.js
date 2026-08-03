t = 255;
v1 = 0;
v2 = 0;
v3 = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {

  
  if (keyCode == 49) {
    v1 = 0
    v2 = 0
    v2 = v2 + 255
  }

  if(keyCode == 50)
  {
    v2 = 0
    v3 = 0
    v1 = 255
  }

  if(keyCode == 51)
  {
    v1 = 0
    v2 = 0
    v3 = 255
  }

  if(keyCode == 52)
  {
    v1 = 0
    v2 = 0
    v3 = 0
  }

  if(keyCode == 53)
  {
    v1 = 255
    v2 = 255
    v3 = 255
  }

if (keyCode == 54)
{
  t = 200
}

if(keyCode == 55)
{
  t = 175
}

if(keyCode == 56)
{
  t = 75
}

  if(keyCode == 57)
  {
    t = 0
  }

  if(keyCode == 48)
  {
    t = 255
  }
  
  if(mouseIsPressed){
  noStroke();
    fill(v1, v2, v3, t)
    square(pmouseX, pmouseY, 8)
  }

  
  if(keyCode == 13){
    clear();
  }
  
}

