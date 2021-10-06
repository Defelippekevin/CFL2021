
let t = [];

function processParams() {
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    let params = [];
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}


async function load(){
try {
    let params = processParams();
    console.log(params);
    let response = await fetch(`/comentario/postId/${params["index"]}`);   
    console.log(response);
    if (response.ok) {
        t = await response.json();
        console.log(t);

        mostrarComentarios();
    }
    else{
    console.log("failed URL");
    }
}
catch (response) {
    console.log(response);
   
};
}


function mostrarComentarios(){
    console.log("mostrando t" + t);
    html = "";
    document.querySelector("#tablaDetalle").innerHTML = html;
    for (let i = 0; i < t.length; i++) {
        html += `
               <tr>
                   <td>${t[i].postId} </td>
                   <td>${t[i].id} </td>
                   <td>${t[i].name}</td>
                   <td>${t[i].email}</td>
                   <td>${t[i].body}</td>
                   `;
        }
        document.querySelector("#tablaDetalle").innerHTML = html;
    }


load();
