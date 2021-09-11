export default class Alumno{

    protected id:number;
    protected nombre:string;
    protected arregloNotas: number[];

    public constructor(id:number,nombre:string){
        this.id=id;
        this.nombre=nombre;
        this.arregloNotas=[];
    }

    public getNombre():string{
        return this.nombre;
    }
    public getId():number{
        return this.id;
    }

    public getArregloNotas():number{
        return this.arregloNotas.length;
    }

    public getPromedio():number{
        let sumaNotas:number=0;
        let promedio:number=0;
        for(let i=0;i<this.arregloNotas.length;i++){
            sumaNotas+= this.arregloNotas[i];
        }
        promedio= (sumaNotas/this.arregloNotas.length);
        console.log("promedio "+promedio);
        return promedio;
    }

    public addNota(nota:number):void{
        this.arregloNotas.push(nota);
    }

    public setNotas(notas:number[]):void{
        this.arregloNotas=notas;
    }

    public getNota(pos:number):number{
        return this.arregloNotas[pos];
    }
   
    public tengoNotas():boolean{
        return this.arregloNotas.length>0;
    }
}