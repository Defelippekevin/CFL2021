
let producto= document.querySelector("#producto");
let precio= document.querySelector("#precio");
let descripcion= document.querySelector("#descripcion");
let sumaPrecioCompras = document.querySelector("#total");

let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregar);

let botonTotal=document.querySelector("#sumarTotal");
botonTotal.addEventListener("click",sumarPrecioCompras);


//let arrayCompras= [];

async function load(){
  try{
      let response= await fetch('/producto');
      if(response.ok){
          let t = await response.json();
          //let v = JSON.stringify(t);
          arrayCompras=t;
          //console.log(v);
          actualizarCarrito();
      }else{
          alert("error");
      }
  }catch(error){
    alert("error");
  };
}
load();


function agregar(){ 
    let carrito={
        "producto":producto.value,
        "precio": parseFloat(precio.value),
        "descripcion":descripcion.value
    };
    arrayCompras.push(carrito);
    actualizarCarrito();
}

function actualizarCarrito(){
    html = "";
    for (let i = 0; i < arrayCompras.length; i++) {
        html += `
               <tr>
                   <td>${arrayCompras[i].producto}</td>
                   <td>${arrayCompras[i].precio}</td>
                   <td>${arrayCompras[i].descripcion}</td>
                   </tr>
           `;
    }
    document.querySelector("#tabla").innerHTML = html;
}
  function sumarPrecioCompras(){
    let suma=0;
    for(let i=0; i<arrayCompras.length; i++){
      suma= suma + arrayCompras[i].precio;
        }
sumaPrecioCompras.innerHTML = suma;
  }