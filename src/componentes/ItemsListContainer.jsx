import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllItems as getMuebles, getItemsByCategory } from "../data";

function ItemsListContainer(props) {
    const [mueblesEstado, setMuebles] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
      if (categoryid === undefined) {
        getMuebles().then(( respuestaPromise) => {
          setMuebles(respuestaPromise);
        });
      } else {
        getItemsByCategory(categoryid).then((respuestaPromise) => {
          setMuebles(respuestaPromise);
       });
      }
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
