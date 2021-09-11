import Ordenable from "./Ordenable";
import Persona from "./Persona";

export default class Espectador extends Persona implements Ordenable {
    private posicion:string;

    constructor(altura:number) {
        super(0,'anonimo',0,altura,0);
        this.posicion = '';
    }

    public getPosicion(): string { return this.posicion; } 
    public setPosicion(posicion: string): void { this.posicion = posicion; }

    public comparador(persona1: Persona, persona2: Persona): number {
    //por altura de menor a mayor

        if(persona1.getAltura < persona2.getAltura){
            return -1;
        }else if(persona1.getAltura > persona2.getAltura){
            return 1;   
        }else{
        return 0;
        }
    }
    public ordenar(listaPersonas: Persona[]) {

        

    }
}