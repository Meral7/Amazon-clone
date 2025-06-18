import React from 'react'
import checkoutImage from '../assets/images/checkoutAd.jpg'
import { useAuth } from '../context/GlobalState'
import CheckoutProduct from './CheckoutProduct';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Subtotal from './Subtotal';
import Payment from './Payment';
export default function Checkout() {
  const { user, basket } = useAuth();

  return (
    <>
      <div className="container flex  "> 
        <div className="left-box pr-4 w-3/4 ">
          <img src={checkoutImage} alt="checkout" className='w-full' />
          <div className='p-5'> Hello, {user ? user.email : 'guest'}</div>

          {
            basket.map((item, index) => {
         
              return (<CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.images}
                price={item.price}
                rating={item.rating}
                 brand={item.brand }  />)
            })
          }
        </div>
        <div className="right-box w-1/4 p-5">
        <Subtotal />
      </div>

        {/* <Payment /> */}
      </div>
    </>
  )
}
