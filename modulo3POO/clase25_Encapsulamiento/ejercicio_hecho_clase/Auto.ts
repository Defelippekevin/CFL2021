
export default class Auto{
    private patente:string;
    private marca:string;
    private modelo:string;
    private anio:number;
    private velocidadActual:number;

    public constructor(patente:string, marca: string, modelo:string, año:number){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = año;
        this.velocidadActual = 0;
    }

    public acelerar(velocidad:number): void{
        this.velocidadActual = this.velocidadActual+velocidad;
    }

    public getVelocidadActual():number{
        return this.velocidadActual;
    }

    public getMarca():string{
        return this.marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public getAño():number{
        return this.anio;
    }

    public getPatente():string{
        return this.patente;
    }

    public setPatente(patente:string):void{
        this.patente = patente;
    }
} 