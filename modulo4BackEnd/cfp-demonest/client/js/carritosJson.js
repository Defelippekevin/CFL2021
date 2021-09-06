
let producto= document.querySelector("#producto");
let precio= document.querySelector("#precio");
let sumaPrecioCompras = document.querySelector("#total");

console.log(producto);
console.log(precio);

let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregar);

let botonTotal=document.querySelector("#sumarTotal");
botonTotal.addEventListener("click",sumarPrecioCompras);




let arrayCompras=[];
async function load(){
    let container= document.querySelector("#useAjax");
    container.innerHTML = "<h1> ...LOADING... </h1>";
    try{
        let response= await fetch('js/mook.json');
        if(response.ok){
            let t = await response.json();
            //let v = JSON.stringify(t);
            arrayCompras=t.compras;
            //console.log(v);
            actualizarCarrito();
            container.innerHTML= "";
        }else{
            container.innerHTML= "<h1> fallo la url </h1>";
        }
    }catch(error){
        container.innerHTML= "<h1>"+error.message+"</h1>";
    };
}
load();

function agregar(){ 
    let carrito={
        "producto":producto.value,
        "precio": parseFloat(precio.value),
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
                   </tr>
           `;
    }
    document.querySelector("#tabla").innerHTML = html;
}
  function sumarPrecioCompras(){
    let suma=0;
    for(let i=0; i<arrayCompras.length; i++){
      suma= suma + parseFloat(arrayCompras[i].precio);
        }
sumaPrecioCompras.innerHTML = suma;
  }