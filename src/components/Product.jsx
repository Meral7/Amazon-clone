import React, {  useState } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import '../assets/style/product.css';
import { useAuth } from './../context/GlobalState';
import { Link } from 'react-router-dom';

export default function Product({ images, price, title, rating, id, category, description,brand }) {
  const { dispatch } = useAuth();
  const [showAlert, setShowAlert] = useState(false); 
  const [addedProductName, setAddedProductName] = useState('');

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        images,
        price,
        rating,
        category,
        description,
        brand
      }
    });

    // Show alert
    setAddedProductName(title);
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className='p-4 relative'>
      {/* Alert for added product */}
      {showAlert && (
  <div className='fixed bottom-5 right-5 bg-orange-800 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce' style={{
    zIndex: 1000
  }}>
    <span className="font-semibold">{addedProductName}</span> added to basket!
  </div>
)}
<Link to={`/productdetails/${id}/${category}`}>
      <div className="p-4 m-10 text-center rounded-lg shadow-xl shadow-gray-400 flex hover:black hover:text-black hover:scale-110 transition-all duration-300 card-color place-content-evenly ">
        <div>
          <img src={images} alt={`${title} ${brand}`} className="h-50" />
          <div className="m-2 mt-6">
            <p className="m-2 mt-6">{title} </p>
            <p className="m-2 mt-6">{brand} </p>
       
            <p className="m-2 mt-6">{category}</p>
            <p className="m-2 justify-around"><small>$</small><strong>{price}</strong> <small> <StarOutlinedIcon className='text-amber-400'  fontSize="small" /></small><strong> {rating}</strong></p>
                   </div>
          <div>
            {/* {Array(rating).fill().map((_, i) => (
              <StarOutlinedIcon className='text-amber-400' key={i} fontSize="small" />
            ))} */}
          </div>
          <button
            onClick={addToBasket}
            className="rounded-lg shadow-xl m-2 bg-blue-600 p-2 hover:scale-110 transition-all duration-300 text-white"
          >
            Add to Basket
          </button>
        </div>
      </div> </Link>
    </div>
  );
}
