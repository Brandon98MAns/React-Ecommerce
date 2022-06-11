import React, { useState } from 'react';
import {Link} from "react-router-dom";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        if (count < props.stock) setCount(count + 1);
    }
    function handleResta(){
        if (count > 1) setCount(count - 1);
    } 
    function handleClick(){
        props.onAdd(count);
    }

  return (
    
    <div className="border-4 p-5 rounded-xl">
        <h1 className="mb-5 font-bold">Unidades</h1>
        <div>
            <button className="btn btn-outline" onClick={handleResta}> - </button>
            <span className="ml-5 mr-5">{count}</span>
            <button className="btn btn-outline" onClick={handleAdd}> + </button>
        </div>  
        <div>
            <button className="btn btn-ghost-primary mt-5" onClick={handleClick}>Agregar al carrito</button>
            <Link to="/" className="btn btn-outline mt-5">Seguir Comprando</Link>
        </div>
    </div>
  )
}
export default ItemCount