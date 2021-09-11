class Cuenta {
    private lineItems: Item[] = []; // creo un arreglo de lineitems
    public addLineItem(lineItem: Item): void { // cargo el arreglo de lineItems
    this.lineItems.push(lineItem);
    }
    public removeLineItem(lineItem: Item): void { // recorre el arreglo y pregunta si lo que pasa por parametro 
    for (let i = 0; i < this.lineItems.length; i++) { // esta en el arreglo, si esta lo borra
    if (this.lineItems[i].equals(lineItem))
    this.lineItems.splice(i, 1);
    }
    }
    public getCostInCents(): number { //devuelve el total a pagar
    return this.lineItems
    .map(item => item.getCosto())
    .reduce((a, b) => a + b, 0);
    }
    public pay(method: PaymentMethod): void { // metodo que devuelve cuanto tenes que pagar
    method.pay(this.getCostInCents());
    }
}