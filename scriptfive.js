// function myFunction (){//syntax of function
//     console.log("Hello!");
//     console.log("Pranav varpe");
//     console.log("Pranav varpe");
// }
// myFunction();
// myFunction();//function call in JS 

// function myFunction (msg1,msg2){//parameters
        
//         console.log(msg1,msg2);
      
//     }
//     myFunction("I love JS","I love U");//arguement

function sum(a,b){  //Sum Function
    // console.log(a+b);
    c = a+b;
    console.log("Pranav");
    return c; 
    console.log("Pranav1");
}
console.log(sum(8,6));

// //Arrow fn
// const arrowsum = (a,b) => {
//     console.log(a+b);
// };
// console.log(arrowsum);//returns the code or fn
// console.log(arrowsum(12,34));

//mul fn
// function mul(x,y){
//     m= x*y;
//     return m;
// }
// console.log(mul(2,5));
//Arrow fn for mul


// console.log(arrowmul);
// console.log(arrowmul(23,4));

// const arrowmul = (x,y) => {
//     return x*y;
// }
// console.log(arrowmul(2,3));

//for each loop
// let arr = ["pranav","varpe"];
// // arr.forEach(function printval(val) {
// //     console.log(val);
//     arr.forEach((val,idx,arr) => {//Arrow fn
//         console.log(val,idx,arr);  
// });

// fiind square
let nums = [2,4,6];
let findsqr = (num)=> {
    console.log(num*num);
};
nums.forEach(findsqr);

// //map
// let arr = [1,2,3];
// arr.map((val) => {
//     console.log(val);
// });
//filter
// let arr = [2,3,4,5,3,5,6,78,89,78];
// let odd = arr.filter((val) => {
//     return val%2 !== 0;
//     //return val > 2 ;
// });
// console.log(odd);

//reduce method

// let arr = [12,23,45,45,67,89,99];
// const output = arr.reduce((prev,curr) => {
//     //return prev+curr; //return a sum of all the nums
//     return prev > curr ? prev:curr;
// });
// console.log(output);

//Question on methods

let marks = [76,89,90,99,96,93,66];

let toppers = marks.filter((val) => {
    return val >= 90;
});
console.log(toppers);