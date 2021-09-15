import Vehiculos from "./Vehiculos";

export default class Auto extends Vehiculos{

    private tipo:string;

    constructor(marca:string,patente:string,modelo:string,anio:number,precio:number,capacidad:number){
        super(marca,patente,modelo,anio,precio,capacidad);
        this.tipo="camioneta";
    }

    public getTipo():string{
        return this.tipo;
    }
}