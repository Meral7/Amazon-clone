import React from 'react'
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import NavMobile from './NavMobile';

export default function Layout() {
  return (
    <div>
      {/* <Nav/> */}
      <NavMobile/>
      <Outlet></Outlet>
    </div>
  )
}
