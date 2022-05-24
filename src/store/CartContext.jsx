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
    const clearCart = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some( itemCart => itemCart.id ===id)
    }
    const getItemFromCart = (id) => {
        return cart.find( itemCart => itemCart.id ===id)        
    }

    //navbar
    const cantInCart = () => {
        const total = 0;
        return total;
    };

    function getTotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => totalPrice += item.cant * item.price)
        return totalPrice;
    }
    
    return(
        <Provider 
        value={{
            getTotalPrice,
             contextFunction, 
             cart, 
             addToCart, 
             removeFromCart,
             calcPriceCart,
             cantInCart,
             clearCart,
             isInCart,
             getItemFromCart
        }}>
        {children}
        </Provider>
    )
}

export default useCartContext
