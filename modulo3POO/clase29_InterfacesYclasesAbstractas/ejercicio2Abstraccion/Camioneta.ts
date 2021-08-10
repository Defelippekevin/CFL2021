import { Vehiculo } from "./Vehiculo";

export default class Camioneta extends Vehiculo{
    private largo:number;
    private dobleCabina:boolean;

    constructor(marca:string,patente:string,anio:number){
        super(marca,anio,patente);
        this.dobleCabina=false;
        this.largo=2;
    }

    public acelerar():void{
        this.velocidad+=40;
    }

    public getLargo():number{
        return this.largo;
    }

    public setLargo(largo:number){
        this.largo=largo;
    }

    public getDobleCabina():boolean{
        return this.dobleCabina;
    }

    public setDobleCabina(dobleCabina:boolean){
        this.dobleCabina=dobleCabina;
    }
}