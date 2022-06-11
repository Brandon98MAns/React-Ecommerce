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
    <section className="text-black">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <p className="font-bold m-10 text-4xl border-4 bg-gray-50">{props.titulo}</p>
          <hr/>
          </div>
        </div>
 
  
    <ItemList muebles={mueblesEstado} />
    </section>
  )
}

export default ItemsListContainer
