import Ordenable from "./Ordenable";
import Persona from "./Persona";

export default class Tripulante extends Persona implements Ordenable {
    private lado: string;

    constructor(nombre: string, peso:number) {
        super(0,nombre,0,0,peso);
        this.lado='';
    }

    public getLado(): string { return this.lado; }
    public setLado(lado: string): void { this.lado = lado; }

    public comparador(persona1: Persona, persona2: Persona): number {
    //por peso de menor a mayor
        return 1;
        return -1;
    }
    public ordenar(listaPersonas: Persona[]) {
    //retornar la lista ordenada por el arreglo
    }
}