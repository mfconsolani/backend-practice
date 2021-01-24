const { Archivo } = require('./handlerClassIO');

const testOne = new Archivo('./archivodeprueba.txt')

// Leyendo archivo inexistente
setTimeout(() => {
    console.log('Leyendo productos disponibles')
    testOne.readFile()
}, 1000)

// Agregando dos productos al archivo

setTimeout(() => {
    console.log('Guardando 1er producto')
    testOne.saveFile('Iphone 6', 700, 'url/a/Iphone6Modelo-2020-u-otro')
}, 2000);

setTimeout(() => {
    console.log('Guardando 2do producto')
    testOne.saveFile('Lenovo Thinkpad T14', 1400, 'url/a/LenovoThinkpadT14')
}, 3000);

// Leyendo archivo con 2 items
setTimeout(() => {
    console.log('Leyendo productos disponibles')
    testOne.readFile()
}, 6000)

// Borrando archivo 
setTimeout(() => testOne.deleteFile(), 10000);
