import React from 'react'
import Product from './Product';
import home from '../assets/images/home.jpg'
import shortid from 'shortid';
import data from '../assets/products/products.json'
export default function Home() {
    return (
        <>
            <div className='home'>
                <img className='home-image' src={home} alt="home-image" />
                
                {data.products.map((product) => (
  <div key={product.id} className="col-span-1">
    <Product
      title={product.name}
      price={product.price}
      rating={product.rating}
      image={product.imageUrl}
    />
  </div>
))}
            </div>
        </>
    )
}
