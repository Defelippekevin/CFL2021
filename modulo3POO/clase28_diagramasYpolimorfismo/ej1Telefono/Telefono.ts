export default class Telefono {

    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }


    public mandarMensaje(cel:number, msj:string): boolean {
        console.log("este metodo se llama mandarMensaje y ejecuta desde la clase telefono");
        return true;
    }


    public hacerLlamada(): void {
        console.log("este metodo se llama hacerLlamada y ejecuta desde la clase telefono");

    }


    public prenderApagar(): void {
        console.log("este metodo se llama prenderApagar y ejecuta desde la clase telefono");
    }

    public verEstado():void{
        console.log(this.estaPrendido);
    }

}