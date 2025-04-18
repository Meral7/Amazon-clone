

import './App.css'
import {BrowserRouter, Route, Router,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
function App() {

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Nav />}/>
        <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        <Route path='*' element={<h1>not found</h1>}/>
      </Routes>
      <h1 className=' text-amber-800'>Vite React</h1>
      </BrowserRouter>
    </>
  )
}

export default App
