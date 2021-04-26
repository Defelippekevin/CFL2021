let readlineSync = require("readline-sync");

let letra= readlineSync.question('ingrese una letra ');


switch(letra){
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log( " su letra es vocal");
        break;
    default:
        console(" es consonante");
        
}