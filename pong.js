const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const backImage = new Image();
backImage.src= "http://ak8.picdn.net/shutterstock/videos/14597038/thumb/1.jpg";

const heronkar = new Image();
heronkar.src = "http://cdn.shopify.com/s/files/1/0876/3446/products/Eastfield_Allround_Table_Tennis_Bat_Main_Image_NEW_grande.png?v=1478798657";

const hero2nkar = new Image();
hero2nkar.src = "http://cdn.shopify.com/s/files/1/0876/3446/products/Eastfield_Allround_Table_Tennis_Bat_Main_Image_NEW_grande.png?v=1478798657"; 

const ballImage = new Image();
ballImage.src = "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c3aa.png"
const RectsIntersection = function(rect1X, rect1Y, rect1W, rect1H, rect2X, rect2Y, rect2W, rect2H) {
    return rect1X < rect2X + rect2W && rect1X + rect1W > rect2X && rect1Y < rect2Y + rect2H && rect1H + rect1Y > rect2Y;
  };
const point =	{
			x: 600,
			y: 350,
			width: 30,
			height:	30,
			xDelta: 5,
			yDelta: 5,
			color: "white"
		};
  
const hero = {
  		x: 50,
  		y:10,
  		width:50,
  		height:100,
  		score: 0
  };
const hero2 = {
  	x: 1150,
  	y: 10,
  	width:50,
  	height:100,
  	score: 0
  };
const draw = function(){  
context.clearRect(0,0,canvas.width,canvas.height);
		  context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
		  context.fillStyle = point.color;
		context.drawImage(ballImage,point.x,point.y, point.width,point.height);
		context.drawImage(heronkar,hero.x,hero.y,hero.width,hero.height);
		context.drawImage(hero2nkar,hero2.x,hero2.y,hero2.width,hero2.height);
		context.font = "40px Arial";
    	context.fillText(hero.score, 300,50);
    	 context.fillText(hero2.score, 900,50);
  };
 
  
  const updateData = function(){
		  if(point.x >= canvas.width-point.width){
			point.x=hero2.x-point.width;
			point.y=hero2.y;
			hero.score+=1;
			point.xDelta = -point.xDelta;
		}else if(point.x<=0){
			point.x=hero.x+hero.width;
			point.y=hero.y;
			hero2.score+=1;
			point.xDelta = -point.xDelta;
		}
		if(point.y >= canvas.height-point.height){
			point.yDelta = -point.yDelta;
		}else if(point.y<=0){
			point.yDelta = -point.yDelta;
		}
		point.x =	 point.x + point.xDelta;
		point.y = point.y + point.yDelta;

    if(RectsIntersection(hero.x,hero.y,hero.width,hero.height,point.x,point.y,point.width,point.height)){
        point.xDelta = - point.xDelta;
      }else if(RectsIntersection(hero2.x,hero2.y,hero2.width,hero2.height,point.x,point.y,point.width,point.height)){
        point.xDelta = - point.xDelta;
      } 
		
  };
  

const loop = function(){
    
    draw();
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();
  const upKey = 38;
  const downKey = 40;
  const w = 87;
  const s = 83;
   document.addEventListener('keydown', function(event) {
    event.preventDefault();
  
    if(event.keyCode === upKey) {
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y - 15;
      }		
      else if(hero.y<3){hero.y=3;}
    }
    else if(event.keyCode === downKey){
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y +  15;      }
      else if(hero.y>=canvas.height-hero.height){hero.y=canvas.height-hero.height;}
    }
  }, false);

     document.addEventListener('keydown', function(event) {
   if(event.keyCode === w){
   	if(hero2.y>= 0 ) {
        hero2.y= hero2.y - 15;
      	}
      	else if(hero2.y<3){hero2.y=3;}
      }	
   else if(event.keyCode === s){
      if(hero2.y>= 0 && hero2.y<= canvas.height-hero2.height) {
        hero2.y= hero2.y +  15;      }
    }
   
  }, false);