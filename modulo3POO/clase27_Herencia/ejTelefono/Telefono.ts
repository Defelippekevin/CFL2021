import * as RLS from 'readline-sync';

export default class Telefono{
    protected estaPrendido:boolean;
    protected bateriaActual:number;

    constructor() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }


    public mandarMensaje():void{
        

        
    }

    public prenderApagar(): void {

        if (this.estaPrendido) {
            this.estaPrendido = false
        }
        else {
            this.estaPrendido = true
        }
    }

    public verBateriaActual(): number {
        return this.bateriaActual;
    }


}