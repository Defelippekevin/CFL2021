import Vehiculo from "./Vehiculo";
import Motor from "./Motor";


export default class Auto extends Vehiculo{

    constructor(marca:string, modelo:string, aceleracion:number,motor:Motor){
        super(marca,modelo,aceleracion,motor);

    }

    public acelerar(): void {
        this.aceleracion += 60;
        }

    public desacelerar(): void {
            this.aceleracion -= 60;
        }
}