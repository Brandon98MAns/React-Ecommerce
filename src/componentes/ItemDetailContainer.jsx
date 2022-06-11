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
    <div >
    <div style={{marginTop: 0 }}  className="border-4 bg-gray-50">
      <div className="flex flex-col text-center w-full mb-12">
        <p className="font-bold m-10 text-4xl">Diseñado para Vos!</p>
      </div>
    </div>
    <ItemDetail mueble={mueble} /> 
    </div>      
  )
  }
  
export default ItemDetailContainer