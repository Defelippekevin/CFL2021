import Archivo from './LectorArchivos';
import * as RLS from 'readline-sync';

export default class Tragamonedas {
    protected probalidadUsuario: number;
    protected probalidadMaquina: number;
    protected valorApuesta:number;

    constructor(probalidadU:number, probalidadM:number){// despues modificar para que pueda 
        //recibir los de la probalidad del archivotxt
        this.probalidadUsuario= 1;
        this.probalidadMaquina=1;
    }
    

    protected generarNumerosAleatorios():number{
        return Math.floor((Math.random() * this.probalidadMaquina) + 1);  
    }

    protected generarNumeroAlUsuario():number{
        return Math.floor((Math.random() * this.probalidadUsuario) + 1);
    }


    public cuantoApuesta():number{
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es "+this.valorApuesta);
        return this.valorApuesta;
     
    }


    public jugar():boolean{
        let resultado=false;
        let num1:number= this.generarNumerosAleatorios();
        let num2:number= this.generarNumerosAleatorios();
        let num3:number= this.generarNumerosAleatorios();
        let numUsuario:number= this.generarNumeroAlUsuario();
        console.log("los numeros que salieron en el generar aleatorios fueron "+num1, num2, num3, numUsuario);
        if( (num1 == num2) && (num1 == num3) && (num2 == num3) && (num1==numUsuario)){
            resultado=true;
            console.log("felicitaciones, los numeros coincidieron usted  gano");
            this.GanoApuesta();
        }else{
            this.PerdioApuesta();
            console.log("no coincidieron los numeros, usted perdio");
        }
        return resultado;
    }
    
    public GanoApuesta():void{
        this.valorApuesta=this.valorApuesta*2;
    }

    public PerdioApuesta():void{
        this.valorApuesta= this.valorApuesta/2;
    }
    public getValorApuestaActual():number{
       return this.valorApuesta;
    }
}

//let tragamonedas:Tragamonedas = new Tragamonedas(1,1);

//tragamonedas.jugar()