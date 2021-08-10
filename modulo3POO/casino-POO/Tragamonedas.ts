    import Archivo from './LectorArchivos';
    import * as RLS from 'readline-sync';
    import * as fs from 'fs';


    export default class Tragamonedas {
        protected probalidad: Archivo;
        protected valorApuesta:number;

        constructor(){
            this.probalidad = new Archivo('probalidad.txt','\n');
        }
        
    
            
        protected generarNumerosAleatorios():number{
            let prob= Number(this.probalidad.getArchivo()[0]);
            
            //let prob3=Number(prob2);
            return Math.floor((Math.random() * prob) + 1);  
        }

        


        protected cuantoApuesta():number{
            this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
            console.log("el MONTO que ustesd apuesta es "+this.valorApuesta);
            return this.valorApuesta;
        
        }


        public jugar():boolean{
            let txtFile:string='';
            this.cuantoApuesta();
            let resultado=false;
            let num1:number= this.generarNumerosAleatorios();
            let num2:number= this.generarNumerosAleatorios();
            let num3:number= this.generarNumerosAleatorios();
            let numUsuario:number= this.generarNumerosAleatorios();
            let vApuesta= this.valorApuesta;
            
            console.log("los numeros que salieron en el generar aleatorios fueron "+num1, num2, num3+ " y el numero que se le genero al usuario fue "+ numUsuario);
            if( (num1 == num2) && (num1 == num3) && (num2 == num3) && (num1==numUsuario)){
                resultado=true;
                console.log("felicitaciones, los numeros coincidieron usted  gano");
                this.GanoApuesta();
            }else{
                this.PerdioApuesta();
                console.log("no coincidieron los numeros, usted perdio");
            }
            txtFile = txtFile+ 'juego tragamonedas' + '\n'+  'usted aposto ' + vApuesta + '\n' + ' los numeros que salieron fueron el ' + num1 +' y '+ num2 +' y el '+ num3 + '\n' + 'el numero que le salio al jugador fue fue '+numUsuario+ '\n'+ 'usted gano? '+resultado+ '\n';
                fs.appendFile('resultadosTragamonedas.txt', txtFile, function (err) {
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



