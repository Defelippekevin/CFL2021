import * as RLS from 'readline-sync';

class Ruleta{
    protected numeroAleatorio:number;
    protected numeroDelApostador:number;
    protected valorApuesta:number;
   

    /*
    constructor(valorApuesta:number,probalidadGanar:number){
        this.valorApuesta=valorApuesta;
        this.probalidadGanar=probalidadGanar;
    }
    */
   constructor(){

   }

    public pedirNumeroAlApostador():number{
        this.numeroDelApostador= RLS.questionInt("ingrese el numero al que desea apostar ");
        console.log("el numero por el que apuesta es "+this.numeroDelApostador);
     
        return  this.numeroDelApostador;
      
    }

    private generarNumeroAleatorio():number{
        this.numeroAleatorio = Math.floor((Math.random() * 37) + 1);
        console.log("el numero que salio entre 1 y 36 fue "+this.numeroAleatorio);
        return this.numeroAleatorio;

    }

    public cuantoApuesta():number{
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es "+this.valorApuesta);
        return this.valorApuesta;
     
    }

        public jugar():boolean{
            let resultado=false;
            this.generarNumeroAleatorio();
            if(this.numeroAleatorio==this.numeroDelApostador){
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

//let ruletita:Ruleta = new Ruleta(14,5);

let ruletita:Ruleta = new Ruleta();

ruletita.cuantoApuesta();

ruletita.pedirNumeroAlApostador();

ruletita.jugar();
console.log(ruletita.getValorApuestaActual());







/*
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());


*/









