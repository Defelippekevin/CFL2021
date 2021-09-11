let listaDocumentos = [];

let enviar = document.querySelector("#enviar");
enviar.addEventListener("click", agregar);

let tituloModerno= document.querySelector("#tituloModerno");
tituloModerno.addEventListener("click",getTituloModerno);

let tituloAntiguo= document.querySelector("#tituloAntiguo");
tituloAntiguo.addEventListener("click",getTituloAntiguo);

let temaDeterminado = document.querySelector("#temaAbuscar");
temaDeterminado.addEventListener("click",getTemaDeterminado);

let anioAntiguedad= document.querySelector("#anioAntiguedad");
anioAntiguedad.addEventListener("click",getDocumentoAnioAntiguedad);

function agregar(){
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let tema = document.querySelector("#tema").value;
    let fecha = document.querySelector("#fecha").value;

    let documento={
        "titulo":titulo,
        "autor":autor,
        "tema":tema,
        "fecha":fecha,
    };
    listaDocumentos.push(documento);
    actualizarTablaDocumentos();
}

function actualizarTablaDocumentos() {
    html = "";
    for (let i = 0; i < listaDocumentos.length; i++) {
        html += `
               <tr>
                   <td>${listaDocumentos[i].titulo}</td>
                   <td>${listaDocumentos[i].autor}</td>
                   <td>${listaDocumentos[i].tema}</td>
                   <td>${listaDocumentos[i].fecha}</td>
                   </tr>
           `;
    }
    document.querySelector("#tabla").innerHTML = html;
}

function getTituloModerno(){
    let tituloMasModerno = listaDocumentos[0];
    for(let i=1;i<listaDocumentos.length;i++){
       if( listaDocumentos[i].fecha > tituloMasModerno.fecha){
           tituloMasModerno = listaDocumentos[i];
       }
    }
    document.querySelector("#resultado").innerHTML = tituloMasModerno.titulo;
}

function getTituloAntiguo(){
    let tituloMASantiguo= listaDocumentos[0];
    for(let i=1;i<listaDocumentos.length;i++){
        if(listaDocumentos[i].fecha < tituloMASantiguo.fecha){
            tituloMASantiguo = listaDocumentos[i];
        }
    }
    document.querySelector("#resultado").innerHTML= tituloMASantiguo.titulo;
}

function getTemaDeterminado(){
    document.querySelector("#resultado").innerHTML= " ";
   let temaDeterminado = document.querySelector("#temaDeterminado").value;
    for(let i=0;i<listaDocumentos.length;i++){
        if(listaDocumentos[i].tema == temaDeterminado){
        document.querySelector("#resultado").innerHTML+= "<li>" +listaDocumentos[i].titulo + "</li>";
        }
    }
}
 
function getDocumentoAnioAntiguedad(){
    document.querySelector("#resultado").innerHTML= " ";
    let anioDocumento=2021;
    for(let i=0;i<listaDocumentos.length;i++){
        if(listaDocumentos[i].fecha<anioDocumento){
        document.querySelector("#resultado").innerHTML+= "<li>" +listaDocumentos[i].titulo + "</li>";     
        }
    }
}

/*
let btnporautor = document.getElementById('btnporautor');
btnporautor.addEventListener("click", ()=>{
   let aux;
  let porAutor = []
    for (let i = 0; i < listaDocumentos.length; i++){ // i = 0
        for ( let j = 1; j<listaDocumentos.length; j++){ //j = 1
            if(listaDocumentos[i].autor == listaDocumentos[j].autor){ //Rod == MArtinez?//
                porAutor.push(listaDocumentos[i].autor)
            }
        }
    }
    console.log(porAutor);

// })
*/