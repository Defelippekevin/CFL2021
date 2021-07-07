class Auto{
    private marca:string;
    private modelo:string;
    private año:number;
    private velocidadActual:number=10;;

    public constructor(marca: string, modelo:string, año:number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
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
        return this.año;
    }
}