import Telefono from './telefono'

//clase TelefonoConCamara, hereda los atributos y metodos de la clase Telefono, y se agregan metodos propios de esta clase
export  default class TelefonoConCamara extends Telefono {

    constructor() {
        super();
    }


    public sacarFoto(click: boolean): string {

        let imagen: string;
        if (click == true) {
            console.log("taking photo");
            imagen = "Imagen.jpg";
            this.bateriaActual -=10;
            return imagen;
        }

    }

}