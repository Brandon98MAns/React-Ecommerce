import React from 'react'
import Item from './Item'

function ItemList ( {muebles} ) {

  return (
      <div>
      { muebles.map(thismueble => {
          return (
           <Item mueble={thismueble} key={thismueble.id} />
          )
      }) }
      </div>
  )
}

export default ItemList