import Luz from "./Luz";
import Alarma from "./Alarma";

export default class AlarmaLuminosa extends Alarma{

protected luminosa:Luz;

    public constructor(){
        super();
        this.luminosa= new Luz;
    }

    public  comprobar():boolean {
			
		if((!this.rompioVidrio)&&(!this.puerta_ventana)&&(!this.movimiento)) {
			
			return false;
			
		}else{
            this.timbre.hacerSonar();
            this.luminosa.encender();
            console.log("te estan robando ");
            return true;
            
        }
    }

}