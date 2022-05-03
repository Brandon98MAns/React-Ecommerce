import React from 'react'
import mubles from '../data/muebles'

function Item ({mueble}) {
    return (
        <div>
            <h1>{mueble.title}</h1>
            <small>{mueble.categoría}</small>
            <p>{mueble.price}</p>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Item


