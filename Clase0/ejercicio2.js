var valores = [true, 5, false, "hola", "adios", 2];

const longerString = (arr) => {
    const word = arr.reduce((longest, currentWord) => {
        if (typeof currentWord === 'string' && currentWord.length > longest.length){
            return currentWord
        } else {
            return longest
        } 
    }, "")
    return word
};

console.log(longerString(valores))

const indexForFalse = arr => {
    index = arr.findIndex(item => item === false)
    return index
}

console.log(indexForFalse(valores));


const mathOp = (arr, operator) => {
    arrOfNumbers = arr.filter(item => typeof item === 'number');
    switch(operator){
        case 'suma':
            return arrOfNumbers[0] + arrOfNumbers[1] 
        case 'resta':
            return arrOfNumbers[0] - arrOfNumbers[1] 
        case 'mult':
            return arrOfNumbers[0] * arrOfNumbers[1] 
        case 'div':
            return arrOfNumbers[1] <= 0 || arrOfNumbers[0] <= 0  ? 'cant divide on 0' : arrOfNumbers[0] / arrOfNumbers[1] 
    }
}

console.log(mathOp(valores, 'suma'));
console.log(mathOp(valores, 'resta'));
console.log(mathOp(valores, 'mult'));
console.log(mathOp(valores, 'div'));
