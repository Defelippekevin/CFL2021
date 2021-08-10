    import * as RLS from 'readline-sync';
    import * as fs from 'fs';

    export default class Ruleta{
        protected numeroAleatorio:number;
        protected numeroDelApostador:number;
        protected valorApuesta:number;
     
    constructor(){

    }

        
        private pedirNumeroAlApostador():number{
            this.numeroDelApostador= RLS.questionInt("ingrese el numero al que desea apostar ");
            console.log("el numero por el que apuesta es "+this.numeroDelApostador);
            return this.numeroDelApostador;
        }
        
      

        private generarNumeroAleatorio():number{
            this.numeroAleatorio = Math.floor((Math.random() * 37) + 1);
            console.log("el numero que salio entre 1 y 37 fue "+this.numeroAleatorio);
            return this.numeroAleatorio;

        }

        private cuantoApuesta():number{
            this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
            console.log("el MONTO que ustesd apuesta es "+this.valorApuesta);
            return this.valorApuesta;
        
        }

            public jugar():boolean{
                let txtFile:string='';
                this.cuantoApuesta();
                let resultado=false;
                this.pedirNumeroAlApostador();
                this.generarNumeroAleatorio();  
                let vApuesta= this.valorApuesta;
                if(this.numeroAleatorio==this.numeroDelApostador){
                    resultado=true;
                    console.log("felicitaciones, los numeros coincidieron usted  gano");
                    this.GanoApuesta();
                   console.log(" su nuevo dinero es "+this.getValorApuestaActual());
                    
                }else{
                    this.PerdioApuesta();
                    console.log("no coincidieron los numeros, usted perdio");
                    console.log(" su nuevo dinero es "+this.getValorApuestaActual());
                }
                txtFile = txtFile+ 'juego ruleta' + '\n'+  'usted aposto ' + vApuesta + '\n' + ' usted le aposto al numero ' + this.numeroDelApostador+ '\n' + 'el numero que salio en la ruleta fue '+this.numeroAleatorio+ '\n'+ 'usted gano? '+resultado+ '\n';
                fs.appendFile('resultadosRuleta.txt', txtFile, function (err) {
                    if (err) throw err;
                    
                });
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











