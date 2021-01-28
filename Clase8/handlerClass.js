class Requests {
    constructor();

    displayAll(database, response){
        database.length ? res.json(database) : response.status(404).json({ error: 'no hay productos cargados' })
    }

    displayOne(){

    }

    saveProduct(){

    }
};

module.exports = { Requests }