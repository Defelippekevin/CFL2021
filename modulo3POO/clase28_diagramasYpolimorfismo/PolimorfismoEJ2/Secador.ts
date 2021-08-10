export default class Secador{

    protected marca:string;
    protected modelo:string
    protected potencia:number


    constructor(marca:string,modelo:string,potencia:number){
        this.marca=marca;
        this.modelo=modelo;
        this.potencia=potencia;
    }

    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }

    public getPotencia():number{
        return this.potencia;
    }

    public aumentarPotencia():void{
        this.potencia= this.potencia+10;
    }

    public disminuirPotencia():void{
        this.potencia= this.potencia-10;
    }

    public secar(secado:boolean):void{
        if(secado=true){

        }else{
            
        }
    }
}