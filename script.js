//try flexbox
/*
adding a button and having the submit grab the value for the backend function
the color isn't being added to the box it's being added to element.style

the functionality of the grid needs to be put into the same windows.onload function.

*/
//trying to make a function for creating divs
//turn makeGrid into a giant object of functions to hold everything.


function getRandomColor(){
 var letters = "0123456789ABCDEF";
 var color = '#';
 for(var i=0; i <6; i++){
   color += letters[Math.floor(Math.random() *16)];
 }
 return color;
}


var makeGrid = window.onload = function(){
  var createGrid = prompt("How many rows do you want?");
  var number = parseInt(createGrid);

  for(i = 0; i < number; i++){
    var row = document.createElement('div');
      row.className = "row";
      row.id = "row" + i;
      
    
  for(k= 0; k < number; k++ ){
    var box = document.createElement('div');
      box.className = "box";
      box.id = "box";
      row.appendChild(box);
        
      }
       container.appendChild(row);
       
  }
  //adds red when you mouse over a square.
  document.addEventListener("mouseover",(e)=>{
        if(!e.target.classList.contains("box")){
            return;
            }
            e.target.style.background = "#3d3d3d";
        });
        
  //adds a random color when you mouse over a square.
  document.getElementById('rainbowColor').addEventListener('click', ()=>{
    document.addEventListener("mouseover", (e)=>{
      if(!e.target.classList.contains("box")){
        return
      }
      e.target.style.background = getRandomColor();
    })
    
  })
  //removes color when you click the clear button.
    document.getElementById('clearBtn').addEventListener('click', () =>{
          const colors = document.querySelectorAll('#box[style*= "background"]');
          colors.forEach(color => color.removeAttribute('style'));
          });
              return container;
        }

//create a grid

//generates a grid with the original div container already on index.html you need to start messing with the code you work with to gain a better understanding of what it's doing



function resizeGrid(){
   let divContainer = document.getElementById('container');
      while(divContainer.firstChild){
        divContainer.removeChild(divContainer.firstChild);
        }
          makeGrid();
      }



