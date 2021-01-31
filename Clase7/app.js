const express = require('express');

const fs = require('fs');
const { parse } = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extendend: true}))

let itemCount = 0

let itemsCount = 0

async function fileParser(fileToParse){
    const file = await fs.promises.readFile(fileToParse, 'utf-8')
    
    const parsedFile = await JSON.parse(file);
    
    return parsedFile
}

app.get('/items', async (req, res) => {

    const productos = await fileParser('./productos.txt')

    const listadoProd = {
        items: productos, 
        cantidad: productos.length
    }

    itemsCount++

    res.status(200).send(listadoProd);
})

app.get('/item-random', async (req, res) => {

    const productos = await fileParser('./productos.txt')

    const randNum = Math.ceil(Math.random() * (productos.length));

    const randItem = productos.filter(item => item.id === randNum)

    itemCount++

    res.status(200).json(randItem)
});


app.get('/visitas', (req, res) => {

    res.send({visitas: itemsCount, visita: itemCount})

})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
});