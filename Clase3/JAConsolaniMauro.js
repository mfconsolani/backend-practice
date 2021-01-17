const wordCounter = (array) => {
    const wordQuantity = array.length;
    return `Proceso completo - Total de palabras: ${wordQuantity}`
} 

const textReader = (textToRead, interval=1000, firstCallback, secondCallback=null) => {
    const parsedArray = textToRead.split(' ')
    let i = 0;
    let textReader = setInterval(() => {
            if (i < parsedArray.length) {
                console.log(parsedArray[i])
                i++
            } else {
                clearInterval(textReader)
                console.log(firstCallback(parsedArray)); 
                secondCallback ? secondCallback() : null
                return 
            }
        }, interval);
    return 
}

const test = () => textReader('1er texto: soy el primer texto de la prueba', 500, wordCounter, 
    () => textReader('2do texto: voy segundo, y soy mas extenso que el anterior', 500, wordCounter, 
    () => textReader('3ro: cortito como patada de piojo', 500, wordCounter)));

test(); 