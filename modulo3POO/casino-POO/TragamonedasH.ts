    import Tragamonedas from './Tragamonedas';
    import * as fs from 'fs';



    export default class tragamonedasH extends Tragamonedas{

        public constructor(){
            super(); 
        }

        public jugarHijo():boolean{
            let txtFile:string='';
            this.cuantoApuesta();
            let resultado=false;
            let num1:number= this.generarNumerosAleatorios();
            let num2:number= this.generarNumerosAleatorios();
            let num3:number= this.generarNumerosAleatorios();
            let num4:number= this.generarNumerosAleatorios();
            let num5:number= this.generarNumerosAleatorios();
            let numUsuario:number= this.generarNumerosAleatorios();
            let vApuesta= this.valorApuesta;
            console.log("los numeros que salieron en el generar aleatorios fueron "+ num1, num2, num3, num4, num5+ " y el numero del usuario fue "+ numUsuario);
            if( (num1 == num2) && (num1 == num3) && (num2 == num3) && (num1==num4) &&(num1 == num5) && (num1==numUsuario)){
                resultado=true;
                console.log("felicitaciones, los numeros coincidieron usted  gano");
                this.GanoApuestaJackpot();
            }else{
                this.PerdioApuesta();
                console.log("no coincidieron los numeros, usted perdio");
            }
            txtFile = txtFile+ 'juego tragamonedasH ' + '\n'+  'usted aposto ' + vApuesta + '\n' + ' los numeros que salieron fueron el ' + num1 +' y '+ num2 +' y '+ num3 + ' y '+ num4 + ' y el '+ num5 + '\n' + 'el numero que le salio al jugador fue fue '+numUsuario+ '\n'+ 'usted gano? '+resultado+ '\n';
                fs.appendFile('resultadosTragamonedasH.txt', txtFile, function (err) {
                    if (err) throw err;
                    
                });

            return resultado;
        }

        private GanoApuestaJackpot():void{
            this.valorApuesta=this.valorApuesta*5;
        }
    }
    

