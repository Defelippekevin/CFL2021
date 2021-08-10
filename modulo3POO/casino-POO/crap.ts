
        import * as RLS from 'readline-sync';
        import * as fs from 'fs';

        export default class Crap{
            protected dado1:number;
            protected dado2:number;
            protected resultadoDados:number;
            protected resultadoApostador:number;
            protected valorApuesta:number;

            constructor(){

            }

            private dadosAleatorios():number{
                return   Math.floor((Math.random() * 6) + 1); 
            }

            private tirarDados():number{
                this.dado1= this.dadosAleatorios();
                this.dado2=this.dadosAleatorios();

                this.resultadoDados= this.dado1 + this.dado2;
                console.log("el resultado que salio al sumar lo que arrojaron los 2 dados fue "+ this.resultadoDados);
                return this.resultadoDados;
            }
            private pedirNumeroAlApostador():number{
                    this.resultadoApostador= RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
                    while((this.resultadoApostador<1) || (this.resultadoApostador>12)){
                    this.resultadoApostador= RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
                    }
                    console.log("el resultado por el que apuesta es "+this.resultadoApostador);
                
                    return  this.resultadoApostador;
                
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
                this.tirarDados();
                let vApuesta= this.valorApuesta;
                if(this.resultadoDados==this.resultadoApostador){
                    resultado=true;
                    console.log("felicitaciones, los numeros coincidieron usted  gano");
                    this.GanoApuesta();
                }else{
                    this.PerdioApuesta();
                    console.log("no coincidieron los numeros, usted perdio");
                }
                txtFile = txtFile+ 'juego Crap' + '\n'+  'usted aposto ' + vApuesta + '\n' + ' usted le aposto al numero ' + this.resultadoApostador+ '\n' + 'el numero que salio en los dados  fue '+this.resultadoDados+ '\n'+ 'usted gano? '+resultado+ '\n';
                fs.appendFile('resultadosCrap.txt', txtFile, function (err) {
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

