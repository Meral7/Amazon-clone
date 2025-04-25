

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
function App() {
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
      
      <Routes>
        <Route path='/' element={<>
        <Nav/>
        <Home/>
        </>}/>
        <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<>  <Nav/> <Checkout /></>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
        <Route path='*' element={<h1>not found</h1>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
