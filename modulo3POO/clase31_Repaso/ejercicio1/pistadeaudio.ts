import pistas from "./pistas";

export default class pistadeaudio implements pistas{
    private id:number;
    private titulo:string;
    private duracion: number;
    private interprete: string;

    public constructor (/* id:number, */ titulo:string, duracion:number, interprete:string) {
        this.id = 1;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    public getID(): number {
        return this.id;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public getDuracion(): number {
        return this.duracion;
    }
    public getInterprete(): string {
        return this.interprete;
    }

    public numeroRandom (menorValor:number, mayorValor:number ):number {
        let numero:number;
        return numero = Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
    }
}