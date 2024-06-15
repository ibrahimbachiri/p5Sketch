// This was a short demo of  my game i ve made it with javascript   and using p5 library 

x =200,y= 300,rx =200,r1=10,s=8 ,play=false,w=60
h=20,mySound,mybac,img;

frameCount =false
function preload()
{
      soundFormats('wav');
      mySound =loadSound('game');
      soundFormats('mp3');
      mybac =loadSound('bac');
      img = loadImage('d.png');
      bk = loadImage('basket.png');
      bmg=loadImage('a.png');cmg=loadImage('c.png');
      dmg=loadImage('d.png');emg=loadImage('e.png');
      fmg=loadImage('f.png');gmg=loadImage('g.png');
      hmg=loadImage('h.png');gmg=loadImage('i.png');
               jmg=loadImage('j.png');kmg=loadImage('k.png');
      lmg=loadImage('l.png');mmg=loadImage('m.png');
     nmg=loadImage('n.png');omg=loadImage('o.png');
     pmg=loadImage('p.png');qmg=loadImage('q.png');
     rmg=loadImage('r.png');smg=loadImage('s.png');
     tmg=loadImage('t.png');
}

function setup()
{
      createCanvas(400, 400);

      Button = createButton('Start');
      Button.position(175, 200);
      Button.mousePressed(Start);
  
      // Button = createButton('Start');
      // Button.position(250, 200);
      // Button.mousePressed(Start);
      textSize(30);text(frameCount, 50, 50);
      frameRate(1000);textSize(30);
  
      
}
 
