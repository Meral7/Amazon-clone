import React from 'react';
import Product from './Product';
import home from '../assets/images/home.jpg';
import data from '../assets/products/products.json';
import CategoriesSlider from './categoriesSlider';

export default function Home() {
  const productsArray = data.products || [];

  return (
    <div className="home">
      <img className="home-image" src={home} alt="home" />
<CategoriesSlider/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {productsArray.map((product) => (
          <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            images={product.images?.[0] || product.thumbnail}
            category={product.category}
            description={product.description}
            brand={product.brand}
          />
        ))}
      </div>
    </div>
  );
}
