import Motor from "./Motor";

export default class Vehiculo {

    protected marca:string;
    protected modelo:string;
    protected aceleracion:number
    protected motor:Motor

    constructor(marca:string, modelo:string, aceleracion:number,motor:Motor){
        this.marca=marca;
        this.modelo=modelo;
        this.aceleracion=aceleracion;
        this.motor=motor;
    }


    public getMarca():string{
        return this.marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public getAceleracion():number{
        return this.aceleracion;
    }
    
    public getMotor():Motor{
        return this.motor;
    }

    public setMarca(marca:string):void{
        this.marca=marca
    }

    public setModelo(modelo:string):void{
        this.modelo=modelo;
    }

    public setAceleracion(aceleracion:number):void{
        this.aceleracion=aceleracion;
    }

    public setMotor(motor:Motor):void{
        this.motor=motor;
    }

    public acelerar(): void {
        this.aceleracion += 10;
        }

    public desacelerar(): void {
            this.aceleracion -= 10;
        }



}