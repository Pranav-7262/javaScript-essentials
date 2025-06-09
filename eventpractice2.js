let btn1 = document.querySelector("#btn1"); // JS event handling 
//  btn1.onclick = (e) => {
//     console.log(e); // click type
//     console.log("button was clicked!!");
//     alert("okayy");
//     let a = 23;
//     a++;
//     console.log("sum : "+a);
//  };
const fun = () => {
    console.log("button was clicked!!");
    alert("okayy");
    let a = 23;
    a++;
    console.log("sum : "+a);
}
btn1.addEventListener("click", fun); // adding event listeners on diff events...
// btn1.addEventListener("click", () => {   // adding event listeners on diff events...
//     alert("btn1 was clicked");
// //     console.log("okay clicked!!");
// // });
//  let box = document.querySelector(".content");
//  box.onmouseover = (e) => {
//     console.log(e.type);
//     box.classList.add("visible");
//     console.log("you are inside a box");    
//     console.log(box.classList);
//     console.log("you are inside a box");
//     alert("you are in box!!");
//     box.innerText = "pranav dada"; 
//  };

// const sum = () => {
//     let a = 23;
//     a++;
//     console.log("sum : "+a);
// }

//toggle button

// let paragraph = document.querySelector("p");
// let togglebtn = document.querySelector("#mode");
// togglebtn.addEventListener("click", () => {
//     let body = document.querySelector("body");
//     body.classList.toggle("dark");
//     body.classList.remove("white");
//     console.log(body.classList);
//     if (body.classList.contains("dark")) {
//         body.style.backgroundColor = "black";
//          paragraph.innerText = "Welcome to Dark mode";
//         paragraph.style.color = "#fff";
//         togglebtn.innerText = "Click to Light Mode";
      
//     } else {
//         body.style.backgroundColor = "white";
//         paragraph.style.color = "black";
//         body.style.color = "black";
//         paragraph.innerText = "Welcome to Light mode";

//          togglebtn.innerText = "Click to Dark Mode";
//     }
// });