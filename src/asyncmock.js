const productos = [
    { id: "1", nombre: "Remera Oversize",  precio: 5500, img: "../img/remeraoversize.webp", idCat:"ropa" },
    { id: "2", nombre: "Jean Mom",  precio: 10000, img: "../img/jeanmom.jpeg", idCat:"ropa" },
    { id: "3", nombre: "Cinto Cuero",  precio: 2000, img: "../img/cintos.webp", idCat:"accs" },
    { id: "4", nombre: "Mochila",  precio: 8000, img: "../img/backpack.jpg", idCat:"accs" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria );
            resolve(productosCategoria);
        },100)
    })
}



