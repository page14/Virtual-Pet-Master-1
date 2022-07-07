//Create variables here
var dog, happyDog, database, foodS, foodStock, database


function preload()
{
	//load images here
 img1 = loadImage('../images/dogImg.png');
 img2 = loadImage('../images/dogImg1.png');

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
 
  dog = createSprite(250,250,20,20);
  dog.addImage(img1);
  dog.scale = 0.2;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  
}


function draw() {  

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
}

background(46, 139, 87);
  drawSprites();
  //add styles here
  textSize = 2;
  fill(100,0,255);
  stroke(12);
  text("Note: Press the up arrow key to feed the dog milk!",120,50);

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}


  database.ref('/').update({

Food:x    
  })
}