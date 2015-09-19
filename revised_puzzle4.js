background(255);
size(500,500);
int x=20;
int y=20;
float hue=0;
colorMode(HSB,100);

while (y!=480)
{
  while(x<=480)
  {
   fill(hue,100,100);
   noStroke();
    ellipse(x,y,18,18);
    x=x+20;
    hue=hue+0.15;
  }
  x=20;
  y=y+20;
}
