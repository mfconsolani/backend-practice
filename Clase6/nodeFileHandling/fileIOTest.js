const { Archivo } = require('./handlerClassIO');

const testOne = new Archivo('./archivodeprueba.txt')

// Leyendo archivo inexistente
setTimeout(() => testOne.readFile(), 1000)

// Agregando dos productos al archivo

setTimeout(() => testOne.saveFile('Iphone 6', 700, 11), 2000);

setTimeout(() => testOne.saveFile('Lenovo Thinkpad T14', 1400, 121), 3000);

// Leyendo archivo con 2 items
setTimeout(() => testOne.readFile(), 6000)

// Borrando archivo 

setTimeout(() => testOne.deleteFile(), 10000);
