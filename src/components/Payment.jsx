import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/GlobalState';
import CheckoutProduct from './CheckoutProduct';


export default function Payment() {
    const { basket ,user } = useAuth();
  return (
    <> <div className='flex '>
     
    <div className='w-3/4 p-4 '>   {basket.map((item)=><CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}/>)}</div>
           
            <div className='p-4'>  <h2>Checkout <Link to={'/checkout'}/> {basket.length} items</h2>
     <p>{user?.email}</p></div>       </div>
    </>
  )
}
