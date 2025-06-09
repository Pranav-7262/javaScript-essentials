let btn1 = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
// btn1.onclick = (e) => {
//     console.log("Button was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
btn2.ondblclick = (e) => {
  console.log("the btn is clicked 2 times");
  let alt = prompt("button clicked ");
  console.log(alt);
};
    
//};
btn1.addEventListener("click", (e) => {
     console.log("btn1 is clicked!");
     console.log(e);
     console.log(e.type);
});
// btn1.addEventListener("click", (e) => {
//     console.log(e);
//       console.log(e.type);
//     console.log("btn1  is clicked!");
// });
// btn2.addEventListener("click", () => {
//   console.log("btn2 is clicked!");

//});
//     let a=27;
//     a++;
//     console.log(a);
// };
// let box = document.querySelector("#box");
// box.onmouseover = () => {
//     console.log("Its a box");
// };
