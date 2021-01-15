const wordCounter = (array) => {
    const wordQuantity = array.length;
    return `Proceso completo - Total de palabras: ${wordQuantity}`

} 

const textReader = (textToRead, interval=1000, callback) => {
    const parsedArray = textToRead.split(' ')
    let i = 0;
    let textReader = setInterval(() => {
            if (i < parsedArray.length) {
                console.log(parsedArray[i])
                i++
            } else {
                clearInterval(textReader)
                return console.log(callback(parsedArray)); 
            }
        }, interval);
    return {arrayLength: parsedArray.length, intervalo: interval}
}

const testFunction = () => {
    const testOne = textReader('Hola wacho que tal?', 500, wordCounter);
    const testTwo = setTimeout(()=> textReader(
        'Este texto es mas largo que el anterior', 
        500, 
        wordCounter), testOne.arrayLength*testOne.intervalo+testOne.intervalo);
    const testThree = setTimeout(()=>textReader(
        'Aun mas largo que el anterior, solo no se que poner', 
        500, 
        wordCounter), 500*14);
    return
};


testFunction();

// const testOne = textReader('Hola wacho que tal?', 500, wordCounter);

// setTimeout(()=> textReader(
//     'Este texto es mas largo que el anterior', 
//     500, 
//     wordCounter), testOne.arrayLength*testOne.intervalo+testOne.intervalo)



// función que permita recorrer un texto que se le pase como parámetro 

// y muestre cada una de sus palabras en un tiempo estipulado. --> setInterval? setTimeout?
// slice()?

// Al finalizar debe ejecutar una función que se le pasa como callback.


const llamadaATextReader = ''

// Realizar tres llamadas a la función con porciones de texto que tienen que ser 
//representados en forma ordenada. Inicialmente todas las palabras del primero, 
// luego las del segundo y finalmente las del tercero. 

// Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional. 
//Si este no se define será cada un segundo.

//Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y 
//también mostrar la cantidad de palabras totales.
