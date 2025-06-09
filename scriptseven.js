// // let div =document.querySelector("div");
// // console.log(div);
// // let id = div.getAttribute("id");
// // console.log(id);
// // let name = div.getAttribute("name");
// // console.log(name);
// // let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));
// // console.log(para.setAttribute("class","myClass"));
// // let div =document.querySelector("div");
// // div.style.backgroundColor="pink";
// // div.style.backgroundColor="red";
// // div.style.fontSize="20px";
// // div.style.visibility="hidden";
// // div.innerText="Pranav";
// // let newBtn = document.createElement("button");
// // newBtn.innerText="Pranav";
// // console.dir(newBtn);
// // let div =document.querySelector("div");
// // // div.append(newBtn);
// // //div.prepend(newBtn);
// //  div.after(newBtn);
// // // div.before(newBtn);
// let newHeading = document.createElement("h1");
// newHeading.innnerHTML="<i>I am ,Pranav</i>";
// document.querySelector("body").prepend(newHeading);
// let para = document.querySelector("p");
// para.remove();
let newBtn = document.createElement("button");

newBtn.innerText="click me";
newBtn.style.color="red";
newBtn.style.backgroundColor="blue";
document.querySelector("body").prepend(newBtn);

//Q2
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","myclass"));