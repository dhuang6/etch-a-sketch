//try flexbox
/*
to add a new class name to a div
document.getElementById("div").classList.add('colorChange');

*/
//create a grid
function grid(el) {
  var container = document.createElement("div");
  container.id="main";
  container.className = "container";
  
  for (i = 0; i <= 16; i++){
    var row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;
    
    for(k = 0; k <= 16; k++){
      var box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }
    container.appendChild(row);
    
  }
  el.appendChild(container);
}
grid(document.body);




/*
//functional code, just going to stick to event delegation.
var colorIn = document.querySelectorAll(".row");
colorIn.forEach(div => div.addEventListener('mouseover', (e) => e.target.style.background = "#d3d3d3"));
function changeColor() {
  this.style.background = "#D3D3D3";
}

function changeColor() {
  this.style.background = "#D3D3D3";
}

//color in the divs

*/
//google event delegation
document.addEventListener("mouseover",(e)=>{
  if(!e.target.classList.contains("box")){
      return;
  }
  e.target.style.background = "#3d3d3d";
})

/*

document.addEventListener('mouseover',(e) =>{
  if(!e.target.classList.contains("box")){
    return;
  }
  e.target.style.background = "#d3d3d3";
})


var sketchColor = document.getElementsByClassName("box");
l = sketchColor.length;
for(i = 0; i < l; i++) {
  div.addEventListener('mouseover',(i)=> i.target.style.background = "#d3d3d3")
}
console.log(sketchColor);


const char = document.getElementById("disney-character");
chas.addEventListener('click', showCharactersName)
*/
//row.getElementsByClassName("row").onmouseover = changeColor;

//document.getElementById("main").onmouseover = changeColor;