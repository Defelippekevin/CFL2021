/*
Dar un form para cargar compras del cliente y un
sumar que nos diga el total (dos botones, un agregar
y otro calcular, arreglo global)
*/

 let precio= document.querySelector("#precio");
 let sumaPrecioCompras = document.querySelector("#total");
 let arrayCompras= [];
 let lista= document.querySelector("#lista");



 let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregar);

let botonTotal=document.querySelector("#sumarTotal");
botonTotal.addEventListener("click",sumarPrecioCompras);


 function agregar(){
    
     let compra= Number(precio.value);
     arrayCompras.push(compra);
      actualizarCarrito();
  }


  function actualizarCarrito(){
    lista.innerHTML = " ";
    for(let i=0; i<arrayCompras.length; i++){
       let creoLi = document.createElement("li");
       creoLi.innerHTML = arrayCompras[i];
       lista.appendChild(creoLi);

    }
  }

  function sumarPrecioCompras(){
      let suma=0;

      for(let i=0; i<arrayCompras.length; i++){

        suma= suma + arrayCompras[i];
  }
  sumaPrecioCompras.innerHTML = suma;


}