function Start() {
    play = true;
    r1 = 10;
    frameCount = 0;
    loop();
}
function draw() 
{
  // if(bmg){
  //   image(bmg,rx,r1,20,20)
  // }
    if(r1>390) {
        Button.show();
     }
  
   else {
      Button.hide();
    }
      background(20);
      //image(img, rx, r1, 64, 64);
      text(frameCount, 300, 50);

if (frameCount >= 500 && frameCount< 1000 &&r1 >390)
{
      textSize(30);
        frameCount==1000
         textSize(18)
        text('You Looose', 165, 180);
        noLoop()
} 
  if (frameCount >= 2000 && frameCount< 3000 &&r1 >390) 
{           
      textSize(30);
      text('Level 2', 50, 40);
      frameCount==2000
      textSize(20)  
      text('You Looose', 100, 100);
      noLoop()
      
  
        // text('Level 2', 30, 40);
}
  
if (frameCount >= 3000 && frameCount< 4000 &&r1 >390)
{
      textSize(30);
      text('Level 3', 30, 40);
        frameCount==3000
   textSize(20)  
      text('You Looose', 100, 100);
          noLoop()
       
        text('Level 3', 30, 40);  
}  if (frameCount >= 4000 && frameCount< 5000 &&r1 >390)
{
      textSize(30);
      text('Level 4', 30, 40);
  frameCount==4000
   textSize(20)  
      text('You Looose', 100, 100);
          noLoop()
        text('Level 4', 30, 40);

}   if (frameCount >= 5000 && frameCount< 6000 &&r1 >390)
{
      textSize(30);
      text('Level 5', 30, 40);
  frameCount==5000
   textSize(20)  
      text('You Looose', 100, 100);
          noLoop()
        text('Level 5', 30, 40);

  
}  if (frameCount >= 6000 && frameCount< 5000 &&r1 >390)
{
      textSize(30);
      text('Level 6', 30, 40);
  frameCount==6000
   textSize(20)  
      text('You Looose', 100, 100);
          noLoop()
} if (frameCount >= 6000  && r1 <390)
{
      textSize(30);
      text('Level 6', 30, 40);
  frameCount==6000
       textSize(20)  
      text('You Win', 170, 100);
        noLoop()
       Button = createButton('Start');
      Button.position(175, 200);
      Button.mousePressed(Start);
} 

        if(frameCount < 300)
        {
        image(img,140,20, 20,20)
        image(img,rx,r1, 34,34)
        }
        if(frameCount > 300)
        {
        image(bmg,140,20, 20,20)
        image(bmg,rx,r1, 34,34)
        }
        if(frameCount > 600)
        {
        image(cmg,140,20, 20,20)
        image(cmg,rx,r1, 34,34)
        }if(frameCount > 900)
        {
        image(dmg,140,20, 20,20)
        image(dmg,rx,r1, 34,34)
        }if(frameCount > 1200)
        {
        image(emg,140,20, 20,20)
        image(emg,rx,r1, 34,34)
        }if(frameCount > 1500)
        {
        image(fmg,140,20, 20,20)
        image(fmg,rx,r1, 34,34)
        }if(frameCount > 1800)
        {
        image(gmg,140,20, 20,20)
        image(gmg,rx,r1, 34,34)
        }if(frameCount > 2100)
        {
        image(hmg,140,20, 20,20)
        image(hmg,rx,r1, 34,34)
        }if(frameCount > 2400)
        {
        image(img,140,20, 20,20)
        image(img,rx,r1, 34,34)
        }if(frameCount > 2700)
        {
        image(jmg,140,20, 20,20)
        image(jmg,rx,r1, 34,34)
        }if(frameCount > 3000)
        {
        image(kmg,140,20, 20,20)
        image(kmg,rx,r1, 34,34)
        }if(frameCount > 3300)
        {
        image(lmg,140,20, 20,20)
        image(lmg,rx,r1, 34,34)
        }if(frameCount > 3600)
        {
        image(mmg,120,20, 20,20)
        image(mmg,rx,r1, 34,34)
        }if(frameCount > 3900)
        {
        image(nmg,140,20, 20,20)
        image(nmg,rx,r1, 34,34)
        }if(frameCount > 4200)
        {
        image(omg,140,20, 20,20)
        image(omg,rx,r1, 34,34)
        }if(frameCount > 4500)
        {
                  image(pmg,140,20, 20,20)

        image(pmg,rx,r1, 34,34)
        }if(frameCount > 4800)
        {
        
        image(qmg,140,20, 20,20)
        image(qmg,rx,r1, 34,34)
        }if(frameCount > 5100)
        {
                  image(rmg,140,20, 20,20)
        image(rmg,rx,r1, 34,34)
        }if(frameCount > 5400)
        {
                  image(smg,140,20, 20,20)

        image(smg,rx,r1, 34,34)
        }if(frameCount > 5700)
        {
                  image(tmg,140,20, 20,20)

        image(tmg,rx,r1, 34,34)
        }
//   Here you can Put the baskets
        image(bk,x,y, w,h+20)
  
if (frameCount  < 2000) 
{
      textSize(30);
      text('Level1',30,40)  
}
  
  // I want when Play thar Rectangle falls
if(play == false)
{

      fill(50,100,80)
      // r1 = random(0,300)
      rx= random(0,300)
      // rect(rx,r1, 20,20)
}
if(rx )
{
  play =true
   r1++
} 
  if(frameCount == 6000){
    noLoop()
  }
  
if (r1 > y && r1 < y + h && rx > x && rx < x + w) 
{
      textSize(30);
      text('Level2',30,40)
      fill(50,100,80)
      rx= random(0,300)
      // rect(rx,r1, 20,20)
      // image(bmg,rx,r1, 34,34)

      // Rectangles touch, reset position
      mySound.play();
      play = true;
      r1= 0;
      textSize(30);
      text('Level2',30,40)
}
if(r1==390)
{
      textSize(100);
      text('Game Over', 0, 100);
      play=true;
}
if(r1>390)
{
      sized = 120
      textSize(30);
      stroke(1)
      text('GameOver', sized++, sized++);
      if('GameOver')
      text('GameOver', sized++, sized++);
      textSize(18);
      text('Score',300,70);
 }
}
 
function keyPressed(){
  
  if(keyCode == RIGHT_ARROW){
    x = x +s  
  }if(keyCode == LEFT_ARROW){
    x = x -s
   }
 }
