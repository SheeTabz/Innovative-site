import React, { useState } from 'react'

function ItemList() {
    const [items, setItems] = useState([])
  return (
    <div>
        <ul>
            {items.map(item => {
                return <li key={item.id}>{item.value}</li>
            })}
        </ul>
   
    </div>
  )
}

export default ItemList