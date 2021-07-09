export default class Decodificador{

    private volumenActual:number;
    private canalActual:number;

    constructor(volume: number, canal: number) {
        this.volumenActual = volume;
        this.canalActual = canal;
    }
    //mostramos el canal 
    public getCanal():number{
        return this.canalActual
    }
    public setCanal(actalCanal:number){
        this.canalActual=actalCanal;
    }
    //mostramos el volumen 
    public getVolumen():number{
        return this.volumenActual;
    }
    
    public setVolumen(actualVolumen:number){
        this.volumenActual=actualVolumen;
    }

    public subirCanal():void{
        this.canalActual= this.canalActual+1;
    }

    public bajarCanal():void{
        this.canalActual= this.canalActual-1;
    }

    public subirVolumen():void{
        this.volumenActual= this.volumenActual+1;
    }
    public bajarVolumen():void{
        this.volumenActual= this.volumenActual-1;
    }

}