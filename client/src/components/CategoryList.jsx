import './categorylist.css'
import React, {useState, useEffect} from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const ProductList = () => {
    const params = useParams();
    const baseURL = `/api/product?category=${params.category}`

  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
      console.log(response.data)
      console.log(products)
    })
  }, [])

  if(!products) return null
  console.log(products)

  return (
    <div className='pl-container'>
        {products.map((item=>(
          <SingleProduct item={item} key={item.id}/>
        )))}
    </div>
  )
}

export default ProductList