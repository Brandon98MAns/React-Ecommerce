import React from 'react'
import Item from './Item'

function ItemList ( {muebles} ) {

  return (
    <div className="container" style={{display: 'flex', direction: 'column'}}>
    <div className="flex flex-col row row-cols-4">
      <div className="flex flex-col">
      { muebles.map(thismueble => {
          return (
           <Item mueble={thismueble} key={thismueble.id} />
          )
      }) }
      </div>
      </div>
      </div>
  )
}

export default ItemList