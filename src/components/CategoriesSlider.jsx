import React from "react";
import Slider from "react-slick";
import data from '../assets/products/products.json';
export default function CategoriesSlider() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const product = data.products
  return (
    <div>
        <Slider {...settings}> 
          <div>
       {product.images?.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} className="w-20 h-20 rounded-md border" />
          ))} </div>
    </Slider>
    </div>
  )
}
