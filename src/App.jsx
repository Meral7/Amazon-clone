

import './App.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useAuth } from './context/GlobalState';
import Home from './components/Home';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Layout from './components/Layout';
import { Children } from 'react';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
function App() {
  const stripePromise = loadStripe('pk_test_51RHmezBUhjEJUCRcWhECzjxfGeW4vQ46sIsBXtqsHPjNBti7AEleRTcTMePKJXdjpQzswb5S1Q7AbHhrfnuzBnOo00zgCMEXOo')
  const {basket, dispatch } = useAuth()
  let id ;
  basket.map((item)=>{  id = item.id;})
 


   console.log(id)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }

    )
  }, [])
  let router = createBrowserRouter([
    {path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "login", element: <ProtectedRoute><Login /></ProtectedRoute> },
            { path: "signup", element:<ProtectedRoute> <SignUp /></ProtectedRoute> },
        { path: "checkout", element:<ProtectedRoute> <Checkout /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "payment", element: <ProtectedRoute><Elements stripe={stripePromise}><Payment /></Elements></ProtectedRoute> },
       {path: 'productdetails/:id/:category' , element: <ProtectedRoute><ProductDetails /></ProtectedRoute>}  ,

        { path: "*", element: <h1>not found</h1> },
      ]
    },
    {
    }])
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App
