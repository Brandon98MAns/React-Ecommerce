import React from 'react'

function ItemList ( {muebles} ) {

  return (
      <>
      { muebles.map(thismueble => {
          return (
           <Item mueble={thismueble} key={thismueble.id} />
          )
      }) }
      </>
  )
}

export default ItemList