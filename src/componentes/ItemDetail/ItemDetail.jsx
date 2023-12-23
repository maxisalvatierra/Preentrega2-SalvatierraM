import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {

  

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <p>Precio:{precio} </p>
        <p>ID:{id} </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ducimus nisi deleniti libero quia molestiae magnam suscipit ad cumque et praesentium est, ullam recusandae eaque nobis corporis natus repudiandae necessitatibus!</p>
        <img src={img} alt={nombre} />
        
    </div>
  )
}

export default ItemDetail