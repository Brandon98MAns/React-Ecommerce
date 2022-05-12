import { createContext } from "react";
import {useContext, useState} from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        const newItem = {...item, cant};
        setCart([...cart, newItem]);
    }
    const removeFromCart = (id) => {
        const newCart = [...cart, id];
        const cartFilter = newCart.filter( item =>{
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const contextFunction = () => console.log("Contexto Listo")

    return(
        <Provider value={ { contextFunction, cart, addToCart, removeFromCart } }>
        {children}
        </Provider>
    )
}

export default CartContext
