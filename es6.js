// 1 . variables
// var
// function myfun() {
//   var myname = "pranav";
//   var mypass = "secret";
// }
// console.log(myname); // not print  , because var is used only for the functions in JS

//  2nd example of var
var a = 12;
var a = 34;
console.log(a); // 34 will be printed

// let and const are only used to blocks

//  var age = 18;
//  if (age >=18) {
//     let a = 2;
//  }
//  console.log(a); // exmaple of let
//let dont allows  you to run or execute on a browser but var can

// const keyword
// If we declare a variable using a const keyword  ,its value cannot be re - initialised

//  exmaple :
//  const product = "laptop";
//  product = 'TV'; // Getting error because of reassign the value of product ....
// Using let  , we can directly assign a value

//var  --> browser friendly

// 2. Arrow functions
// method1
// const addition = (a,b) => {
//     console.log(a+b);
// }
// addition(5,7);

//2
// const mul = (a,b) =>console.log(a*b);  // one line
// mul(4,5); // 20
//Arrow functions are used in the addEventListeners..

// 3. Literals

//  const name = "pranav";
//  const message = `hello ${name}
//  how are you !!`;
//  console.log(message); // $ sign consist not only string s but also other js calc

// const keyname = 'name';
// const product = { // object
//     buy() {
//         console.log("bought");
//     }
// };
// product.buy(); // bought

// Destructuring :

// object

// const user  = {
//     name:'pranav',
//     age : '20',
// };
// console.log(user); //  getting a object

// console.log(user.age); // get age
// console.log(user.name);// get name

// const {name,age} = user; // new method

// console.log(name);
// console.log(age);

// going to Arrays ===

// const arr = ["pranav",20,"Engineer"];
// console.log(arr[0]); // getting 0th element

// const [name,age,profession] = arr; // Destucturing
// console.log(name); // pranav
// console.log(profession); // Engineer

//default parameter :

// e.g :
// const register  = (name,password,image='photo.png') => { //By default we are passing a default image
//   console.log(name,password,image);
// }
// register('pranav','1234');

//  spread operator ---->

// const arr = ['mangesh','sidd','harshad'];
// const newarr = ["pranav",...arr]; // spread operator
// console.log("new array :"+newarr);

//we are use spread operator in our objects also....

// const play = {
//     cricket: 'nice',
//     football: 'okay',
// };

// const newplay = {...play};
// console.log(newplay);

//Rest (similar to spread but not )

//used in functions ...

// const add = (...items) => { // rest opearators
//   console.log(items);
// }
// add(2,3,4,5,6,7,8); // return all nums

//for of loop :

// can applied on a array , string...
//  const arr = [1,2,4,5,6,7,8];

//  for (const num of arr) {
//     console.log(num);
//  }

//for Each loop : // apply on collections

// arr.forEach(element => {
//     element = element + 1;
//     console.log(element);
// });

//for in loop :

// Applied on Objects ....
// const person = {
//     name: 'pranav',
//     brand: 'puma',
// };
// for (const key in person) {
//     console.log(key);
// }

// // CallBacks

// function login(cb) {
//   setTimeout(() => {
//     console.log("logginggg.....");
//     cb();
//   }, 2000);
// }
// login(() => {
//     console.log("redirecting ... ");
// });

// promises

// function login() {
//     return new Promise((resolve,reject) => {
//        setTimeout(() => {
//         console.log("logingg....")
//         //  resolve();
//         reject();
//     }, 0);
//     });

// };
// login().then(() => {
//     console.log("redirecting ... ");
// }).catch (() => {
//     console.log("error");
// });

//find method .. (Array method)

const arr = [{ name: "pranav" }, { name: "pratik" }];

const user = arr.find((user) => {
  return user.name === "pratik";
});
console.log(user);

//findIndex method >

// const arr = [{name:'pranav'} , {name:'pratik'}];

// const user  = arr.findIndex((user) => {
//      return user.name === 'pratik';
// });
// console.log("index is : "+user); // returns 1

//set

// const myset = new Set(); // removes duplicates easy
// myset.add(2);
// myset.add(3);
// myset.add(4);
// myset.add(2);
// myset.add(1);
// console.log(myset.size); // 4

//map

// const mymap = new Map(); // stores key value pairs
// mymap.set('pranav',1);
// mymap.set('pratik',2);
// mymap.set('yash',3);
// console.log(mymap);
// console.log(mymap.get('pratik')); // returns 2  , bcz pratik having value 2

// for (const element of mymap) { // iterate using for of loop
//     console.log(element);
// }

//classes >

//beginner
// function Person(name) {
//     this.name = name;
// }
// const pranav = new Person('pranav');
// const manthan = new Person("manthan");
// pranav.name = 'pranavop'; // replacing a value

// console.log(pranav);//pranavop
// console.log(manthan);//manthan

// class Person {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Hello good day!!');
//     }
// };

// // const pranav = new Person('pranav'); // creating object
// // console.log(pranav); // getting value

// // console.log(pranav.greet()); // calling method

// //inheritance >

// class Grand extends Person { // Inheritancs Parent class i.e Person class
//     atttude = 'cool';
//     constructor(name) {
//         super(name); // calling parent class constructor
//     }
//     play() {
//         console.log('playing');
//     }
//     happy() {
//         console.log('stay happy !!');
//     }
// };
// const pratik = new Grand('pratik'); // creating object of child class
// console.log(pratik); // getting value
// console.log(pratik.name); // getting name
// console.log(pratik.play()); // calling method of child class
// console.log(pratik.atttude);
// console.log(pratik.happ y());
// console.log(pratik.greet()); // accessable

// // static method
// class Person {
//     static greet() { // static method
//         console.log('hello');
//     }
// }
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {

//         console.log('Hello good day!!');
//     }

// };
// const pranav = new Person('pranav'); // creating object
// console.log(pranav); // getting value
// console.log(pranav.greet()); // calling method
// console.log(Person.greet()); // calling static method

// // async await
// function login() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("logging in ...");
//             resolve();
//         }, 2000);
//     }
//     );
// }

// async function getData() {
//     await login();
//     console.log("getting data ...");
// }
// getData(); // getting data after 2 sec

// ES6 modules >

// import { name, age, greet } from './es6module.js'; // importing
// console.log(name); // getting name
// // console.log(age); // getting age
// // greet(); // calling function
// import myfunction from './es6module.js'; // exporting function
// myfunction(); // calling function
// // arrow function
// const mynewfun = () => {
//    myfunction();
//    console.log("hello");
// };
// mynewfun(); // calling function

// import {add , subtract} from  './es6module.js'; // importing
// console.log(add(2,3)); // 5
// console.log(subtract(5,3)); // 2
