background(0);
size(500,500);

int x=20;
int y=20;
int z=480;
int y2=460;

while(x!=z)
  {
    while (x<z)
      {
        ellipse(x,y,18,18);
        ellipse(x,y2,18,18);
        fill(255);
        noStroke();
        x=x+20;
      }
  y=y+20;
  y2=y-20;
  x=y;
  z=z-20;
  }
