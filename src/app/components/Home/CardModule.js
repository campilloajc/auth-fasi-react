import React from 'react'

import {  Card, CardContent } from '@mui/material';

export const CardModule = ({ description }) => {

  const redirectTo = () => {
    window.location.href = "http://localhost/admin";
  }


  return (
    <Card onClick={redirectTo}>
       <CardContent>
         {description}
      </CardContent>   
    </Card>
  )
}
