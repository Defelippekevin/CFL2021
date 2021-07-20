
import * as RLS from 'readline-sync';

class Crap{
    protected dado1:number;
    protected dado2:number;
    protected resultadoDados:number;
    protected resultadoApostador:number;
    protected valorApuesta:number;

    constructor(){

    }

    public dadosAleatorios():number{
        return   Math.floor((Math.random() * 2) + 1); 
    }

    private tirarDados():number{
        this.dado1= this.dadosAleatorios();
        this.dado2=this.dadosAleatorios();

        this.resultadoDados= this.dado1 + this.dado2;
        return this.resultadoDados;
    }
        public pedirNumeroAlApostador():number{
            this.resultadoApostador= RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
            while((this.resultadoApostador<1) || (this.resultadoApostador>12)){
            this.resultadoApostador= RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
            }
            console.log("el resultado por el que apuesta es "+this.resultadoApostador);
        
            return  this.resultadoApostador;
        
        }

    public cuantoApuesta():number{
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es "+this.valorApuesta);
        return this.valorApuesta;
     
    }

    public jugar():boolean{
        let resultado=false;
        this.tirarDados();
        if(this.resultadoDados==this.resultadoApostador){
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

let  dado:Crap = new Crap();

dado.cuantoApuesta();

dado.pedirNumeroAlApostador();

dado.jugar();
console.log(dado.getValorApuestaActual());