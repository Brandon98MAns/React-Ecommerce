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
      <div className="border-4 bg-gray-50">
        <p className="font-bold m-10 text-4xl">{props.titulo}</p>
      </div>
  
  
    <ItemList muebles={mueblesEstado} />
    </div>
  )
}

export default ItemsListContainer
