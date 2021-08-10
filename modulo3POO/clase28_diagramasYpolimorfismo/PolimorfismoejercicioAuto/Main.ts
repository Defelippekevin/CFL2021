import Auto from './Auto';
import AutoDeportivo from './AutoDeportivo';


let primerAuto: Auto = new Auto('Ford', 2020);
let superAuto: Auto = new AutoDeportivo('Ford', 2021);
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);

primerAuto.mejorarModelo();
console.log(primerAuto);

