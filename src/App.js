import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configRoutes } from './app/config/routes';
import { useSelector } from 'react-redux';
//segurida de ruta
import { SecurityRoutes } from './app/components/security/SecurityRoutes';

const App = () => {

  const { userState } = useSelector(state => state.rootReducer);

  return (
    <BrowserRouter basename='/fasi'>

     <Routes>

       <Route 
          path={configRoutes.initialRoute.path}
          element={<configRoutes.initialRoute.component />}
        />
       
       <Route element={<SecurityRoutes logout={userState.logout}/>}>

          <Route 
            path={configRoutes.homeRoute.path}
            element={<configRoutes.homeRoute.component />}
          />

        </Route>
          
     </Routes>
     
   </BrowserRouter>
  )
}



export default App