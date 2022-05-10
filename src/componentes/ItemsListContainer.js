import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getMuebles() {
  return new Promise( (resolve, reject) => {
    setTimeout( ( ) => {
      if (categoríaid !== undefined) {
         const arrayFiltered = mueblesDB.filter ((mueble) => {
          return mueble.categoría === categoríaid;
         });
         resolve (arrayFiltered);
      }
      else {
      resolve(mueblesDB);
      }
    }, 200);
  });
  }

function ItemsListContainer(props) {
    const [muebles, setMuebles] = useState([]);
    const { categoríaid } = useParams();

    useEffect(() => {
      getMuebles().then( respuestaPromise => {
        setMuebles(respuestaPromise);
      });
    }, [categoríaid]);

  return (
    <div>
    <h1>{props.titulo}</h1>
    <br></br>
    <hr></hr>
    <ItemList muebles={muebles} />
    </div>
  )
}

export default ItemsListContainer
