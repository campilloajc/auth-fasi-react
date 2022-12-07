import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Button,
  Card,
  InputAdornment,
  CardContent,
  Grid,
  TextField,
  styled
} from "@mui/material";

//icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//hook
import { useForm } from "../../utils/useForm";

//service
import LoginClass from "./LoginClass";


const StyledDiv = styled('div')`
  width: 90%;
  height:100vh;
  margin:auto;
  display: flex;
  justify-content:center;
  align-items: center;
  @media (min-width: 700px) { 
    width: 45%;
   }
   @media (min-width: 1080px) { 
    width: 35%;
   }
`

const LoginView = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { state, handleChange, setState } = useForm({
    email: "",
    password: "",
    visibility: false,
  });

  const handleSubmit = () => LoginClass.authenticate(state, navigate, dispatch);

  const handleChangeVisility = () => {
    setState((prev) => ({
      ...prev,
      visibility: !prev.visibility,
    }));
  };

  return (
    <StyledDiv>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} style={{ margin: "4px" }}>
              <TextField
                label={"Email"}
                name="email"
                fullWidth
                onChange={handleChange}
                value={state.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} style={{ margin: "4px" }}>
              <TextField
                label={"Password"}
                type={state.visibility ? "text" : "password"}
                fullWidth
                name="password"
                onChange={handleChange}
                value={state.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ cursor: "pointer" }}
                      onClick={handleChangeVisility}
                    >
                      {state.visibility ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} style={{ margin: "4px" }}>
              <Button 
               fullWidth
               variant="contained"
               onClick={handleSubmit}>login</Button>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </StyledDiv>
  );
};

export default LoginView;
