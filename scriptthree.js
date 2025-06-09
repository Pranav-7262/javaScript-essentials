// console.log("pranav varpe");
// console.log("pranav varpe");
// console.log("pranav varpe");
// console.log("pranav varpe");
// console.log("pranav varpe");

// for(let cnt=1; cnt<=5 ; cnt++){
//     console.log("pranav varpe");
// }
// console.log("End of loop");

//Q . Print 1 to 100 even numbers

// for(let i=0; i<=100 ; i++){
//     if(i%2==0){
//         console.log("num ->",i);
//     }
// }

// //sum of 1--100
// let sum=0;
// for(let i=0;i<=100;i++){
//     sum =sum +i;
// }
// console.log("sum is ->",sum);

//while loop

// let i=1;
// while(i<=5){
//     console.log("num->",i);
//     i++;
// }

//do while loop

// let i=1;
// do{
//     console.log("Pranav Varpe");
//     i++;
// }
// while(i<=10);
   
// for-of loop      
// let str = "Pranav";
// let size=0;
// for(let i of str){
//     console.log("i ->",i);
//     size++;
// }
// console.log("size is", size);


//for-in loop  /used in objects
// let student = {
//     name:"ram",
//     age:20,
//     cgpa:9.00,
//     isPass:true

// };
// for(let key in student){
//    // console.log("i ->",i);//keys returns
//     console.log("keys->", key, "values:", student[key]);
// }

//Strings
// let str = "Pranav";
// console.log(str[0]);
// let strings = str.length;
// console.log(strings);


// //Template Literals
// let speacilstring = `This is a Special`;
// console.log(speacilstring);

// let obj = {
//     item:"pen",
//     price: 10,
// };
// let res = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(res);

//Srings Methods

// let str = "   pran  av  ";
// let a = str.toUpperCase();
// console.log(a);
// console.log(str.toLowerCase());
// console.log(str.trim());

// let strs = "pranav";
// console.log(strs.slice(1,2));
// console.log(strs.slice(1));

// let str1 = "Pranav ";
// let str2 = "Varpe";
// let res = str1 + str2;
// let ress = str1.concat(str2);
// console.log(res);
// console.log(ress);
// console.log(str1.replace("P","L"));
// console.log(str2.replace("r","o"));
// console.log(str1.replaceAll("a","i"));
// console.log(str1.charAt(0));
// console.log(str1.charAt(0) + str2.charAt(4));

//Practice 
let fullname = prompt("Enter your full name without any spaces");
let username = "@" + fullname;
console.log(username);
let username2 = username + fullname.length;
console.log(username2);