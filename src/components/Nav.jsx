import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import '../assets/style/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../context/GlobalState';
import { auth } from '../firebase';

export default function Nav() {
  const { user, basket } = useAuth();

  const handleAuothontication = () => {
    auth.signOut();
  };

  return (
    <div className=' fixed bg-[#131921] space-between z-50 right-0 left-0 top-0 flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0 text-white'> 
      {/* Logo */}
      <NavLink to="/" className='flex  justify-center items-around p-2'>
        <FontAwesomeIcon className=' w-fit m-2 ' icon={faAmazon} size="2x" color="#FF9900" />
      </NavLink>

      {/* Search */}
      <div className="header-search flex items-center w-full max-w-lg mt-2 md:mt-0">
        <input className='header-search-input flex-grow p-2' type='text' />
        <SearchOutlinedIcon className='search-icon p-2' />
      </div>

      {/* Navigation Options */}
      <div className='header-nav flex flex-col sm:flex-row items-center justify-around gap-2 mt-2 md:mt-0 sm:justify-center'>
        {/* register options */}
        {/* <NavLink to={'login'}> log in</NavLink>
        <NavLink to={'signup'}> sign up</NavLink>
        <NavLink to={'logout'}> log out</NavLink> */}
        <NavLink to={user ? '#' : '/login'} className='header-Link'>
          <div className="header-option" onClick={user ? handleAuothontication : null}>
            <div className="header-optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </div>
            <div className="header-optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </div>
          </div>
        </NavLink>

        <NavLink to="/orders" className='header-Link'>
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </NavLink>
 <div className='header-Link'>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
 </div>
        <NavLink to="/checkout" className='header-Link'>
          <div className="header-optionBasket flex items-center space-x-1">
            <ShoppingBasketOutlinedIcon className='chart-style' />
            <span className='header-optionLineTwo header-bashetCount'>{basket ? basket.length : '0'}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
