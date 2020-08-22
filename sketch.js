//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogimage, happyDogimage;

function preload()
{
	//load images here
  dogimage = loadImage("images/dogImg.png");
  happyDogimage = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500,500);

  dog = createSprite(200,300,10,10);
  dog.addImage(dogimage);
  
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);

  if(keyDown(UP_ARROW)){
        writePosition(readStock);
        dog.addImage(happyDogimage);
    }

  drawSprites();
  //add styles here

}

function writeStock(x){

if(x<-0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
food:x
})
}

function readStock(data){
    foodS = data.val()
}




