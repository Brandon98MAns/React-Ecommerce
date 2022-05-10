import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function getMueble() {
  return new Promise( (resolve, reject) => {
    setTimeout( ( ) => {
      const muebleFound = mueblesDB.find ((mueble) => {
        return id === mueble.id
      })
      resolve(muebleFound);
    }, 2000);
  });
  }

function ItemsListContainer() {
    const [mueble, setMueble] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
      getMueble().then( respuestaPromise => {
        setMueble(respuestaPromise[0]);
      });
    }, [itemid]);

  return (
    
    <ItemDetail mueble={mueble} />  
  )
}
  

export default ItemsListContainer