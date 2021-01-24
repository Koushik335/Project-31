const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(850,800);
  engine = Engine.create();
	world = engine.world;
  Ground = new Ground(420,800,870,10);;
  divisions = []
  var divisionHeight = 200;
  for(var k = 0 ; k <= width ; k = k+80){
      divisions.push(new Division(k , height-divisionHeight/2 , 10 , divisionHeight))
  }
  plinkos = []
  for(var j = 70 ; j<width-50 ; j = j + 70){
    plinkos.push(new Plinko(j , 200 , 20))
  }
  for(var j = 20 ; j<width-100 ; j = j + 70){
    plinkos.push(new Plinko(j , 300 , 20))
  }
  for(var j = 70 ; j<width-50 ; j = j + 70){
    plinkos.push(new Plinko(j , 400 , 20))
  }
  for(var j = 20 ; j<width-100 ; j = j + 70){
    plinkos.push(new Plinko(j , 500 , 20))
  }
  particles = []

  
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  Ground.display();
  for(var i = 0 ; i<divisions.length ; i++){
    divisions[i].display();
  }
 for(var i = 0 ; i<plinkos.length ; i++){
   plinkos[i].display();
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,15))
 }
 for(var i = 0 ; i<particles.length ; i++){
  particles[i].display();
}

}