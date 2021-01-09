let scl ,rows,cols;
let population ;
let totalPopulation = 500;
let peoplePerHouese = 4;
let totalAreas;
let areas;
let time = 0;
let xoff = 0,yoff = 0;
let currentLocation = 0;
let green,red,blue,black;
let pause = true;
let speed = 10;
function setup() {
    createCanvas(innerWidth * 0.7,innerHeight*0.8,WEBGL)
    scl = int(innerWidth * 0.03)
    
    init()

    green = color(182,255,92)
    red = color(214,73,51)
    blue = color(96,215,230)
    black = color(43,48,58) 
    console.log(green);
    
    angleMode(DEGREES)
}

function draw() {
  background(black)
  orbitControl(1,1,0);
  rotateX(40)
  ambientLight(180)
  pointLight(255,255,255,200,-500,200)
  
  updatePeopleMovement();
  displayAreas(gridMap);
  displayPlane()

  
  
  setData()
  if(!pause){
    if(infected<=3 && time>3){
      infected=0
    }
  
    if(frameCount%speed==0 && infected>0){
      currentLocation=(currentLocation+1)%3;
      if(currentLocation<=1)
        moveToPublicPlaces();
      else
        moveToHome();
      
      spreadInfection();
      updateNumberOfPeopleAffected()
      time++;
    }
    
    
  }

}


function keyPressed(){
  if(keyCode === 32){
    pause=!pause
  }
  console.log(keyCode,pause);
  
}