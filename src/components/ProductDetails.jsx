import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../assets/products/products.json';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Slider from "react-slick";

export default function ProductDetails() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id, category } = useParams();
  const product = data.products.find((p) => String(p.id) === id);
const[relatedProducts ,setRelatedProducts] = useState(null)
useEffect(() => {
  getRelatedProducts(category);
}, [category]);
function getRelatedProducts(category) {
 let related =   data.products.filter((product) => product.category === category);
 setRelatedProducts(related)
}
  if (!product) {
    return <div className="p-4 text-red-500">Product not found</div>;
  }

  
  return ( <>
    <div className="p-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        
        <img
          src={product.images?.[0] || product.thumbnail || 'https://via.placeholder.com/300?text=No+Image'}
          alt={product.title}
          className="w-full max-w-md h-auto rounded-md"
        />
        <Slider {...settings}>
       {product.images?.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} className="w-20 h-20 rounded-md border" />
          ))}
    </Slider>
        <div className="flex gap-2 mt-4 flex-wrap">
          {product.images?.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} className="w-20 h-20 rounded-md border" />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="italic text-gray-600">{product.category}</p>
        <p>{product.description}</p>
        <p className="text-lg font-semibold">${product.price} <span className="text-sm text-green-600">({product.discountPercentage}% off)</span></p>

        <div className="flex items-center">
          <StarOutlinedIcon className="text-amber-400" fontSize="small" />
          <span className="ml-1 font-semibold">{product.rating}</span>
        </div>

        <p>Brand: {product.brand}</p>
        <p>SKU: {product.sku}</p>
        <p>Stock: {product.stock}</p>
        <p>Availability: {product.availabilityStatus}</p>
        <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
        <p>Weight: {product.weight}g</p>
        <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
        <p>Shipping: {product.shippingInformation}</p>
        <p>Warranty: {product.warrantyInformation}</p>
        <p>Return Policy: {product.returnPolicy}</p>

        <div>
          <h2>Tags:</h2>
          <div className="flex gap-2 flex-wrap">
            {product.tags.map((tag, i) => (
              <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>

        <div>
          <h2>Reviews:</h2>
          {product.reviews.map((review, i) => (
            <div key={i} className="border p-2 rounded my-2">
              <div className="flex items-center gap-2">
                <StarOutlinedIcon className="text-amber-400" fontSize="small" />
                <span className="font-medium">{review.rating}</span>
                <span className="text-gray-500 text-sm">by {review.reviewerName}</span>
              </div>
              <p className="italic text-gray-600">{review.comment}</p>
              <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        <div>
          <p>Barcode: {product.meta.barcode}</p>
          {product.meta.qrCode && (
            <img src={product.meta.qrCode} alt="QR Code" className="w-24 mt-2" />
          )}
        </div>
      </div>
    </div>
   <div className="max-w-6xl mx-auto p-4">
  <h2 className="text-2xl font-bold my-4">Related Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
   
   {relatedProducts && relatedProducts.map((pro) => {
  const { id, images, title, brand, category, price, rating } = pro;

  return (
    <Link to={`/productdetails/${id}/${category}`} key={id}>
      <div className="p-4 m-10 text-center rounded-lg shadow-xl shadow-gray-400 flex hover:text-black hover:scale-110 transition-all duration-300 card-color place-content-evenly">
        <div>
          <img src={images?.[0] || 'https://via.placeholder.com/150'} alt={`${title} ${brand}`} className="h-50" />
          <div className="m-2 mt-6">
            <p>{title}</p>
            <p>{brand}</p>
            <p>{category}</p>
            <p>
              <small>$</small><strong>{price}</strong>
              <small><StarOutlinedIcon className='text-amber-400' fontSize="small" /></small>
              <strong> {rating}</strong>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
})}

  </div>
</div> </>
  );
}
