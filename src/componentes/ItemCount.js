import React, { useState } from 'react';

function ItemCount() {
    const [count, setCount] = useState(0);

    function handleSuma(){
        setCount(count + 1);
    }
    function handleResta(){
        setCount(count - 1);
    } 

  return (
    
    <div>
        <h1 className="sm:text- 3xl text 2x1 font-bold title-font-mb">Tu carrito</h1>
        <div>
            <button onClick={handleResta}>-</button>
            <span>  {count}  </span>
            <button onClick={handleSuma}>+</button>
        </div>  
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}
export default ItemCount