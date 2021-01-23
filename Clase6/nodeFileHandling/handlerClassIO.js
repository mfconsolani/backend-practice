const fs = require('fs');

class Archivo{
    constructor(archivo){
        this.archivo = archivo;
    }

    async readFile(){
        let contentToRead = ''
        try {
            contentToRead = await JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))
        } catch {
            contentToRead = []
        }
        console.log(contentToRead);
    }

    async saveFile(title, price, thumbnail){
        
        let evaluaArchivo = ''
        
        const contentToAdd = {
            "title": title,
            "price": price,
            "thumbnail": thumbnail
        }
        
        try {
            evaluaArchivo = await JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))
        } catch {
            evaluaArchivo = []
        }

        try {
            contentToAdd.id = evaluaArchivo.length
            evaluaArchivo.push(contentToAdd)            
            const fileToSave = await fs.promises.writeFile(
                this.archivo,
                JSON.stringify(evaluaArchivo, null, '\t')
            )
        } catch {
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

module.exports = {Archivo};
