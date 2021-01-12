const operacion = async (num1: number, num2: number, operador: string): Promise<number> => {
    const { Calculos } = await import('./TSMauroConsolani.js')
    const instancia = new Calculos(num1, num2, operador)
    return new Promise ((resolve, reject) => {
            try {
                resolve(instancia.resultado())
            } catch (e: any) {
                reject(e)
            }
    });
};

const operaciones = async (): Promise<{'operacion de resta': number; 'operacion de suma': number}> => {
    const operacionUno = await operacion(1,2,'resta');
    const operacionDos = await operacion(2,2,'suma');
    return {'operacion de resta':operacionUno, 'operacion de suma': operacionDos}
}

operaciones().then((result)=> console.log(result));