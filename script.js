//try flexbox
/*
adding a button and having the submit grab the value for the backend function

*/
document.addEventListener("mouseover",(e)=>{
  if(!e.target.classList.contains("box")){
      return;
  }
  e.target.style.background = "#3d3d3d";
})

//create a grid
//generates a grid with the original div container already on index.html you need to start messing with the code you work with to gain a better understanding of what it's doing
function grid() {
  var container = document.getElementById("container");
      for (i = 0; i <= 16; i++){
          var row = document.createElement("div");
              row.className = "row";
              row.id = "row" + i;
    
     for(k = 0; k <= 16; k ++){
          var box = document.createElement("div");
           box.className = "box";
           row.appendChild(box);
          }
           container.appendChild(row);
          }
           return container;
        }
          grid(document.body);
            



function resizeGrid(){
  clearGrid();
  //missing a clear grid function!
  var resize = document.getElementById('redrawGrid').value;
  var container = document.getElementById("container");
      for (i = 0; i <= resize; i++){
          var row = document.createElement("div");
              row.className = "row";
              row.id = "row" + i;
    
     for(k = 0; k <= resize; k ++){
          var box = document.createElement("div");
           box.className = "box";
           row.appendChild(box);
          }
           container.appendChild(row);
          }
           return container;
          }
  
  //right now the resizing is adding to the bottom of the old grid.
  function clearGrid(){
    
  }

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