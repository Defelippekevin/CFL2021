import { Vehiculo } from "./Vehiculo";

export default class AutoDeportivo extends Vehiculo{

    private importado:boolean;

    constructor(marca:string,patente:string,anio:number){
        super(marca,anio,patente);
        this.importado=false;
    }

    public acelerar():void{
        this.velocidad+=70;
    }

    public getImportado():boolean{
        return this.importado;
    }

    public setImportado(importado:boolean):void{
        this.importado=importado;

    }
}