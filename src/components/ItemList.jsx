import React from 'react'

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
            <h3>{item.name}</h3>
        </div>   
      ))}  
    </div>
  )
}

export default ItemList