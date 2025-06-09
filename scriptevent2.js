let changemode = document.querySelector("#btn");
let light;
let currmode = light;
changemode.addEventListener("click" ,() => {
//    console.log("You want to change the mode");
if(currmode=="light"){
    currmode="dark";
    document.querySelector("body").style.backgroundColor="black";
}
else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(currmode);
});
