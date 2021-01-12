const operacion = async (num1, num2, operador) => {
    const { Calculos } = await import('./modulosTS.js')
    const instancia = new Calculos(num1, num2, operador)
    return new Promise ((resolve, reject) => {
            try {
                resolve(instancia.resultado(num1, num2))
            } catch (e) {
                reject('Something went wrong!', e)
            }
    });
};

const operaciones = async () => {
    const operacionUno = await operacion(1,2,'resta');
    const operacionDos = await operacion(2,2,'suma');
    return {'operacion de resta':operacionUno, 'operacion de suma': operacionDos}
}

operaciones().then((result)=> console.log(result));