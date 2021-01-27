// // console.log("Hello");
// // document.getElementById("intro").innerHTML="Welcome to my page.";
// // document.getElementById("myButton").onclick=function(){
// //     document.getElementById("intro").innerHTML="You clicked the button.";
// // }
// // $("#intro").text("jquery text");
// // $("#intro").css("color","purple");
// // // $("#myButton").click(function(){
// // //     $("#intro").text("You clicked me");
// // // })
// // $(".secondary").css("color","green");
// // function openAlert(){
// //     alert("Welcome to my page");
// // }
// // $("#Button2").click(openAlert);
// // $("#myButton").click(openAlert);

// function openWelcome(name){
//     alert("Welcome to my page, " + name);
// }
// // openWelcome("Madison");
// function doubleNumber(number){
//     alert(number * 2);
// }
// const myNumber = 99;
// // doubleNumber(myNumber);
// function tripleNumber(number){
//     return number * 3;
// }
// const myTripleNumber = tripleNumber(myNumber);
// // alert(myTripleNumber);
// // if (myNumber == 100){
// //     alert("My number is 100");
// // } else if (myNumber > 100){
// //     alert("My number is greater than 100");
// // } else {
// //     alert("My number is less than 100")
// // }
// // for(let i = 2; i < 20; i+=2){
// //     console.log("Hello");
// //     console.log("i is " + i);
// // }
// // let y = 2;
// // let x = 1;
// // while(y < 20 && x < 10){
// //     console.log("y is " + y);
// //     console.log("x is " + x);
// //     y += 2;
// //     x += 2;
// // }
// let cars = ["BMW","Mercedes","Audi"];
// // console.log(cars);
// cars.push("Honda");
// // cars.push("Toyota");
// // console.log(cars);
// // cars.pop();
// // console.log(cars);
// // console.log(cars.length);
// // console.log(cars[3]);
// // for(let i = 0; i < cars.length; i++){
// //     console.log("I love " + cars[i]);
// //     if(cars[i] == "Honda"){
// //         console.log("No, not really");
// //     }
// // }
// // //prompt 1
// // for(let a = 1; a < 12; a++){
// //     console.log(a - 1);
// // }
// // //prompt 2
// // for(let b = 2; b < 104; b+=2){
// //     console.log(b - 2);
// // }
// //prompt 3
// // for(let c = -5; c < 6; c++){
// //     console.log(c);
// // }
// //prompt 4
// // for(let d = 10; d >= 0; d--){
// //     console.log(d);
// // }
// // //prompt 5
// // for(let e = 11; e > 0; e--){
// //     console.log(e - 6);
// // }
// // //prompt 6
// // for (let f = 2; f < 54; f+=2){
// //     console.log(f - 2);
// // }
// // //prompt 7
// // for(let g = 0; g <= 100; g++){
// //     if(g % 5 == 0){
// //         console.log("I found a " + g + ". High five!")
// //     }
// // }
// // //prompt 8
// // const someNumber = 70;
// // if(someNumber < 30){
// //     console.log("that's a small number");
// // } else if (someNumber > 30 && someNumber < 60){
// //     console.log("the number is medium sized");
// // } else if (someNumber > 60){
// //     console.log("We got a big one!");
// // }
// //prompt 9
// // const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin'];
// // for(let h = 0; h < StarWars.length; h++){
// //     console.log(h + ". " + StarWars[h]);
// // }
// //prompt 10
// // const j = [];
// // for(let k = 0; k <= 100; k+=2){
// //     j.push(k);
// // }
// // console.log(j);

// // function doubleNumber(number){
// //     const doubledNumber = number * 2;
// //     return doubledNumber;
// // }
// // const newDoubledNumber = doubleNumber(10);
// // console.log(newDoubledNumber);
// // const blah = doubleNumber(99);
// // console.log("blah is " + blah);

// // function sayMyName(xyz){
// //     console.log("xyz is " + xyz);
// // }
// // const abc = sayMyName("Ethan");
// // console.log("abc is " + abc);

// // function sayMyName(xyz){
// //     return "Your name is " + xyz;
// // }
// // const abc = sayMyName("Ethan");
// // console.log("abc is " + abc);

// // function multiply(num1, num2){
// //     return num1 * num2;
// // }

// function multiply(num1, num2){
//     const multipliedValue = num1 * num2;
//     return multipliedValue;
// }
// const aaa = multiply(2, 6);
// console.log("aaa is " + aaa);
// //task 1
// function makeGreat(eee){
//     return eee + " is great";
// }
// const bbb = makeGreat("Maddie");
// console.log(bbb);
// //task 2
// function addNumbers(num1, num2, num3){
//     const addedNumbers = num1 + num2 + num3;
//     return addedNumbers;
// }
// const ccc = addNumbers(5, 4, 5);
// console.log(ccc);
// const x = "Hello";
// function sayHello(){
//     const y = "Bye";
//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// console.log(y);
const person = {
  name: "Ethan",
  age: 19,
  favouritefoods: ["Sushi", "Korean Barbeque"],
  car: { make: "Honda", model: "Civic" },
  greet: function () {
    console.log("Hello");
  },
};
// console.log(person.age);
// console.log(person.favouritefoods[0]);
// console.log(person.car.make);
const person2 = {
  name: "Liam",
  age: 15,
  favouritefoods: ["Sashimi", "Pizza"],
  car: { make: "Ferrari", model: "F40" },
};
const persons = [person, person2];
for (let i = 0; i < persons.length; i++) {
  // console.log(persons[i].name);
  // console.log(persons[i].age);
}
console.log(Object.keys(person));
console.log(Object.values(person));
person.greet();

const car = {
  make: "Honda",
  model: "Civic",
  colour: "Red",
  drive: function () {
    console.log("vroom vroom");
  },
  gears: ["Reverse", "Neutral"],
  engine: { horsepower: "6 horses", pistons: 12 },
  misc: { type: "combustion", rods: ["axel", "spin"] },
  gps: function (location) {
    console.log(`Beep boop, driving to ${location}`);
  },
};
console.log(car.make);
for (let a = 0; a < car.gears.length; a++) {
  console.log(car.gears[a]);
}
console.log(car.misc.type);
for (let b = 0; b < car.misc.rods.length; b++) {
  console.log(car.misc.rods[b]);
}
car.drive();
car.gps("Rosemead");
