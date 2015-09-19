//bouncing balls
class Ball 
{
  float x, y;
  float vx, vy;
  float radius;
  float hue;
  Ball() 
    {
      x = random(width);
      y = random(height);
      radius = 10;
      vx = random(5);
      vy = random(8);
      hue=(random(100));
    }

  void draw() 
    {
      ellipse(x, y, radius*2, radius*2);
      colorMode(HSB,100);
      fill(hue,100,100);
      noStroke();

    }
  

  void move() 
    {
      x = x + vx;
      y = y + vy;
      if (x < radius || x > width-radius) 
       {
        vx = -vx;
        }
      if (y < radius || y > height-radius) 
      {
        vy = -vy;
      }
    }
     void click()//controls the ball when clicked
    {
      if (mousePressed==true)
      {
        x=mouseX;
        y=mouseY;
      }
    }
}

Ball b;//ball1
Ball d;//ball2
void setup() 
  {
    size(500, 500);
    b = new Ball();
    d= new Ball();
  }

void draw() 
  {
    background(100,0,100);
    b.draw();
    b.move();
    b.click();
    d.draw();
    d.move();
 
  }
  
