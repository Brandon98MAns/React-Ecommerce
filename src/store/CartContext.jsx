import { createContext } from "react";
import {useContext} from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

export function CartContextProvider ({children}) {

    const contextFunction = () => console.log("contexto listo");

    return(
        <Provider value={ { contextFunction } }>
        {children}
        </Provider>
    )
}

export default CartContext
