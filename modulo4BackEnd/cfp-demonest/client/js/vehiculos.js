let btnAgregarAuto= document.querySelector("#guardarAuto");
btnAgregarAuto.addEventListener("click",agregarAuto);

let btnAgregarCamioneta= document.querySelector("#guardarCamioneta");
btnAgregarCamioneta.addEventListener("click",agregarCamioneta);

let btnVerTodo= document.querySelector("#verTodo");
btnVerTodo.addEventListener("click",actualizarVehiculos);

let btnVerAutos= document.querySelector("#verAutos");
btnVerAutos.addEventListener("click",filtrarAutos);

let btnVerCamionetas= document.querySelector("#verCamionetas");
btnVerCamionetas.addEventListener("click",filtrarCamionetas);

let vehiculos=[];

async function load(){
    try{
        let response= await fetch('/vehiculos');
        if(response.ok){
            let t = await response.json();
            //let v = JSON.stringify(t);
            vehiculos=t;
            //console.log(v);
            actualizarVehiculos();
        }else{
            alert("error");
        }
    }catch(error){
      alert("error");
    };
  }


  async function agregarAuto(){ 
    let marca = document.querySelector('#marca').value;
    let patente = document.querySelector('#patente').value;
    let modelo = document.querySelector('#modelo').value;
    let anio = parseInt(document.querySelector('#anio').value);
    let precio = parseInt(document.querySelector('#precio').value);
    let capacidadBaul = parseInt(document.querySelector('#capacidadBaul').value);
      let coche={
          "tipo":"auto",
          "marca": marca,
          "patente":patente,
          "modelo":modelo,
          "anio":anio,
          "precio":precio,
          "capacidad":capacidadBaul
      };
      let resp = await fetch('/vehiculos', {
          "method": "POST",
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(coche)
      })
      if (resp.ok){
        vehiculos.push(coche);
        actualizarVehiculos();
 
      }else{
        console.log("fallo")
      }
  }


  async function agregarCamioneta(){ 
    let marca = document.querySelector('#marca').value;
    let patente = document.querySelector('#patente').value;
    let modelo = document.querySelector('#modelo').value;
    let anio = parseInt(document.querySelector('#anio').value);
    let precio = parseInt(document.querySelector('#precio').value);
    let capacidadCarga = parseInt(document.querySelector('#capacidadCarga').value);
    console.log(marca,patente,modelo,anio,precio,capacidadCarga);
      let coche={
          "tipo":"camioneta",
          "marca": marca,
          "patente":patente,
          "modelo":modelo,
          "anio":anio,
          "precio":precio,
          "capacidad":capacidadCarga
      };
      let resp = await fetch('/vehiculos', {
          "method": "POST",
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(coche)
      })
      if (resp.ok){
        vehiculos.push(coche);
        actualizarVehiculos();
  
      }else{
        console.log("fallo")
      }
  }



  function actualizarVehiculos(){
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        html += `
               <tr>
                   <td>${vehiculos[i].tipo}</td>
                   <td>${vehiculos[i].marca}</td>
                   <td>${vehiculos[i].patente}</td>
                   <td>${vehiculos[i].modelo}</td>
                   <td>${vehiculos[i].anio}</td>
                   <td>${vehiculos[i].precio}</td>
                   <td>${vehiculos[i].capacidad}</td>
                   </tr>
           `;
    }
    document.querySelector("#tabla").innerHTML = html;
}

load();


function filtrarCamionetas(){
    document.querySelector("#tabla").innerHTML = "";
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        if(vehiculos[i].tipo == "camioneta"){
            html += `
               <tr>
                   <td>${vehiculos[i].tipo}</td>
                   <td>${vehiculos[i].marca}</td>
                   <td>${vehiculos[i].patente}</td>
                   <td>${vehiculos[i].modelo}</td>
                   <td>${vehiculos[i].anio}</td>
                   <td>${vehiculos[i].precio}</td>
                   <td>${vehiculos[i].capacidad}</td>
              </tr>
           `;
        }
    }
    document.querySelector("#tabla").innerHTML = html;
}

function filtrarAutos(){
    document.querySelector("#tabla").innerHTML = "";
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        if(vehiculos[i].tipo == "auto"){
            html += `
               <tr>
               <td>${vehiculos[i].tipo}</td>
               <td>${vehiculos[i].marca}</td>
               <td>${vehiculos[i].patente}</td>
               <td>${vehiculos[i].modelo}</td>
               <td>${vehiculos[i].anio}</td>
               <td>${vehiculos[i].precio}</td>
               <td>${vehiculos[i].capacidad}</td>
              </tr>
           `;
        }
    }
    document.querySelector("#tabla").innerHTML = html;
}
