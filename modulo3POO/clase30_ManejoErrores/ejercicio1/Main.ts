import Telefono from "./Telefono";
import TelefonoConCamara from "./TelefonoConCamara";
import * as RLS from 'readline-sync';

let telViejo:Telefono = new Telefono();
    function comandosAelegir(opcion:number):void{
    switch (opcion) {
        case 1: {
            telViejo.hacerLlamada();
            break;
        }
        case 2: {
            let num:number= RLS.questionInt('ingrese el numero al que quiere mandar el msj ');
            let msj:string= RLS.question("ingrese el mensaje que desea enviar: ");
            telViejo.mandarMensaje(num,msj);
            break;            
        }
        case 3: {
            telViejo.prenderApagar();
            break;
        }
        case  4: {
            telViejo.verBateriaActual();
            break;                        
        }
    }
}
  

  try{
    let opcion:number= RLS.questionInt('Ingrese 1 si quiere llamar, 2 si quiere mandar un msj, 3 si quiere prender o apagar el celular o 4 si quiere ver la bateria acutal ');

    if(opcion !=1 && opcion !=2 && opcion !=3 && opcion !=4){
        throw new Error("ninguna opcion pertenece al comando");
    }
    comandosAelegir(opcion);
    
        
    }catch(error){
        console.log(error.message);

    }

    
  



