const productos = [
    {nombre: "Monitor 24'", precio: 150000, id: "1", img: "../img/monitor01.jpg", idCat:'2'},
    {nombre: "Monitor 27'", precio: 120000, id: "2", img: "../img/monitor02.jpg", idCat:'2'},
    {nombre: "Teclado Mecanico", precio: 3000, id: "3", img: "../img/teclado01.jpg", idCat:'3'},
    {nombre: "Teclado + Mouse", precio: 2600, id: "4", img: "../img/teclado02.jpg", idCat:'3'}
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}
export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}