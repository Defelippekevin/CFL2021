import Ordenable from "./Ordenable";
import Persona from "./Persona";

export default class Votante extends Persona implements Ordenable {
    private nroOrden: number;
    private mesa: string;
    private voto: boolean;

    constructor(dni:number,nombre:string,edad:number,nroOrden:number,mesa:string) {
        super(dni,nombre,edad,0,0);
        this.nroOrden=nroOrden;
        this.mesa=mesa;
        this.voto=false;
    }

    public getNroOrden(): number { return this.nroOrden; }
    public setNroOrden(nroOrden: number): void { this.nroOrden = nroOrden; }
    public getMesa(): string { return this.mesa; }
    public setMesa(mesa: string): void { this.mesa = mesa; }
    public isVoto(): boolean { return this.voto; }
    public setVoto(voto: boolean): void { this.voto = voto; }

    public comparador(persona1: Persona, persona2: Persona): number {
    //por nombre alfabetico de menor a mayor
        return 1;
        return -1;
    }
    public ordenar(listaPersonas: Persona[]) {
        //retornar la lista ordenada por el arreglo
    }   
}