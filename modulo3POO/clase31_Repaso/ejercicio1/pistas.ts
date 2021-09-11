export default interface Pista {
    getID():number;
    getTitulo(id:number): string;
    getDuracion(id:number):number;
    getInterprete(id:number):string; 
}