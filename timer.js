// alert("hello world");

// let a = setTimeout(() => { ..this will run after 4 sec , used for one time.
//     alert("hello world after 4 sec");   

// }
// , 5000);
// console.log(a);

// clearTimeout(a); // this will clear the timeout
// if(clearTimeout){
//     console.log("cleared");
//     alert("cleared");
// }
const sum = (a,b,c) => {
    console.log("Yes i am running "+(a+b+c));
}
setTimeout(sum, 5000, 1,2,3);  // could pass the arguments more easily

//now time for interval

setInterval(() => { // this will run every 2 sec  , it is not a function , 
    console.log("I am running every 2 sec");
    alert("I am running every 2 sec");
    // clearInterval();
}, 2000);
clearInterval(); // thia method is used to stop the interval and it will not run again
if(clearInterval){
    console.log("cleared");  
    alert("cleared");
}
