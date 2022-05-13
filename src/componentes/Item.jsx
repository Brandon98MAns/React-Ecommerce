import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({mueble}) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg green-300 p-6 rounded-lg">
            <h1>{mueble.title}</h1>
            <img src={mueble.imgUrl}></img>
            <small>{mueble.categoria}</small>
            <p>{mueble.price}</p>

            <Link to={`/mueble/${mueble.id}`}>
                <button className="text-indigo-500 inline-flex items-center mt-3">
                    Ver mas
                </button>
            </Link>
            <br></br>
            <hr></hr>
            </div>
        </div>
    )
}

export default Item


