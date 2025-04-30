import React from 'react'
import Product from './Product';
import home from '../assets/images/home.jpg'

import data from '../assets/products/products.json'
export default function Home() {
    return (
        <>
            <div className='home'>
                <img className='home-image' src={home} alt="home-image" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 items-stretch">
  {data.products.map((product) => (
    <Product
      key={product.id}
      title={product.name}
      price={product.price}
      rating={product.rating}
      image={product.imageUrl}
      category={product.category}
      description={product.description}
    />
  ))}
</div>

            </div>
        </>
    )
}
