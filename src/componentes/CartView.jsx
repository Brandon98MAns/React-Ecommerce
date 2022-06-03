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
        return (

  
    <div className="container p-8 mx-auto mt-12 bg-white">
      <div className="w-full overflow-x-auto">
        <div style={{alignItems: "center"}} className="my-2">
          <h3 style={{width: 400, border:"outset", margin:"auto"}} className="h-15 bc-black text-3xl font-bold tracking-wider">Resumen de Compra</h3>
        </div>
        <table className="w-full shadow-inner border-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-bold whitespace-nowrap">Producto</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Cantidad</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Precio</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">Iphone 13</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button className="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="1"
                    className="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button className="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">$1,300</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap"></td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div className="font-bold">itemCart.cant</div>
              </td>
              <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                Total - formula itemcart
              </td>
              
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4 space-x-2">
        <button className="btn btn-outline" onClick={clearCart}>Vaciar Carrito</button>
        <button className="btn btn-primary" onClick={handleBuy}>Finalizar Comprar</button>
        </div>
      </div>
    </div>)
  

       /*<div>
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
            <button className="btn btn-primary" onClick={handleBuy}>Finalizar Comprar</button>
        </div>*/
    }
}
 
export default CartView;
