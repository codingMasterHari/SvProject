var gameState = 0;
var thiefCount, policeCount;
var allPlayers;
var distance = 0;
var database;

var canvas, bgImage;

var form, player, game;

var policeCar, thiefCar, thiefPlane, thiefMansion;
var policeCarImage, thiefCarImage, thiefPlaneImage, thiefMansionImage, trackImage;

var coin, obstacleCars, vans;

var items;

var thief, police;

function preload(){
  trackImage = loadImage("track.jpg");
  policeCarImage = loadImage("policePng.png");
  thiefCarImage = loadImage("carImgTheif.png");
  thiefMansionImage = loadImage("mansion.png");
  thiefPlaneImage = loadImage("aeroplane.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(thiefCount === 1 && policeCount === 1) {
    game.update(1);
  }
  if(gameState === 1) {
    clear();
    game.play();
  }
  if(gameState === 2) { 
    game.end();
  }
}