import Secador from "./Secador";
import SecadorPelo from "./SecadorPelo";
import SecadorPiso from "./SecadorPiso";


let secadorComun: Secador = new Secador("sony","2020",40);
let secadopelo: SecadorPelo = new SecadorPelo("philips","2017",50);
let secadorpiso:SecadorPiso= new SecadorPiso("panasonic","2018",70);

console.log(secadorComun);

console.log(secadorComun.getMarca());
console.log(secadorComun.getModelo());
console.log(secadorComun.getPotencia());
secadorComun.aumentarPotencia();
console.log(secadorComun.getPotencia());
secadorComun.disminuirPotencia();
console.log(secadorComun.getPotencia());
secadorComun.secar(true);


console.log(secadopelo);
console.log(secadopelo.getMarca());
console.log(secadopelo.getModelo());
console.log(secadopelo.getPotencia());
secadopelo.aumentarPotencia();
console.log( secadopelo.getPotencia());
secadopelo.disminuirPotencia();
console.log(secadopelo.getPotencia());
secadopelo.secar(true);







