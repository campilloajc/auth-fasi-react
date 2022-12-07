import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MenuItem, Menu, IconButton } from "@mui/material";

//context - action
import { user } from "../../context/userSlice";

//icons
import AccountCircle from "@mui/icons-material/AccountCircle";

export const AccountMenu = () => {
  const {
    languageState: { dictionary },
  } = useSelector((state) => state.rootReducer);

  const dispatch = useDispatch();

  const menuId = "account-menu";

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const singOut = () => {
    dispatch(user({ user: null, logout: false }));

    localStorage.clear();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={singOut}>{dictionary.lblSignOut}</MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </React.Fragment>
  );
};
