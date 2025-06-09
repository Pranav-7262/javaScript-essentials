let buttonToggle = document.querySelector("#BTN");
let body = document.querySelector("body");
let mode = "light";
buttonToggle.addEventListener("click" ,() => {
   if(mode == "light"){
      document.body.style.backgroundColor = "black";
    buttonToggle.innerText = "In Dark";
    mode = "Dark";
    buttonToggle.addEventListener("click" ,()=> {
        alert("Well! you are entering in a Light mode");
         document.body.style.backgroundColor = "black";
    })
   }
   else {
    mode = "light";
    body.style.backgroundColor = "#fff";
    buttonToggle.innerText = "In light";
    buttonToggle.addEventListener("click" ,()=> {
      alert("Well! you are entering in a Dark mode");
      document.body.style.backgroundColor = "white";
  })
   }
   console.log(mode);
});