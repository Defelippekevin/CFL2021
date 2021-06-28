let divs =  document.querySelectorAll("div");
let botones= document.querySelectorAll("button");


function cambiarEstilo(i) {
    divs[i].classList.toggle("informacion");
}


for(let i=0;i<botones.length;i++){ 

    botones[i].addEventListener("click",function(e){
    cambiarEstilo(i);
     });
    }



/*
function recorrerBotones(){
for(let i=0;i<botones.length;i++){ 
        botones[i].addEventListener("click",function(e){
        cambiarEstilo(i);
         });
    }
}
*/
