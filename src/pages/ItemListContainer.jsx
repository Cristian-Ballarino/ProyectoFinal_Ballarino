import React, { useEffect, useState } from 'react'
import {fetchData} from '../service/fetchData'
import ItemList from '../components/ItemListContainer/ItemList'

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([])
 
useEffect(() => {
  fetchData().then(res => {
    console.log(res)
    setList(res)
  })
}, [])
//filtrado de productos

  return (
    <div>
        <h1>{greeting}</h1>
     <ItemList list={list} />
    </div>
  )
}

export default ItemListContainer