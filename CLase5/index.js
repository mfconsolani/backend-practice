// https://sleet-understood-sky.glitch.me/

var http = require('http');

var server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        id: Math.ceil(Math.random()*10),
        title: "Producto " + Math.ceil(Math.random()*10),
        price: (Math.random()*1000).toFixed(2),
        thumbnail: "Foto " + Math.ceil(Math.random()*10) 
    }));
});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`server listining at port ${PORT}`));