import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../context/GlobalState'; // Ensure this path is correct
import { auth } from '../firebase'; // Ensure this path is correct
import data from '../assets/products/products.json';
// Example products list for search filtering - you can replace this with real data

export default function NavMobile() {
  const { user, basket } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Search states


  

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
        .then(() => {
          navigate('/login');
        })
        .catch(error => console.error("Sign out error", error));
    } else {
      navigate('/login');
    }
  };

  const handleMobileLinkClick = (action) => {
    if (typeof action === 'function') {
      action();
    }
    setIsMenuOpen(false);
  };

  const displayName = user ? (user.displayName || user.email?.split('@')[0] || 'User') : 'Guest';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131921] text-white">
      {/* Top Bar - Main Navigation */}
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 py-2 flex items-center justify-between flex-wrap md:flex-nowrap gap-2 md:gap-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center shrink-0 p-1 hover:outline hover:outline-1 hover:outline-white rounded-sm -m-1"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faAmazon} size="2x" color="#FF9900" />
        </NavLink>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-grow items-stretch max-w-2xl mx-2">
          <input
            className="text-black w-full p-2.5 text-sm rounded-l-md focus:outline-none border-2 border-transparent focus:border-yellow-500"
            type="text"
            placeholder="Search Amazon"
           
        
          />
          <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-3 flex items-center justify-center rounded-r-md">
            <SearchOutlinedIcon className="text-black" style={{ fontSize: '1.7rem' }} />
          </button>
        </div>

        {/* Hamburger Toggle - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>

        {/* Desktop Menu Items - Right Aligned */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 shrink-0">
          <NavLink
            to={!user ? '/login' : '#'}
            onClick={user ? handleAuthentication : undefined}
            className="text-white p-2 hover:outline hover:outline-1 hover:outline-white rounded-sm"
          >
            <div className="text-xs leading-tight">Hello, {displayName}</div>
            <div className="font-bold text-sm leading-tight">{user ? 'Sign Out' : 'sign in'}</div>
          </NavLink>

          <NavLink to="/orders" className="text-white p-2 hover:outline hover:outline-1 hover:outline-white rounded-sm">
            <div className="text-xs leading-tight">Returns</div>
            <div className="font-bold text-sm leading-tight">& Orders</div>
          </NavLink>

          <div onClick={() => { alert('Prime clicked!'); }} className="text-white p-2 hover:outline hover:outline-1 hover:outline-white rounded-sm cursor-pointer">
            <div className="text-xs leading-tight">Your</div>
            <div className="font-bold text-sm leading-tight">Prime</div>
          </div>

          <NavLink to="/checkout" className="text-white p-2 hover:outline hover:outline-1 hover:outline-white rounded-sm flex items-center">
            <div className="relative">
              <ShoppingBasketOutlinedIcon style={{ fontSize: '2rem' }} />
              <span
                className="absolute -top-0.5 -right-0.5 bg-yellow-500 text-[#131921] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                style={{ lineHeight: '1' }}
              >
                {basket?.length || 0}
              </span>
            </div>
            <span className="font-bold text-sm ml-2 hidden lg:inline">Cart</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu - Full width dropdown */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#232F3E] absolute w-full left-0 shadow-lg border-t border-gray-700`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-3 space-y-3">
          {/* Mobile Search Bar */}
          <div className="flex items-stretch w-full mb-3">
            <input
              className="text-black w-full p-2.5 text-sm rounded-l-md focus:outline-none border-2 border-transparent focus:border-yellow-500"
              type="text"
              placeholder="Search Amazon"
             
         
            />
            <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-3 flex items-center justify-center rounded-r-md">
              <SearchOutlinedIcon className="text-black" style={{ fontSize: '1.7rem' }} />
            </button>
          </div>

          {/* Show filtered results here for demo */}
        

          {/* Mobile Nav Links */}
          <NavLink
            to={!user ? '/login' : '#'}
            onClick={() => handleMobileLinkClick(user ? handleAuthentication : () => navigate('/login'))}
            className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Hello, {displayName} <span className="font-semibold">({user ? 'Sign Out' : 'Sign In / Manage Account'})</span>
          </NavLink>

          <NavLink
            to="/orders"
            onClick={() => handleMobileLinkClick(() => navigate('/orders'))}
            className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Returns & Orders
          </NavLink>

          <div
            onClick={() => handleMobileLinkClick(() => { alert('Prime clicked!'); })}
            className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-gray-700 cursor-pointer"
          >
            Your Prime
          </div>

          <NavLink
            to="/checkout"
            onClick={() => handleMobileLinkClick(() => navigate('/checkout'))}
            className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className='flex items-center'>
                <ShoppingBasketOutlinedIcon fontSize="medium" className="mr-2" />
                <span>Cart</span>
              </div>
              <span className="bg-yellow-500 text-[#131921] text-xs font-semibold rounded-full px-2 py-0.5">
                {basket?.length || 0}
              </span>
            </div>
          </NavLink>
        </div>
        {user && (
          <div className="px-4 py-3 border-t border-gray-700">
            <p className="text-sm text-gray-400">Currently signed in as:</p>
            <p className="text-base font-medium text-white truncate">{user.email}</p>
          </div>
        )}
      </div>
    </nav>
  );
}
