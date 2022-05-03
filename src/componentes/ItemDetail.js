function ItemDetail ({mueble}) {
    return (
        <div>
            <h1>{mueble.title}</h1>
            <img src={mueble.imgUrl}></img>
            <small>{mueble.categoría}</small>
            <p>{mueble.price}</p>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default ItemDetail