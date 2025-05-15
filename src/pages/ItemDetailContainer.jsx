import React, { useEffect, useState } from 'react'
import { fetchDatabyId } from '../service/fetchData'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
  const [detail, setdetail] = useState({})
const params = useParams()
   console.log(params)

   useEffect(() => {
       fetchDatabyId(params.id).then((res) => {
           console.log(res)
           setDetail(res)
        })
    }, [])
        
  return ( 
  <div>
    <h2>{detail.name}</h2>
    <p>{detail.description}</p>
    <h3>stock: {detail.stock}</h3>
    <h3>price: ${detail.price}</h3>
  </div>
  )
}

export default ItemDetailContainer