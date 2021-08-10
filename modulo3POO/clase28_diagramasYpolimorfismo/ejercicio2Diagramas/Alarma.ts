import Timbre from "./Timbre";

export default class Alarma{
    protected rompioVidrio:boolean;
    protected movimiento:boolean;
    protected puerta_ventana:boolean;
    protected timbre:Timbre;


    public constructor(){
        this.puerta_ventana=false;
        this.rompioVidrio=false;
        this.movimiento=false;
        this.timbre= new Timbre();
    }

    public isRompioVidrio():boolean{
        return this.rompioVidrio;
    }

    public setRompioVidrio(vidrioRoto:boolean):void{
        this.rompioVidrio=vidrioRoto;
    }

    public isPuerta_Ventana():boolean{
        return this.puerta_ventana;
    }

    public setPuerta_Ventana(puertaOventana:boolean){
        this.puerta_ventana=puertaOventana;
    }

    public isMovimiento():boolean{
        return this.movimiento;
    }

    public setMovimiento(mov:boolean){
        this.movimiento=mov;
    }

    public  comprobar():boolean {
			
		if((!this.rompioVidrio)&&(!this.puerta_ventana)&&(!this.movimiento)) {
			
			return false;
			
		}else{
            this.timbre.hacerSonar();
            console.log("estan robando");
            return true;
            
        }
    }


}