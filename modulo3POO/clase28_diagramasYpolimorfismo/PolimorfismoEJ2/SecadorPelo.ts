import Secador from "./Secador";

export default class SecadorPelo extends Secador{

    constructor(marca:string,modelo:string,potencia:number){
        super(marca,modelo,potencia);
    }


    public aumentarPotencia():void{
        this.potencia= this.potencia+30;
    }

    public disminuirPotencia():void{
        this.potencia= this.potencia-30;
    }


    public secar(secado:boolean):void{
            if(secado==true){
                console.log("estas usando el secador de pelo");      
            }else{
                console.log("no estas usando el secador de pelo");
            }
    }
}