import ItemCount from "./ItemCount";
import {useState} from "react";
import useCartContext from "../store/CartContext";

const ItemDetail = ({mueble}) => {
    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useCartContext();

    function onAdd(count){
        setIsInCart(true);
        addToCart(mueble, count)
        console.log("Agregado al cart: ", mueble, count);
    }

    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div clasName="shadow-lg bg/gray-100 p-6 rounded-lg">
                <div>
                    <img
                        alt={mueble.title}
                        className="image object-contain bg-placeholder h-60 rounded w-full"
                        src={mueble.imgUrl}>
                    </img>
                </div>
                <h3 className="h-20 tracking-widest text-green-600 font-bold title-font">
                    {mueble.title}
                </h3>
                <span className="title-font font-medium text-2x1 text-gray-900">
                    <h2 className="mb-4">${mueble.price}</h2>
                </span> 
                <p className="leading-relaxed text-base">{mueble.categoría}</p>  
                {isInCart?
                    <button>Ver carrito</button>
                :
                    <ItemCount onAdd={onAdd} stock={mueble.stock} initial={1}/>
                }       
            </div>
        </div>
    )
}

export default ItemDetail