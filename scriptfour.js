//  let marks = [78,89,90,85];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[3]);
// console.log(marks.length);
// let heroes =["prabhas","vijay","suriya","rajnikant","AlluArjun"];
// console.log(heroes);

//looping
//let heroes =["prabhas","vijay","suriya","rajnikant","AlluArjun"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);  //simple for loop
// }

//for of loop
// for(let el of heroes){
//     console.log(el);
// }

//Q.) avg find
//    let marks = [89,78,90,86,98];
//    let sum =0;
//    for(let val of marks){
//     sum = sum + val;
//    }
//    let avg = sum/marks.length;
//    console.log(`the average marks is = ${avg}`);

//Arrays Methods

//push
// let arr = [12,23,34,45,56,32];
// arr.push(90,324,45,6,77);
// console.log(arr);

//pop

// let ar = ["op","bab","pup","dj","ok"];
// let deleted = ar.pop();
// console.log("deleted",deleted);

//toStrings

// let ar = ["op","bab","pup","dj","ok"];
// console.log(ar);
// console.log(ar.toString());
// console.log(ar);

//concat
// let bollywood = ["Salman","Shahrukh","Akshay","Tiger","Ajay"];
// let south = ["Rajnikant","Vijay","Allu","NTR","Yash"];
// let res = bollywood.concat(south);
// console.log(res);

//unshift   //(Adding Firsts)
// let south = ["Rajnikant","Vijay","Allu","NTR","Yash"];
// console.log(south.unshift("Prabhas"));
// console.log(south);

//shift   (deleted 1 st)
// let south = ["Rajnikant","Vijay","Allu","NTR","Yash"];
// let deleted = south.shift();
// console.log("deleted",deleted);

//slice
// let south = ["Rajnikant","Vijay","Allu","NTR","Yash"];
// console.log(south);
// console.log(south.slice(0,4));
// console.log(south.slice(1));

//splice
let south = ["Rajnikant","Vijay","Allu","NTR","Yash"];
south.splice(2,0,"ram");  //adding randomly
console.log(south);

south.splice(3,1);//deleting element
console.log(south);

south.splice(3,1,100);//replacing element
console.log(south);