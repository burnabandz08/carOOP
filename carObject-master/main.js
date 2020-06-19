
class car {
    constructor(year, make , model, running){
        this.year = year;
        this.make = make;
        this.model = model;
        this.running = false;
        this.speed = 0;
    }
    // methods
    turnOn() {
        this.running = true;
    }
    turnOff() {
        this.running = false;
        this.speed = 0;
    }
    changeSpeed() {
        this.speed += prompt("What speed are you going?");
    }

}

let year = prompt("What year is the car?");
let make = prompt("what make is the car?");
let model = prompt("what model is the car?");
let newCar = new car(year, make, model);


document.getElementById("carOn").addEventListener("click", newCar.turnOn);
document.getElementById("carOff").addEventListener("click", newCar.turnOff);
document.getElementById("newSpeed").addEventListener("click", newCar.changeSpeed);

let isOrIsNot;

if(newCar.running = true){
    isOrIsNot = "is";
}else{
    isOrIsNot = "is not";
}

if(newCar.speed = 0){
    newCar.running = false;
}else{
    newCar.running = true;
}

document.getElementById("year").innerHTML= "Year:" + newCar.year;
document.getElementById("make").innerHTML= "make:" + newCar.make;
document.getElementById("model").innerHTML= "modle:" + newCar.model;
document.getElementById("running").innerHTML= "the car " + isOrIsNot + " running";
document.getElementById("speed").innerHTML= "the car is going: " + newCar.speed + "km/h";

 
console.log(newCar);