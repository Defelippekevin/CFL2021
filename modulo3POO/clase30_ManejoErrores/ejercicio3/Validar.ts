
export default abstract class Validar{

public  static checkNumero(dato: any):number {
    let numero: number;
    try { //TODA LA FUNCION ESTA DENTRO DE UN BLOQUE TRY/CATCH
        if (dato === '') { //PRIMER CONTROL: QUE NO SEA VACIO
            throw new Error('El valor ingresado es vacio'); //SI ES VACIO DISPARO ESE ERROR PARA QUE ME LO TOME EL CATCH
        } else {
            for (let i = 0; i < dato.length; i++) { //SI NO ES VACIO LE EJECUTO PARSEINT UNO POR UNO O SEA CIFRA POR CIFRA O LETRA POR LETRA
                numero = parseInt(dato[i]);
                if (isNaN(numero))  //EL PARSEINT ME RESPONDE NAN (NOT A NUMBER) CUANDO ENCUENTRA UNA LETRA Y ESO YA HACE QUE dato NO SEA VALIDO
                    throw new Error('Ha ingresado un valor no valido'); // DISPARO OTRO ERROR INDICANDO EL CASO
            }
        }
        numero = parseInt(dato); // UNA VEZ QUE SE QUE TODO LO QUE TIENE dato ES UN NUMERO, LE VUELVO A EJECUTAR PARSEINT PARA RETORNAR UN VALOR DE TIPO NUMBER
        return numero;
    } catch (err) {
        throw new Error(` error de validacion ${err.message}` );
        //console.log(err.message); // ACA MANDO A CONSOLA EL ERROR QUE ME SURGIO EN CADA CASO
        //return undefined;
    }
 }
}