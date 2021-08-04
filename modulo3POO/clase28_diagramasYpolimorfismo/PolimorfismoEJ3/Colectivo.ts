import Vehiculo from "./Vehiculo";
import Motor from "./Motor";


export default class Colectivo extends Vehiculo{

    constructor(marca:string, modelo:string, aceleracion:number,motor:Motor){
        super(marca,modelo,aceleracion,motor);

    }

    public acelerar(): void {
        this.aceleracion += 25;
        }

    public desacelerar(): void {
            this.aceleracion -= 25;
        }
}