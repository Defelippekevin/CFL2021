class Efectivo implements PaymentMethod {
    public pay(costo: number): void {
    console.log('Se pagó ' + costo + ' empleando efectivo'); // implementa el metodo de la interface y 
    //muestra un mensaje de lo que se le pago al empleado efectivo
    }
}