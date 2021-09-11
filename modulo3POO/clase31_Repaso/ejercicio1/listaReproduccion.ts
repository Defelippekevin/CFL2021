import pistadeaudio from "./pistadeaudio";
import file from "./gestorArchivos";



export default class gestorPistas {
    private listaPistas: pistadeaudio [];
    private filetxt: file;
    private nombreLista: string;

    public constructor (nombre:string){
        this.listaPistas = []
        this.filetxt= new file();
        this.nombreLista=(nombre);
    }

    public agregarPista(titulo:string, duracion:number, interprete:string):void{
        this.listaPistas.push ( new pistadeaudio ( /* this.setID (), */titulo, duracion, interprete ));
    }

    public borrarCancion (id:number):void {
        this.listaPistas.splice (id, 1)
    }
    
    private setID (): number {
       return this.listaPistas[this.listaPistas.length].getID();
    }

    public cargarPistas(rutaArchivo:string, separador:string):void{
        let pistas:string[] = this.filetxt.LeerArchivo(rutaArchivo, separador);
        let propiedadesPista:string[] = [];
        pistas.forEach(pistasString => {
            propiedadesPista = pistasString.split(";")          
            this.listaPistas.push(new pistadeaudio (propiedadesPista[0],parseInt(propiedadesPista[1]),propiedadesPista[2]))
        });


        /* let autos:string[] = this.filetxt.LeerArchivo(rutaArchivo, separador);
        let propiedadesAuto:string[] = [];
        autos.forEach(autoString => {
            propiedadesAuto = autoString.split(";")
            this.autos.push(new Auto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],parseInt(propiedadesAuto[3])))
        }); */
    }

   

    public buscarTema(titulo:string):number {
        let id :number;
        id = -1
        for (let i=0; i<this.listaPistas.length; i++){
            if (this.listaPistas[i].getTitulo() == titulo) {
                id = this.listaPistas[i].getID();
            }
        }
        return id;
    }


    public getNombre (): string{
        return this.nombreLista;
    }

    public getDuracionTotal(): number {
        let duracionTotal:number=0;
        for (let i=0; i<this.listaPistas.length; i++){
            duracionTotal += this.listaPistas[i].getDuracion();
        }
        return duracionTotal;
    }
    
    public cantidadDeTemas ():number {
        return this.listaPistas.length;
    }

    public mostrarLista(): void{
        console.log(this.listaPistas);
    }
    
}