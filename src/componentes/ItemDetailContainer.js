import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemDetail from './ItemDetail';

function getMueble() {
  return new Promise( (resolve, reject) => {
    setTimeout( ( ) => {
      resolve(mueblesDB);
    }, 2000);
  });
  }

function ItemsListContainer() {
    const [mueble, setMueble] = useState([]);

    useEffect(() => {
      getMueble().then( respuestaPromise => {
        setMueble(respuestaPromise[0]);
      });
    }, []);

  return (
    
    <ItemDetail mueble={mueble} />  
  )
}
  

export default ItemsListContainer