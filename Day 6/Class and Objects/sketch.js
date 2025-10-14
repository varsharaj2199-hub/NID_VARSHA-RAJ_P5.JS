let myCar;
 let thatCar;
 let noCar = 20;
 let cars= [];
function setup() {
  createCanvas(400, 400);
  //creating 
  //myCar = new Car(100,200,100,20);
  //thatCar = new Car(300,200,60,2);

  for(let i=0; i< noCar; i += 1) {
    let tempCar  = new Car(random(0, width),random(0,height), 50,30)
    cars.push (tempCar);
    
  }
}

function draw() {
  background(220);
  for (let i=0; i <cars.length; i++) {
    cars[i].show();
    cars[i].move();
    cars[i].grow();
  }

  
 // myCar.show();
 // thatCar.show();
 // myCar.move();
 // thatCar.move();
}
