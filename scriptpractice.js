 let h2 = document.querySelector("h2");//acessing element
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from Pranav Varpe";//just concating we can add
const name = document.querySelector(".op");
let divs = document.querySelectorAll(".b1");
console.log(divs);
console.dir(divs);
divs[0].innerText = "Pranav";
divs[0].style.fontSize = "2rem";
divs[1].innerText = "op";
divs[2].innerHTML = "<b>magic</b>";
let change = document.querySelector("h2");
change.innerText = "pranav";
let idx = name.getAttribute("class");
console.log(idx);
idx.innerText = "varpe";
console.log(idx);

// for(div of divs){
//    div.innerText = `new text ${idx}`;
//    idx++;
// }