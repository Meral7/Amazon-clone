import React from 'react'
import { Link } from 'react-router-dom'

import { SvgIcon } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import  '../assets/style/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';

export default function Nav() {
  return (
    <div className='header'>
     
      <Link to="/">

        <FontAwesomeIcon className='header-logo' icon={faAmazon} size="2x" color="#FF9900" />

      </Link>
      <div className="header-search">
        <input className='header-search-input' type='text' />
        <SearchOutlinedIcon className='search-icon' />
      </div>


      <div className='header-nav flex items-center '>
        <Link to="/login" className='header-link'>
          <div className="header-option">
            <div className="header-optionLineOne">Hello Guest</div>
            <div className="header-optionLineTwo">Sign In</div>
          </div>
        </Link>
        <Link to="/orders" className='header-link'>
          <div className="header-option">
            <div className="header-optionLineOne">Retrns</div>
            <div className="header-optionLineTwo">&Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout" className='header-link'>
          <div className="header-optionBasket">
           <ShoppingBasketOutlinedIcon className='chart-style'/>
            <span  className='header-optionLineTwo header-bashetCount'>5</span>
          
          </div>
        </Link>
      </div>
    </div>
  )
}
