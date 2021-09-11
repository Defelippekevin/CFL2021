
let razonSocial= document.querySelector("#razonSocial");
let domicilio= document.querySelector("#domicilio");
let saldo= document.querySelector("#saldo");

let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregar);


async function load(){
    try{
        let response= await fetch('/cliente');
        if(response.ok){
            let t = await response.json();
            //let v = JSON.stringify(t);
            clientes=t;
            //console.log(v);
            actualizarTablaClientes();
        }else{
            alert("error");
        }
    }catch(error){
      alert("error");
    };
  }
  load();



function agregar(){ 
    let cliente={
        "razonSocial":razonSocial.value,
        "domicilio": (domicilio.value),
        "saldo":parseFloat(saldo.value)
    };
    clientes.push(cliente);
    actualizarTablaClientes();
}


function actualizarTablaClientes(){
    html = "";
    for (let i = 0; i < clientes.length; i++) {
        html += `
               <tr>
                   <td>${clientes[i].razonSocial}</td>
                   <td>${clientes[i].domicilio}</td>
                   <td>${clientes[i].saldo}</td>
                   </tr>
           `;
    }
    document.querySelector("#tablaCliente").innerHTML = html;
}