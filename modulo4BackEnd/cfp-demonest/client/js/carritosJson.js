

let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregar);
let botonTotal=document.querySelector("#sumarTotal");
botonTotal.addEventListener("click",sumarPrecioCompras);





let sumaPrecioCompras = document.querySelector("#total");




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


async function agregar(){ 
  let id= document.querySelector("#id");
  let nombre= document.querySelector("#nombre");
  let precio= document.querySelector("#precio");
    let carrito={
        "idProducto":id.value,
        "nombreProducto": nombre.value,
        "precio":parseFloat(precio.value)
    };
    let resp = await fetch("/producto", {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(carrito)
    })
    if (resp.ok){
      arrayCompras.push(carrito);
      actualizarCarrito();

    }else{
      console.log("fallo")
    }
}

function actualizarCarrito(){
    html = "";
    for (let i = 0; i < arrayCompras.length; i++) {
        html += `
               <tr>
                   <td>${arrayCompras[i].idProducto}</td>
                   <td>${arrayCompras[i].nombreProducto}</td>
                   <td>${arrayCompras[i].precio}</td>
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
  

/*
  async function crear(prod){
    let response =await fetch('/producto',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prod),
    });

  }

  let productos={
    "id":999,
    "nombreProducto": "Mi producto 1",
    "precio":998
  }


  crear(productos);
  */