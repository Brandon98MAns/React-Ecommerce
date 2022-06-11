import React from "react";
import useCartContext from '../store/CartContext';
import {Link} from "react-router-dom";


function IconoCarrito (){
  const {calcPriceCart} = useCartContext();

  return (
    
    <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
      
        <div className="button">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        
      </label>
      <div tabindex="0" className=" card card-compact dropdown-content w-60 bg-base-60 shadow">
        <div className="card-body ">
          <div className="card-actions">
            <Link  className=" btn-block btn btn-outline" to="/Cart" alt={"btn btn-danger"}>ir al carrito</Link> 
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}
export default IconoCarrito