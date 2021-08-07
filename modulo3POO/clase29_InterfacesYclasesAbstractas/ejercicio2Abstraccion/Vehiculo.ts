export abstract class Vehiculo {

    protected marca:string;
    protected anio:number;
    protected patente:string;
    protected velocidad:number;



    constructor(marca:string,anio:number,patente:string) {
        this.velocidad=0;
        this.marca=marca;
        this.anio=anio;
        this.patente=patente;
        
    }

    public getMarca(): string {
        return this.marca
    }

    public getPatente(): string {

        return this.patente;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getVelocidadActual(): number {
        return this.velocidad;
    }


    public setMarca(marca:string):void{
        this.marca= marca;
    }

    public setAnio(anio:number):void{
        this.anio= anio;
    }

    public setPatente(patente:string):void{
        this.patente= patente;
    }



    abstract acelerar():void;

}