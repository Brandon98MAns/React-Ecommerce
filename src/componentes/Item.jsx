import React from 'react'
import { Link } from 'react-router-dom'
/*import muebles from '../data/muebles'*/

function Item ({mueble}) {
    return (
        <div>
            <h1>{mueble.title}</h1>
            <img src={mueble.imgUrl}></img>
            <small>{mueble.categoría}</small>
            <p>{mueble.price}</p>

            <Link to={`/mueble/${mueble.id}`}>
                <button className="btn btn-primary">Ver mas</button>
            </Link>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Item


