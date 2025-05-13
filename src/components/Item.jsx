import React from 'react'

const Item = ({ item }) => {
  return (
    <div key={item.id}>
        <h3>{item.name}</h3>
    </div>
  )
}
 
export default Item