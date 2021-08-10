
import AutoDeportivo from "./AutoDeportivo";
import { AutoCiudad } from "./AutoCiudad";
import Camioneta from "./Camioneta";


let ad1:AutoDeportivo = new AutoDeportivo("ferrari","abc123",2021);
console.log("Datos del auto de deportivo ");
ad1.acelerar();
console.log(ad1.getVelocidadActual());
console.log(ad1.getMarca());
console.log(ad1.getAnio());
console.log(ad1.getPatente());
ad1.acelerar();
ad1.setImportado(true);
console.log("el auto es importado? "+ad1.getImportado());
ad1.setImportado(false);
console.log("el auto es importado? "+ad1.getImportado());
console.log(ad1.getVelocidadActual());


let camioneta1: Camioneta = new Camioneta("ford","def456",1998);
console.log("Datos de la camioneta ");
camioneta1.acelerar();
console.log(camioneta1.getVelocidadActual());
console.log(camioneta1.getMarca());
console.log(camioneta1.getAnio());
console.log(camioneta1.getPatente());
camioneta1.acelerar();
camioneta1.setDobleCabina(false);
console.log("la camioneta es doble cabina? "+camioneta1.getDobleCabina());
camioneta1.setDobleCabina(true);
console.log("la camioneta es doble cabina? "+camioneta1.getDobleCabina());
console.log(camioneta1.getVelocidadActual());


let ac1: AutoCiudad = new AutoCiudad("toyota","ghi789",2005);
console.log("Datos del auto de la ciudad ");
ac1.acelerar();
console.log(ac1.getVelocidadActual());
console.log(ac1.getMarca());
console.log(ac1.getAnio());
console.log(ac1.getPatente());
ac1.acelerar();
console.log(ac1.getVelocidadActual());
