import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getItem as getMueble } from "../data";

function ItemDetailContainer() {
  
    const [mueble, setMueble] = useState([]);
    const { itemid } = useParams();

    useEffect(() => {
      getMueble(itemid).then(( respuestaPromise) => {
        setMueble(respuestaPromise);
        });
      }, [itemid]);
    
  return (
    
    <ItemDetail mueble={mueble} />  
  )
  }
  
export default ItemDetailContainer