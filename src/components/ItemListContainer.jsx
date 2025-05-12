import React, { useEffect, useState } from 'react'
import fetchData from '../service/fetchData'

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([])
  console.log('se renderizo itemlistcontainer')

useEffect(() => {
  fetchData().then(res => {
    console.log(res)
    setList(res)
  })
},[])
const mapList = list.map((item) => {
 // console.log(item)
  return (
    <div>
      <h3>{item.name}</h3>
    </div>
  )
})
  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer