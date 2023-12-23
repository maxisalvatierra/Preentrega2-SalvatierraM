import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras"/>
        <strong className="numeroCarrito"> 5 </strong>
    </div>


  )
}

export default CartWidget