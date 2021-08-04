import Auto from "./Auto";

  export default  class AutoDeportivo extends Auto {
        public constructor(marca: string, modelo: number) {
        super(marca, modelo);
        }
        
      public acelerar(): void {
        this.velocidadActual += 50;
      }

      public mejorarModelo():void{
          this.modelo= this.modelo + 50;
      }


}