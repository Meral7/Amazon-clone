import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/GlobalState';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../context/AppReducer';
import { NumericFormat } from 'react-number-format'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Payment() {
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const { basket, user ,dispatch  } = useAuth();

  const stripe =useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  useEffect(() => {
   const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);
  const handleChange = (e) => {
  setDisabled(e.empty);
  setError(error ? error.message : "");
  };
  const handleSubmit= async(e) =>{ e.preventDefault();

    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret ,{
      payment_method: {
        card: elements.getElement(CardElement)
      }

    }).then(({ paymentIntent }) => {
      
      const ref = doc(db,"users",user?.uid ,'orders' ,paymentIntent.id);
      setDoc(ref,{
        basket: basket,
        amount:paymentIntent.amount,
        created: paymentIntent.created

      })
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      console.log(paymentIntent);
      // paymentIntent = payment confirmation
      // navigate('/orders')
      navigate('/orders',{replace:true});
      dispatch({
        type: 'EMPTY_BASKET',
      })

    });

    
  }
  return (
    <> <div className='flex '>

      <div className='w-3/4 p-4 m-1'>   {basket.map((item) => <CheckoutProduct
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating} />)}</div>

      <div className='p-4 w-1/4 '>
        <h2>Checkout <Link to={'/checkout'} />
          {basket.length} items</h2>
        <p>{user?.email}</p>
        {/* Delivery Address */}
        <h3>Delivery Address</h3>
        <p>Alexandria, Egypt</p>
      </div>    </div>
      <div className="w-full p-5 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 ">
      
        <div className="payment-details w-3/4 ">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} className='bg-amber-400 p-6' />
            <div className="payment-priceContainer">
              <NumericFormat prefix="$" allowLeadingZeros thousandSeparator="," decimalScale={2} renderText={(value) => (
                  <>
                    <p>
                      Subtotal({basket.length} items) :<strong>{value}</strong>
                    </p>
                  </>
              )}
                value={getBasketTotal(basket)} // Assuming basket is an array of items with a price property
                displayType="text"
          
              />
              <button className='bg-amber-300 p-5 rounded-lg text-center' type='submit' disabled={processing|| disabled ||succeeded}><span>{processing?<p>processing</p>:"Buy Now"}</span></button>
            </div>

          </form>
        </div>
      </div>
 
    </>
  )
}
