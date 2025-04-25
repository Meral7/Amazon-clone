import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import '../assets/style/product.css'
import '../assets/products/products.json'
import { useAuth } from './../context/GlobalState';
export default function Product({ image, price, title, rating, id ,category }) {
    const { dispatch, basket } = useAuth();
    const addToBascket = () => {
        console.log('added to basket')
        console.log(basket)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                category: category
            }
        })
    }
    return (

        <div className='p-4'> 
        <div className="p-4 m-10   text-center rounded-lg shadow-xl shadow-gray-400  sm-w-60 flex md-w-1/3 hover:black hover:text-black  hover:scale-110 transition-all duration-300 card-color  place-content-evenly ">
  <div className="">
    <img src={image} alt="product-img" className=" h-50" />
    <div className=" m-2 mt-6">
      <p className="m-2 mt-6">{title}</p>
      <p className="m-2 mt-6">{category}</p>
      <p className="m-2">
        <small>$</small><strong>{price}</strong>
      </p>
    </div>
    <div className="">
      {Array(rating).fill().map((_, i) => (<StarOutlinedIcon className='text-amber-400' key={i} fontSize="small" />))}
    </div>
    <button 
      onClick={addToBascket} 
      className=" rounded-lg shadow-xl m-2 bg-blue-600 p-2 hover:scale-110 transition-all duration-300 ">
      Add to Basket
    </button>
  </div>
</div>

            </div>

    )
}
