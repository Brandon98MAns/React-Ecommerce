import ItemCount from "./ItemCount";
import {useState} from "react";
import useCartContext from "../store/CartContext";
import {Link} from "react-router-dom";

const ItemDetail = ({mueble}) => {
    
    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useCartContext();

    function onAdd(count){
        setIsInCart(true);
        addToCart(mueble, count)
        console.log("Agregado al cart: ", mueble, count);
    }
    
    if (!mueble) {
        return <h4 className="text-center text-2xl color-gray-300">Cargando . . .</h4>
    }
    else{

    return (
        <div className="xl:w-1/3 md:w-1/2 p-10">
            <div className="shadow-lg green-300 p-8 rounded-lg">
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
            <p className="leading-relaxed text-base font-mono mb-3">Categoria {mueble.categoria}</p>  
                { isInCart?
                    <Link to="/cart" className="btn btn-dark">Ir al Carrito</Link>
                :
                    <ItemCount onAdd={onAdd} stock={mueble.stock} initial={1}/>
                }   
            </div>
        </div>
    );
}
};

export default ItemDetail