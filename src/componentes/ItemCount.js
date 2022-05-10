import React, { useState } from 'react';

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
    
    <div>
        <h1 className="sm:text- 3xl text 2x1 font-bold title-font-mb">Tu carrito</h1>
        <div>
            <button onClick={handleResta}>-</button>
            <span>  {count}  </span>
            <button onClick={handleAdd}>+</button>
        </div>  
        <div>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    </div>
  )
}
export default ItemCount