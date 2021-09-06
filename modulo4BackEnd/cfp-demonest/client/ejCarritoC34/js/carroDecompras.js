console.log("correcto");

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
    document.querySelector("#tablaJs").innerHTML = html;
    console.log(arrayCompras);
}

