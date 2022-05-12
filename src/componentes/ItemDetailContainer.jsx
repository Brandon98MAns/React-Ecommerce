import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function getMueble(id) {
  return new Promise( (resolve, reject) => {
    setTimeout( ( ) => {
      const muebleFound = mueblesDB.find ((mueble) => {
        return id == mueble.id
      })
      resolve(muebleFound);
    }, 2000);
  });
  }

function ItemDetailContainer() {
  
    const [mueble, setMueble] = useState([]);
    const { itemid } = useParams();

    useEffect(() => {
      getMueble(itemid).then( respuestaPromise => {
        setMueble(respuestaPromise);
        });
      }, [itemid]);
    
  return (
    
    <ItemDetail mueble={mueble} />  
  )
  }
  
export default ItemDetailContainer