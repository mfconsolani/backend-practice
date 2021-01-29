const fs = require('fs');

class Archivo{

    constructor(archivo){
        this.archivo = archivo;
    }


    async readFile(){
        let contentToRead
        try {
            contentToRead = await fs.promises.readFile(this.archivo, 'utf-8')
        } catch (e) {
            contentToRead = "[]"
        }
        console.log(contentToRead);
    }


    async saveFile(title, price, thumbnail){
        
        const contentToAdd = {
            "title": title,
            "price": price,
            "thumbnail": thumbnail
        }
        
        let evaluaArchivo
        
        try {
            evaluaArchivo = await fs.promises.readFile(this.archivo, 'utf-8')
        } catch (e) {
            evaluaArchivo = "[]"
        }
        
        evaluaArchivo = JSON.parse(evaluaArchivo)

        contentToAdd.id = evaluaArchivo.length + 1

        evaluaArchivo.push(contentToAdd)            

        try {
            const fileToSave = await fs.promises.writeFile(
                this.archivo,
                JSON.stringify(evaluaArchivo, null, '\t'))
        } catch (e) {
            console.log(`Error guardando el archivo: ${e}`)
        }
    }


    async deleteFile(){

        try {
            console.log(`Borrado del archivo ${this.archivo} en curso...`);
            const fileToDelete = await fs.promises.unlink(this.archivo);
            console.log('Archivo eliminado')
        } catch (e) {
            console.log(`Error borrando el archivo: ${e}`)
        }
    }

}

module.exports = { Archivo };
