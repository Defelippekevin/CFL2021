import Secador from "./Secador";

export default class SecadorPiso extends Secador{

    constructor(marca:string,modelo:string,potencia:number){
        super(marca,modelo,potencia);
    }


    public aumentarPotencia():void{
        this.potencia= this.potencia+60;
    }

    public disminuirPotencia():void{
        this.potencia= this.potencia-60;
    }


    public secar(secado:boolean):void{
            if(secado==true){
                console.log("estas usando la maquina que seca el piso");      
            }else{
                console.log("no estas usando la maquina que seca el piso");
            }
    }

}