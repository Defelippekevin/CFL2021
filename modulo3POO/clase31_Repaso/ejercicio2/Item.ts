class Item {
    private descripcion: string;
    private costo: number;
    public constructor(descripcion: string, costo: number) {
    this.descripcion = descripcion;
    this.costo = costo;
    }
    public getDescripcion(): string { return this.descripcion; } //obtengo los datos que tiene la variable descripcion
    public getCosto(): number { return this.costo; } //obtengo los datos que tiene la variable costo
    public setDescripcion(descripcion: string): void { this.descripcion = descripcion; } // le seteo un valor de tipo string a la variable descripcion
    public setCosto(costo: number): void { this.costo = costo; } // le seteo un valor de tipo number a la variable costo
    public equals(i: Item): boolean { // retorna true si coinciden la variables con lo que devuelven los metodos
    return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();
    }
}