// //callBack Hell 
// function getData(DataId , getNextData){
//     setTimeout( () => {
//         console.log("data",DataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// console.log("getting data 1");
// getData(1 ,() => {
//     console.log("getting data 2");
//     getData(2 ,() => {
//         console.log("getting data 3");
//         getData(3 , () => {
//             console.log("getting data 4");
//             getData(4);
//         })
//     })
// })
// setTimeout(() => {
//     console.log("this is goong to execute first");
//     console.log("pranav");
// }, 3000);//Asynchous Programming   ... 

//promises
// let promise = new Promise((resolve,reject) => {
//   console.log("I am promise");
// //   resolve("pranav");
// reject("gkdfh");
//   console.log(promise);
// });

// promises II
// function getData(DataId , getNextData){
//     return new Promise((resolve,reject) => {
//     setTimeout( () => {
//         // console.log("data",DataId);
//         // resolve("Success");
//         reject("ee");
//         if(getNextData){
//             getNextData();
//         }
//     },4000);
// });
// }
// let promise = getData(123);
// console.log(promise);

// //.then() in promise
// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("Hi I am Pranav");
//         resolve("Yeah!! Success");
//         // reject("ghjf typesd error okay!!");
//     });
// };
// let promise = getPromise();
// promise.then((res) => { // then is executing if  & only if when the resolve  and reject is performed
//     console.log("Prmise fulfilled",res);
// }

// // )
// // promise.catch((err) => { // catch is used as only if and only if when error occured!!
// //     console.log("Rejected Haha!!",err);
// // })

// // //Promise chain
// function asyncFunction() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("OP");
//         resolve("Successs");
//     },2000);
// });
// }
// function asyncFunction2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("OP2");
//         resolve("Successs");
//     },4000);
// });
// }
// console.log("Fething data 1..");
// let p1 = asyncFunction();
// p1.then((res) => {
//     console.log("Fetchinh data 2...");
//     let p2 = asyncFunction2();
//     p2.then((res) => {});
// });

// Async Await in JS

// function api() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("weather data");
//     resolve("success");
//     },3000);
//   });
// }
// async function getWeatherData() {
//     await api();
//     await api();
//     await api();
// }
// console.log(getWeatherData());

//Eg- 2
function getData(DataId , getNextData){
        return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("data okay",DataId);
            resolve("Successfully!!");
            if(getNextData){
                getNextData();
            }
        },3000);
    });
    }
    async function getAllData() {
        console.log("getting data 1....");
        await getData(1);
        console.log("getting data 2.....");
        await getData(2);
        console.log("getting data 3....");
        await getData(3);
        console.log("getting data 4.....");
        await getData(4);
    console.log("All the records are geted  successfully!");
    };
    console.log(getAllData());
