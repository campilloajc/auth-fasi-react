import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const SecurityRoutes = ({ children, logout = false, redirectTo="/" }) => {

  if(!logout) return <Navigate to={redirectTo} />
 
  return children ? children : <Outlet /> 
     
}