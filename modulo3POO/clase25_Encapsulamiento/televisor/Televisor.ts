import Decodificador from "./Decodificador";

class Televisor{
    private estaPrendido:boolean;
    private decodificador: Decodificador;


    constructor(prendido: boolean, decoder: Decodificador) {
        this.estaPrendido = prendido;
        this.decodificador = decoder;
    }

     //mostramos el si esta prendido o no
    public getEstaPrendido() : boolean {
        return this.estaPrendido;
    }
    public setEstaPrendido(estado:boolean):void{
        this.estaPrendido=estado;
    }

    //
    public getCanalActual():number{
        if(this.estaPrendido!=false){
            return this.decodificador.getCanal();
        }else{
            console.log("la tele esta apagada");   
        }
    }

    public setNuevoCanal(nuevoCanal:number){
        if(this.estaPrendido!=false){
            this.decodificador.setCanal(nuevoCanal);
        }else{
            console.log("la tele esta apagada");  
        }
    }

    public incrementarCanal():void{
        if(this.estaPrendido!=false){
            this.decodificador.subirCanal();
        }else{
            console.log("la tele esta apagada");
        }
    }

    public bajarCanal():void{
        if(this.estaPrendido!=false){
            this.decodificador.bajarCanal();
        }else{
            console.log("la tele esta apagada");
            
        }
    }

    public getVolumenActual():number{
        if(this.estaPrendido!=false){
            return this.decodificador.getVolumen();
        }else{
            console.log("la tele esta apagada");   
        }
    }

    public setNuevoVolumen(nuevoVolumen:number){
        if(this.estaPrendido!=false){
            this.decodificador.setVolumen(nuevoVolumen);
        }else{
            console.log("la tele esta apagada");  
        }
    }

    public incrementarVolumen():void{
        if(this.estaPrendido!=false){
            this.decodificador.subirVolumen();
        }else{
            console.log("la tele esta apagada");
        }
    }

    public bajarVolumen():void{
        if(this.estaPrendido!=false){
            this.decodificador.bajarVolumen();
        }else{
            console.log("la tele esta apagada");
        }
    }
}

let decoder:Decodificador= new Decodificador(10,24);
let tv1: Televisor = new Televisor(true, decoder);

console.log("el canal inicial es "+tv1.getCanalActual());
tv1.bajarVolumen();
console.log("el volumen despues de bajarlo 1 es "+tv1.getVolumenActual());

tv1.incrementarCanal();
console.log(" despues de subir un canal, el canal actual es "+tv1.getCanalActual());
tv1.bajarCanal();
console.log("despues de bajar un canal, el canal actual es "+tv1.getCanalActual());
tv1.setNuevoCanal(33);
console.log("despues de haber cambiado varios canales, el canal actual es "+tv1.getCanalActual());
tv1.setNuevoVolumen(15);
console.log("despues de subir varios volumenes, el volumen actual es"+tv1.getVolumenActual());



