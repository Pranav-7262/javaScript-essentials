// //aync
//console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("Hello");
// }
// setTimeout(hello,3000);
// setTimeout (() => {
//    console.log("Hello World");
// },3000);  //Asynchronious

// console.log("two");
// console.log("three");

//CallBacks
// function sum(a,b){
//     console.log(a+b);
// }
// function calculations(a,b,sum){
//     sum(a,b);
// }
// calculations(2,3,sum);//call another fn


// const hello = () => {
//     console.log("Hello dayy!!");
// }
// setTimeout(hello,5000);

// function getdata(dataid,getnextdata) {
//     setTimeout(() => {


//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },3000);
// }
// getdata(1,() => {  //nesting 
//     getdata(2,() => {
//         getdata(3);//callback hell
//     });
    
// });

//Promises ----> Pending,Resolved,Rejected

// let promise = new Promise((resolve,reject) => {
//     console.log("I am Promise");
//     resolve("PENDING");
//     //reject("Some error");
// });

// function getdata(dataid,getnextdata) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//      console.log("data",dataid);
//      resolve("success");
//             if(getnextdata){
//                 getnextdata();

//             }
//         },5000);
//     });
//     };
// const getPromise = () => {
// return new Promise((resolve,reject) => {
//     console.log("I am Promise");
//     //resolve("PENDING");
//     reject("Some error");
// });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled",res);
// });
// promise.catch((err) => {
// //    console.log("rejected",err);
// // });


// //promise chain
// function asyncfun1(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("data1");+
//         resolve("success");
//       },2000);
//     });
// };
// function asyncfun2(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("data2");
//         resolve("success");
//       },4000);
//     });
// };
// console.log("fetching data1........");
// let p1 = asyncfun1();
// p1.then((res) => {
//     console.log("fetching data2......");//success
//     let p2 = asyncfun2();
//     p2.then(() => {

//     });
// });

//async-wait


async function hello(){

    console.log("Hello");
}
function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);

        },3000);
    });
};
async function getweatherdata(){
    await api();//call using await
    // await api();
}

// function getdata(dataid) {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//          console.log("data",dataid);
//          resolve("success");
//             },5000);
//         });
//         };
//         //async-wait used
//         async function getAllData(){
//             console.log("getting data1....");
//             await getdata(1);
//             console.log("getting data2....");
//             await getdata(2);
//             console.log("getting data3....");
//             await getdata(3);
//         }
//         async function() {
//             console.log("getting data1....");
//             await getdata(1);
//             console.log("getting data2....");
//             await getdata(2);
//             console.log("getting data3....");
//             await getdata(3);
//         })();//IIFE USED --> CUT FN NAME.....

