const aplicarDescuento = new Promise((resolve, reject) => {
    const dto = true
    if (dto) {
        resolve('Descuento aplicado')
    } else {
        reject('Descuento no aplicado')
    }
})
/* Segundo metodo */
const insertParagraph = (res) => {
    const $h1 = document.querySelector("body > h1")
    const $p = document.createElement("p");
    $p.id = "p-message";
    $p.textContent = `Se realizo ${res}`;
    $h1.insertAdjacentElement("afterend", $p);
}


aplicarDescuento
    .then(res => {
        insertParagraph(res)
    })
    .catch(error => {
        insertParagraph(error);

    })


/*
Primer Metodo
function mostrarHTML(texto) {
    const aviso = document.querySelector("#promesa")
    const parrafo = document.createElement('p')
    parrafo.textContent = texto
    aviso.appendChild(parrafo)
} */

/* Crear con Javascript un código para que se pueda mostrar en el DOM la info que devuelve la promesa */


/* console.log(aplicarDescuento);*/

//Existen 3 estados de las promesas
/* 
fulfilled -> Cuando la promesa se cumplió
rejected -> Cuando la promesa no se cumplió
pending -> Cuando queda en pendiente
*/