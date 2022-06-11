import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({mueble}) => {
    return (
    <div className="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div className="shadow-lg green-800 p-8 rounded-lg">
            <div>
                <img
                    alt={mueble.title}
                    className="image object-contain bg-placeholder h-70 rounded w-full object-center mb-8"
                    src={mueble.imgUrl}
                />
            </div>
            <p className="h-20 tracking-widest text-black font-bold text-2xl">
                {mueble.title}
            </p>
            <span className="title-font  text-green-800">
                <h2 className="mb-4">${mueble.price}</h2>
            </span> 
            <p className="leading-relaxed text-base font-mono">Categoria {mueble.categoria}</p>
            <Link to={`/mueble/${mueble.id}`}>
            <button className="text-indigo-700 inline-flex items-center mt-5 btn btn-outline">
                    Ver mas
            </button>
            </Link>
        </div>
    </div>
    )
}

export default Item


