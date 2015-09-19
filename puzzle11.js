void setup()
  {
   size(500,500);
    frameRate(10);
    background(0);
  }
  float x = 0;
  void draw()
  {
    stroke(0);
    strokeWeight(3);
    x = x + 10;
  if (x > width) {
    x = 10;
  }
  line(x, 500, x, 0); 
  stroke(255);
  line(x,500,x,random(height));
  
}
