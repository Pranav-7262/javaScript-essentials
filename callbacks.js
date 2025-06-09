// lets learn how to use callbacks in javascript

//below is the code for callbacks
// function sum(a, b) {
//    console.log(a + b);
// }

// function calculate(a, b, callback) {
//      callback(a, b);
// }
// calculate(5, 10, sum); // 15
// The calculate function takes two numbers and a callback function as arguments.
// It calls the callback function with the two numbers as arguments.
// In this case, the callback function is sum, which adds the two numbers together.
//
//example of using callbacks with setTimeout

// function fetchUserdata(callback) {
//    setTimeout(() => {
//       console.log("Fetching user data...");
//       const userData = {
//          name: "John Doe",
//          age: 30,
//       }
//       callback(userData);//this will be called after 2 seconds
//    }, 1000);
// }
// fetchUserdata((function(userData) {// this is the callback function
//    // This function will be called after the user data is fetched
//    console.log("User data fetched:", userData);
// }  ));
// In this example, fetchUserdata simulates fetching user data after a delay of 2 seconds.
// Once the data is fetched, it calls the provided callback function with the user data.     
// The callback function logs the user data to the console.
//Hard to manage when you have many nested async tasks (called callback hell).

//2.Promises

// function fetchUserdata() {
//    return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//          console.log("Fetching user data...");
//          const userData = {
//             name: "John Doe",
//             age: 30,
//          }
//          resolve(userData);//this will be called after 2 seconds
//       }, 2000);
//    })
// };
// fetchUserdata()
// .then((userData) => {
//    // This function will be called after the user data is fetched
//    console.log("User data fetched:", userData);
// })
// .catch((error) => {
//    console.error("Error fetching user data:", error);
// });   //this will be called if there is an error


//3.Async/Await

// function fetchUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Pranav", age: 21 });
//     }, 2000);
//   });
// }

// async function getUserData() { // this function is async
//    // This function will be called after the user data is fetched
//    try {
//       console.log("Fetching user data.1..");
//       const userData = await fetchUserData();//this will wait for the promise to be resolved
//       // The await keyword is used to wait for the promise to resolve
//       console.log("User data fetched:", userData);
//       console.log("Fetching user data.2..");
//       const userdata2 = await fetchUserData();
//       console.log("User data fetched:", userdata2);
//       // The await keyword is used to wait for the promise to resolve
//       console.log("Fetching user data.3..");
//       const userdata3 = await fetchUserData();
//       console.log("User data fetched:", userdata3);
//       // The await keyword is used to wait for the promise to resolve
//       console.log("Fetching user data.4..");
//       const userdata4 = await fetchUserData();
//       console.log("User data fetched:", userdata4);
//       // The await keyword is used to wait for the promise to resolve
//    } catch (error) {// this will be called if there is an error
//       console.error("Error fetching user data:", error);
//    }
// }
// getUserData(); // Call the async function to fetch user data

//2nd example


// Simulating APIs
function getUserID() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(101);//resolve is used to resolve the promise
    }, 1000);
  });
}

function getUserDetails(id) {// this function takes id as an argument
   // Simulating fetching user details
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "Pranav" });//resolve is used to resolve the promise
    }, 500);
  });
}

function getUserPosts(user) {// this function takes user as an argument
   // Simulating fetching posts for the user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);//this will be called after 2 seconds,using resolve to resolve the promise
    }, 1000);
  });
}

// Async/Await version
async function showUserInfo() {//
   // This function is async
  try {
    const id = await getUserID();// this will wait for the promise to be resolved
    console.log("User ID:", id);

    const user = await getUserDetails(id);
    console.log("User Details:", user);

    const posts = await getUserPosts(user);
    console.log("User Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

showUserInfo();
// In this example, we have three asynchronous functions: getUserID, getUserDetails, and getUserPosts.
// Each function returns a promise that resolves after a delay.
// The showUserInfo function uses async/await to call these functions in a sequential manner.
// It waits for each promise to resolve before moving on to the next one.
// This makes the code easier to read and understand compared to using callbacks or chaining promises.   
// The try/catch block is used to handle any errors that may occur during the asynchronous operations.
// The async/await syntax allows us to write asynchronous code in a more synchronous style, making it easier to read and maintain.