//try flexbox
/*
adding a button and having the submit grab the value for the backend function
the color isn't being added to the box it's being added to element.style

the functionality of the grid needs to be put into the same windows.onload function.

*/
//trying to make a function for creating divs
//turn makeGrid into a giant object of functions to hold everything.


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
  //adds color when you mouse over a square.
    document.addEventListener("mouseover",(e)=>{
        if(!e.target.classList.contains("box")){
            return;
            }
            e.target.style.background = "#3d3d3d";
        });
  //removes color when you click the clear button.
    document.getElementById('clearBtn').addEventListener('click', () =>{
          const reds = document.querySelectorAll('#box[style*= "background"]');
          reds.forEach(red => red.removeAttribute('style'));
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

  
  
  //right now the resizing is adding to the bottom of the old grid.
  
  //general idea of clearing the grid of color is here.
  //instead of using queryselector try to use foreach since you have an id to each box.
  


//const colors = document.querySelectorAll('#box[style*= "background: #3d3d3d"]');
    
  
  


  


/*

  var divContainer = document.createElement('div');
  divContainer.id = "container";
  document.body.appendChild(divContainer);
const color = document.querySelectorAll('.box[style *="background: rgb(61, 61, 61)"]');

console.log(color)
*/



/*


  document.getElementById('clearBtn').addEventListener('click', ()=> {
      
    const reds = document.querySelectorAll('#box[style]');
    console.log(reds);
      reds.forEach(red => red.removeAttribute('style'));
    })
  }
  
  
      if(!e.target.classList.contains("box")){
        return;
      }
      console.log(e);
      e.target.style.background = null;
    })
  }

//further testing needed to confirm if this code is needed to grab divs
  var coloredElem = document.getElementById("container").addEventListener("load",makeGrid);
    document.getElementById("clear").addEventListener('click',() =>{
        const blacks = document.querySelectorAll('.box[style*=" background: rgb(61, 61, 61)"]');
      console.log(blacks)
        blacks.forEach(black => black.removeAttribute("style"))
      });


document.getElementById("container").addEventListener("load",makeGrid)
  var coloredDivs =  document.querySelectorAll('.row');
    if(coloredDivs.hasAttribute("background")){
      coloredDivs.removeAttribute("background");
    }

 document.getElementById("container").addEventListener("load",makeGrid)
    document.getElementById("clear").addEventListener('click',() =>{
        const black = document.querySelectorAll('.box[style *="background: rgb(61, 61, 61)"]');
       console.log(black);
        black.forEach(black => black.removeAttribute("style"));






function grid() {
  var container = document.getElementById("container");
        for (i = 0; i <= 16; i++){
           
        
          
    
     for(k = 0; k <= 16; k ++){
          var box = document.createElement("div");
           box.className = "box";
         //    row.appendChild(box);
         
          }
           container.appendChild(row);
          }
           return container;
        }
         // grid(document.body);
            



*/

