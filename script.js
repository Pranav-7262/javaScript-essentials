//console.log("pranav varpe");
// //(comments in js )

//operators arithmatic
// let a=8;
// let b =4;
//  c=a+b;
// console.log("a+b=",c);
// console.log("a*b=",a*b);
// console.log("a-b=",a-b);
// console.log("a/b=",a/b);
// console.log("a->",a);
// console.log("a%b=",a%b);//modulus
// console.log("a**b=",a**b);//exponential

// //unary operator -> increment and decrement
// let a =5;
// let b =2;
// console.log("a=",a, "& b=",b);
// //a++;
// --a;
//  //++a;
// //console.log("++a:",++a);
// // console.log(a);
// console.log("--a:",--a);
// console.log(a);

// //Assignment operator
// let a= 12;
// // a+=1;
// // a-=2;
// a*=2;
// console.log("a :",a);

//comparison operator
// let a=12;
// let b=12;
// console.log("a==b",a==b);
// console.log("a==b",a===b);
// console.log("a>=b",a>=b);
// console.log("a<=b",a<=b);
// console.log("a!==b",a!==b);
// console.log("a!=b",a!=b);

//Logical operator
// let a=12;
// let b=12;
// let c1 = a==b;
// let c2 =a>=b;
// console.log("c1 && c2 :",c1 && c2);
// console.log("c1 || c2 :",c1 || c2);//return true if any one condition is true..
// console.log("!(a>b ):",!(a>b));//true 

//Conditional
// let age =20;
// if(age>=18){
//     console.log("you can vote");
// }
//  else if(age==20){
//     console.log("You can Vote too..");
// }
// else{
//     console.log("You cant vote");
// }

// let num =345;
// if(num %2 ==0){
//     console.log("It is a Even number");
// }
// else{
//     console.log("It is a odd number");
// }

//Ternary operator

// let age =35;
// //let result = age >= 18 ? "adult":"not adult";
// // console.log(result);  //  :  -->  else
// let result = age >= 18 ?console.log(" It is adult"):console.log("not adult");

//alert and prompt
// alert("pranav");
// let fullname = prompt("Pranav Varpe");
// console.log(fullname);

let Number = prompt("Enter a Number");
if(Number % 5 ==0){
    console.log(Number ,"is multiple of 5");
}
else {
    console.log(Number,"is not multiple of 5");
}