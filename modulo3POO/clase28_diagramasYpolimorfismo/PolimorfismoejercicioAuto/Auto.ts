export default class Auto{
    private marca: string;
    protected modelo: number;
    protected velocidadActual: number;


    public constructor(marca: string, modelo: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
        }

        public acelerar(): void {
            this.velocidadActual += 10;
            }

            public mejorarModelo():void{

                this.modelo = this.modelo + 20;
            }

           

}