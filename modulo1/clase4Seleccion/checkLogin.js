let readlineSync = require("readline-sync");

let usuarioGuardado= "juan";
let contraseniaaGuardada= "claveJuan";

let usuario= readlineSync.question('ingrese su usuario ');
console.log(" el usuario que ud ingreso es: "+usuario);

let contrasenia= readlineSync.question('ingrese su contrasenia: ');
console.log(" la contraseña que ud ingreso es: "+contrasenia);



if(( usuario== usuarioGuardado) &&  (contrasenia==contraseniaaGuardada)){
    console.log("ingreasado con exito");
    }else
    console.log("usted ingreso mal sus datos");

 
    
if (( usuario==usuarioGuardado) && (contrasenia!=contraseniaaGuardada)){
            console.log(" contraseña incorrecta");
    }else{
        console.log(" usuario incorrecta");
    }



