const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extendend: true})))

app.get('/items', (res, req) => {

    
})


const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
});