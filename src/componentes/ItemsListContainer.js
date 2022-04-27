import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemList from './ItemList';

function getMuebles() {
  return new Promise( (resolve, reject) => {
    setTimeout( ( ) => {
      resolve(mueblesDB);
    }, 2000);
  });
  }

function ItemsListContainer(props) {
    const [muebles, setMuebles] = useState([]);

    useEffect(() => {
      getMuebles().then( respuestaPromise => {
        setMuebles(respuestaPromise);
      });
    }, []);

  return (
    <div>
    <h1>{props.titulo}</h1>
    <ItemList muebles={muebles} />
    </div>
  )
}

export default ItemsListContainer
