import React, { useEffect, useState } from 'react'
import fetchData from '../service/fetchData'
import ItemList from './itemList'

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([])
 
useEffect(() => {
  fetchData().then(res => {
    console.log(res)
    setList(res)
  })
}, [])

  return (
    <div>
        <h1>{greeting}</h1>
     <ItemList list={list} />
    </div>
  )
}

export default ItemListContainer