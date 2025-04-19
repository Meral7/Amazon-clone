import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import '../assets/style/product.css'
import '../assets/products/products.json'
import { useAuth } from './../context/GlobalState';
export default function Product({ image, price, title, rating , id }) {
    const {dispatch, basket}= useAuth();
    const addToBascket = () => {
        console.log('added to basket')
        console.log(basket)
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
  return (
<div className=" bg-white hover:bg-black hover:scale-105 transition-all duration-300 p-4 rounded-lg shadow-md transform text-black hover:text-white">
  <div className="container flex flex-col items-center">
  <img src={image} alt="product-img" className="mt-4   " />
    <div className="product-info text-center mb-2">
      <p className="text-lg font-semibold">{title}</p>
      <p className="product-price text-sm">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>

    <div className="product-rating mb-2">
 
      {Array(rating).fill().map((_, i) => (      <StarOutlinedIcon />))}
    </div>

    <button onClick={addToBascket} className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1 px-3 rounded transition-all duration-300">
      Add to Basket
    </button>


  </div>
</div>


  )
}
