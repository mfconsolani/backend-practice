import express from 'express';


// Server set-up

const app = express();

app.use(express.json())

app.use(express.urlencoded({extendend: true}))

const memoria = null; 



// Get requests

// Listar todos los productos
app.get('/api/productos/listar', (req, res) => {

});

// Listar un producto específico

app.get('/api/productos/listar:id', (req, res) => {

});



// Post requests

// Cargar un nuevo producto

app.post('/api/productos/guardar/')



// Server Port config

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
});

server.on("Error", error => {
    console.log(`Se produjo el siguiente error al inicializar el servidor: ${error}`)
});

