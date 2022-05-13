import React, {useEffect, useState} from 'react';
import mueblesDB from '../data/muebles';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getMuebles() {
  return new Promise( (resolve, reject) => {
    setTimeout( (categoryid) => {
      if (categoryid !== undefined) {
         const arrayFiltered = mueblesDB.filter ((mueble) => {
          return mueble.categoria === categoryid;
         });
         resolve (arrayFiltered);
      }
      else {
        
      resolve(mueblesDB);
      }
    }, 700);
  });
  }

function ItemsListContainer(props) {
    const [mueblesEstado, setMuebles] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
      getMuebles(categoryid).then( respuestaPromise => {
        setMuebles(respuestaPromise);
      });
    }, [categoryid]);

  return (
    <div>
    <h1>{props.titulo}</h1>
    <br></br>
    <hr></hr>
    <ItemList muebles={mueblesEstado} />
    </div>
  )
}

export default ItemsListContainer
