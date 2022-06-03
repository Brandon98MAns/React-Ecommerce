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
                name: "Brandon Mansfield",
                phone: "(+54) 1123-4698",
                email: "Brandon@ejemplo.com",
            },
            items: itemsToBuy,
            date: new Date(),
            total: getTotalPrice(),
        }
        createBuyOrder(buyOrder).then((respuesta) => 
            console.log("respuesta desde react: ", respuesta)
            ).finally( ()=> clearCart());
        clearCart();
}
    
    if (cart.length === 0) {
        return <div style={{textAlign: "center"}}>
        <p>Su Carrito esta vacio. Comienze a comprar!</p><br></br>
        <a href ="/" className="btn btn-dark">Ver Catalogo</a>
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
                    <button onClick={()=> removeFromCart(itemCart.id)} className="btn btn-dark">Remover Producto</button>
                   
                    <hr/><br/>
                </div>
            })}
            <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
            <button className="btn btn-primary" onClick={handleBuy}>Comprar</button>
        </div>
    }
}
 
export default CartView;
