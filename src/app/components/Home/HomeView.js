import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import { AppNavbar } from "../navbar/AppNavbar";
import { CardModule } from './CardModule';

//class
import HomeClass from './HomeClass'

const HomeView = () => {
   
   const [ stateModule, setStateModule ] = useState([]);

   useEffect(() => {

    HomeClass.getModuleSecurity(setStateModule)

   }, [])


  return (
    <div>

      <AppNavbar />

        <Container>
          <Grid container>
          {stateModule.length ? stateModule.map((item, index) => (
             <Grid item xs={12} md={4} key={index} style={{padding:'4px', cursor:'pointer'}}>
               <CardModule {...item} />
            </Grid>  
          )) : null }
            </Grid>  
       </Container>
       
    </div>
  );
};

export default HomeView;
