import React from 'react'
import { useAuth } from '../context/GlobalState';
import { Navigate } from 'react-router-dom';
import Login from './Login';

export default function ProtectedRoute(props) {
      const { user } = useAuth();
      
if(user!==null)
    return props.children;
else {
  return <Navigate to={'/login'}/>
}
 
}
