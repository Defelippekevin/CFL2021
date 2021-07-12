import * as fs from 'fs' ;


export default class LectorArchivos{

    constructor(){
       
    }

    public leerArchivo(archivo:string, separador:string):string[]{
       return (fs.readFileSync(archivo,'utf8')).split(separador);
    }
}

