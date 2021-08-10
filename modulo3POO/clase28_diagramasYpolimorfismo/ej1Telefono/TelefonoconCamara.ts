import Camara from "./Camara";
import Telefono from "./Telefono";

export default class TelefonoConCamara extends Telefono {

    private camara: Camara;

    constructor() {
        super();
        this.camara = new Camara();
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
    }

    public encenderLinterna():void{
        this.linternaPrendida=true;        
    }

}
let telCamara:TelefonoConCamara= new TelefonoConCamara();

telCamara.sacarFoto();
console.log(telCamara);
telCamara.encenderLinterna();
console.log(telCamara);



