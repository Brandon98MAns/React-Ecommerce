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
        <h1 className="sm:text- 3xl text 2x1 font-bold title-font-mb">Unidades</h1>
        <div>
            <button className="btn btn-ghost" onClick={handleResta}> - </button>
            <span>  {count}  </span>
            <button className="btn btn-ghost" onClick={handleAdd}> + </button>
        </div>  
        <div>
            <button className="btn btn-ghost-primary title-font-mb" onClick={handleClick}>Agregar al carrito</button>
        </div>
    </div>
  )
}
export default ItemCount