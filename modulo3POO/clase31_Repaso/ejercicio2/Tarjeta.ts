class Tarjeta implements PaymentMethod {
    public pay(costo: number): void {
    console.log('Se pagó ' + costo + ' empleando tarjeta');
    // implementa el metodo de la interface y 
    //muestra un mensaje de lo que se le pago al empleado tarjeta
    }
}