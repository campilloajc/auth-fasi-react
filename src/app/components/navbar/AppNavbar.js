import React, {useState} from 'react';

import {AppBar, Box ,MenuItem, Menu, Toolbar, IconButton} from '@mui/material';

//icons
import TranslateIcon from '@mui/icons-material/Translate';

import { config } from '../../config/languages';

import { useSelector, useDispatch } from 'react-redux';

import { language } from '../../context/languageSlice';
import { AccountMenu } from './AccountMenu';

export const AppNavbar = () => {

   const { languageState:{ dictionary } } = useSelector(state => state.rootReducer);
   
   const dispatch = useDispatch();

   const [anchorEl, setAnchorEl] = useState(null);
 
   const isMenuOpen = Boolean(anchorEl);

   const handleLanguageMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

   const handleMenuClose = () => {
      setAnchorEl(null);
    };

 
   const menuId = 'language-menu';

   const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => {
            dispatch(language(config.spanish));
        }}>
         {dictionary.lblSpanish}
         </MenuItem>
        <MenuItem onClick={() => {
           dispatch(language(config.english));
        }}>
          {dictionary.lblEnglish}
         </MenuItem>
      </Menu>
    );


  return (
   <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
     <Toolbar style={{display: 'flex',
    justifyContent: 'end'}}>     

         <IconButton
           size="large"
           aria-label="show more"
           aria-controls={menuId}
           aria-haspopup="true"
           onClick={handleLanguageMenuOpen}
           color="inherit"
         >
           <TranslateIcon />
         </IconButton>

    <AccountMenu />

   
         
     </Toolbar>
   </AppBar>
   {renderMenu}
 </Box>
  )
}
