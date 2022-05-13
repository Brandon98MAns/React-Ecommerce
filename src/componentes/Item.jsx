import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({mueble}) => {
    return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="shadow-lg green-300 p-6 rounded-lg">
            <div>
                <img
                    alt={mueble.title}
                    className="image object-contain bg-placeholder h-60 rounded w-full object-center mb-6"
                    src={mueble.imgUrl}
                />
            </div>
            <h3 className="h-20 tracking-widest text-black font-bold title-font">
                {mueble.title}
            </h3>
            <span className="title-font font-medium text-2x1 text-green-800">
                <h2 className="mb-4">{mueble.price}</h2>
            </span> 
            <p className="leading-relaxed text-base">{mueble.categoria}</p>
            <Link to={`/mueble/${mueble.id}`}>
            <button className="text-indigo-500 inline-flex items-center mt-3">
                    Ver mas
            </button>
            </Link>
        </div>
    </div>
    )
}

export default Item


