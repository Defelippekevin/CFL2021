import * as fs from 'fs' ;


export default class LectorArchivos{

   private arregloString:string[];
    

    constructor (archivo:string, separador:string){
       this.arregloString=(fs.readFileSync(archivo,'utf8')).split(separador);
    }

    public getArchivo():string[]{
        return this.arregloString;

    }

    
}