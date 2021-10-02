let btnAgregar = document.querySelector("#agregar");
btnAgregar.addEventListener("click",agregarPost);

let btnBuscar= document.querySelector("#buscar");
btnBuscar.addEventListener("click",buscado);

let btnModificar= document.querySelector("#modificar");
btnModificar.addEventListener("click",modificarPost);

let btnBorrar = document.querySelector("#borrar");
btnBorrar.addEventListener("click", borrar);

let posts = []; //arreglo global, lo accedo desde todo el archivo

let userId= document.querySelector("#idUser")
let idPost= document.querySelector("#idPost");
let titulo= document.querySelector("#titulo");
let body= document.querySelector("#body");

load();

async function load(){
    try{
        let response= await fetch('/post');
        if(response.ok){
            let t = await response.json();
            //let v = JSON.stringify(t);
            posts=t;
            //console.log(v);
            actualizarPost();
        }else{
            alert("error");
        }
    }catch(error){
      alert("error");
    };
  }


  async function agregarPost(){ 
   
      let posteo={
          "userId":userId.value,
          "id": idPost.value,
          "title":titulo.value,
          "body": body.value
      };
      let resp = await fetch("/post", {
          "method": "POST",
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(posteo)
      })
      if (resp.ok){
        posts.push(posteo);
        load();
        actualizarPost();
  
      }else{
        console.log("fallo")
      }
  }



  function actualizarPost(){
    html = "";
    document.querySelector("#tabla").innerHTML = html;
    for (let i = 0; i < posts.length; i++) {
        html += `
               <tr>
                   <td>${posts[i].userId} </td>
                   <td>${posts[i].id} </td>
                   <td>${posts[i].title}</td>
                   <td>${posts[i].body}</td>
                   <td><a href="/PostDetalle.html?index=${i}" id="idPost${i}">Link al post</a></td>
                   </tr>
           `;
    }
    document.querySelector("#tabla").innerHTML = html;
}


async function borrar(){
  try{
    let response = await fetch(`/post/${idPost.value}`,{
          "method":'DELETE',
          "headers": {
              "Content-Type": "application/json"
          }
      });
      if(response.ok){
          load();
      }else{
         alert( "error  en lectura del servidor");
      }
  }catch(error){
      alert("error  en conexion con servidor");

  }
}




async function buscado(){
    let resultadoFiltrado = document.querySelector("#resultadoFiltrado");
    idFiltrado= parseInt(document.querySelector("#buscarPost").value);
    html = "";
    try{
      let response = await fetch ( `/post/${idFiltrado}`);
      if(response.ok){
        let t= await response.json();
        posts=[];
        posts.push(t);
        console.log(t);
        resultadoFiltrado.innerHTML= "Post: "+ posts[0].userId + " id del post "+ posts[0].id + " titulo "+ posts[0].title + " contenido del post "+ posts[0].body;
      }else{
      resultadoFiltrado.innerHTML = "ERROR URL";
      }
  }catch(err){
      resultadoFiltrado.innerHTML = err.message;
    }
  }

async function modificarPost(){
  /*
    let userId= document.querySelector("#idUser")
    let idPost= document.querySelector("#idPost");
    let titulo= document.querySelector("#titulo");
    let body= document.querySelector("#body");
    */
        try {
            let posteo={
                "userId":userId.value,
                "id": idPost.value,
                "title":titulo.value,
                "body": body.value
          }
          let response = await fetch ( `/post/${idPost.value}`,{
                  'method': 'PUT',
                  'headers': {'Content-Type': 'application/json',
              },
              body: JSON.stringify(posteo)
          });
          if (response.ok) {
              load();
              actualizarPost();
          } else{
              alert("error");
          }
      } catch (error) {
          alert("error y capturado en el catch");
      }
    }