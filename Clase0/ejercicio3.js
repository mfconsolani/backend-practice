const calendar = {
    meses: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 
        'Mayo', 'Junio', 'Julio', 'Agosto', 
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' 
    ], mostrarMeses(array){
        array.forEach(element => {
            console.log(element)
        });
    }, getNumeroMes(mes, meses){
        const mesLower = mes.toLowerCase();
        const mesesLower = meses.map(mes => mes.toLowerCase());
        const index = mesesLower.indexOf(mesLower) + 1
        return index
    }, getLetrasMes(array){
        return array.map(element => element[0]).join('');
    }
}

calendar.mostrarMeses(calendar.meses);
console.log(calendar.getNumeroMes('noviembre', calendar.meses));
console.log(calendar.getLetrasMes(calendar.meses));