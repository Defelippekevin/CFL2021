export default class Vehiculos{
    private marca:string;
    private patente:string;
    private modelo:string;
    private anio:number;
    private precio:number;
    private capacidad:number;


    constructor(marca:string,patente:string,modelo:string,anio:number,precio:number,capacidad:number){
        this.marca=marca;
        this.patente=patente;
        this.modelo=modelo;
        this.anio=anio;
        this.precio=precio;
        this.capacidad=capacidad;
    }

    public getMarca():string{
        return this.marca;
    }
    public getPatente():string{
        return this.patente;
    }

    public getModelo():string{
        return this.modelo;
    }
    
    public getAnio():number{
        return this.anio;
    }

    public getPrecio():number{
        return this.precio;
    }

    public getCapacidad():number{
        return this.capacidad;
    }
}