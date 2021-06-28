
let boton = document.querySelector("#botom");
boton.addEventListener("click", cuentaRegresiva);


function cuentaRegresiva(){
    let contador = 5; // contador de la cuenta regresiva
    let miDiv = document.querySelector("#div");
    let intervalo=setInterval(function(e){
        if(contador===0){
            miDiv.innerHTML = "BOOOOOM"; // cuando la cuenta regresiva llegue a 0 aparece el texto en el html
            clearInterval(intervalo);
            cambiarEstilo(); // llamo a la funcion cambiar estilo cuando el contador llegue a 0
        }
        else{
            contador--;
            miDiv.innerHTML = contador;
        }
        console.log(contador);
    },1000);
}

function cambiarEstilo() { // le agrega el stilo bomba a lo que tiene el id div, que en este caso es un <div>
    let fondo = document.querySelector('#div');
    fondo.classList.toggle('bomba'); // agrego la clase bomba con sus estilos

}






