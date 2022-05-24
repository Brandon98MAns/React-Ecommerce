import React  from 'react'
import useCartContext from '../store/CartContext';
import {createBuyOrder} from '../data';

function CartView() {
    const { cart, removeFromCart, clearCart, getTotalPrice } = useCartContext();

function handleBuy(){
    const itemsToBuy = cart.map((item) => ({ 
        title: item.title,
        cant: item.cant,
        price: item.price,
        id: item.id,
        }
))

    const buyOrder = {
            buyer: {
                name: "Brandon",
                phone: "1234698",
                email: "Brandon@ejemplo.com",
            },
            items: itemsToBuy,
            date: new Date(),
            total: getTotalPrice(),
        }
        createBuyOrder(buyOrder);
        clearCart();
}
    
    if (cart.length === 0) {
        return <div style={{textAlign: "center"}}>
        <h4>Su Carrito esta vacio. Comienze a comprar!</h4>
        <a href ="/">Ver Catalogo</a>
        </div>
    }
    else {
        return <div>
            {cart.map( itemCart => {
                return <div style={{textAlign:"center"}} key={itemCart.id}>
                    <br/>
                    <h2>{itemCart.title}</h2>
                    <h2>{itemCart.cant}</h2>
                    <h2>${itemCart.cant * itemCart.price}</h2>
                    <button onClick={()=> removeFromCart(itemCart.id)} style={{ color: "red"}}>X</button>
                    <hr/><br/>
                </div>
            })}
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={handleBuy}>Comprar</button>
        </div>
    }
}
 
export default CartView;
