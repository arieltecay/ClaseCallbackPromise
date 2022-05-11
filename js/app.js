// Funcionamiento de un callback
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']

function nuevoMes(mes, cb) {
    setTimeout(() => {
        meses.push(mes)
        cb()
    }, 3000)
}

function mostrarMeses() {
    setTimeout(() => {
        meses.forEach(mes => { console.log(mes) })
        console.log('----------------------');
    }, 3000)
}

mostrarMeses()
nuevoMes('Mayo', mostrarMeses)
/* console.log(meses); */