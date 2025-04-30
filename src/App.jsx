

import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
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
function App() {
  const stripePromise =loadStripe('pk_test_51RHmezBUhjEJUCRcWhECzjxfGeW4vQ46sIsBXtqsHPjNBti7AEleRTcTMePKJXdjpQzswb5S1Q7AbHhrfnuzBnOo00zgCMEXOo')
  const {dispatch} = useAuth()
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if(user){
      dispatch({
        type: 'SET_USER',
        user: user,
      })
    } else{
      dispatch({
        type: 'SET_USER',
        user: null})}
  }

  )},[])
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<>
        
        <Home/>
        </>}/>
        <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<>   <Checkout /></>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements>} />
        <Route path='*' element={<h1>not found</h1>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
