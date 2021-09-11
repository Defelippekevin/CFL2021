import Telefono from "./Telefono";


class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number;

    public constructor(frecuenciaActual:number){
        super();
        this.frecuenciaActual=frecuenciaActual;
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;

    }
}