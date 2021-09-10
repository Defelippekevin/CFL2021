    function sumarValores(valores: number[]): number {
        if (valores.length == 0)
        throw new Error('No se pueden sumar los valores de un arreglo vacío')
        let sumaTotal = 0;
        for (let i = 0; i < valores.length; i++)
        sumaTotal += valores[i];
        return sumaTotal;
        }


//---------------Main------------
    let valores = [];
    let resultado: number;


    try {
    resultado = sumarValores(valores);
    } catch(error) {
        console.log(error.message);
        resultado = 0;
    }
    console.log(resultado);