import Tragamonedas from './Tragamonedas';


class tragamonedasH extends Tragamonedas{

    public constructor(){
        super(5,10); //estos valores  no lo uso pero el super vacio me daba error MODIFICAR ESO
    }


    public jugarHijo():boolean{
        let resultado=false;
        let num1:number= this.generarNumerosAleatorios();
        let num2:number= this.generarNumerosAleatorios();
        let num3:number= this.generarNumerosAleatorios();
        let num4:number= this.generarNumerosAleatorios();
        let num5:number= this.generarNumerosAleatorios();
        let numUsuario:number= this.generarNumeroAlUsuario();
        console.log("los numeros que salieron en el generar aleatorios fueron "+ num1, num2, num3, num4, num5+ " y el numero del usuario fue "+ numUsuario);
        if( (num1 == num2) && (num1 == num3) && (num2 == num3) && (num1==num4) &&(num1 == num5) && (num1==numUsuario)){
            resultado=true;
            console.log("felicitaciones, los numeros coincidieron usted  gano");
            this.GanoApuestaJackpot();
        }else{
            this.PerdioApuesta();
            console.log("no coincidieron los numeros, usted perdio");
        }
        return resultado;
    }

    public GanoApuestaJackpot():void{
        this.valorApuesta=this.valorApuesta*5;
    }
}
    


let th = new  tragamonedasH();

console.log("tragamonedas hijo "+ th);


th.cuantoApuesta();
th.jugarHijo();
console.log(th.getValorApuestaActual());