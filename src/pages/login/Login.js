import React, { useState } from "react"; 
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import LoginImg from '../../assets/images/login.png'
import {Link, useHistory, useLocation } from "react-router-dom"; 
import useAuth from "../../hooks/useAuth";

 
const Login = () => {
  const [loginData, setLoginData] = useState({});  
  const {googleLogin, loginUser,isLoading , user, authError} = useAuth();

  const history = useHistory()
 const location = useLocation()
 

  const handleOnChange = (e) =>{
    const field = e.target.name;
    const value = e.target.value; 
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData)   
    e.preventDefault();
      
  }

  const handleLoginSubmit = (e) => {    
    
    if(loginData.email === ""  && loginData.password === "" ){
      return false;
    }

    loginUser( loginData.email, loginData.password, location, history);
   
    e.preventDefault();
}

   const handleGoogleLogin=()=>{
     googleLogin(location, history);
   }


  return (
    <Container sx={{py:'80px'}}>
      <Grid container spacing={2} style={{display:'flex', alignItems:'center' }}>
        <Grid item xs={12} md={6}>  
        <Paper sx={{p:2}} elevation={6}>
            <Typography variant="h4">Login Please</Typography>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Registration Successfull..</Alert>
            )}
            {
              authError && <Alert severity="error">{authError}</Alert>
            } 
            <form onSubmit={handleLoginSubmit}>
                <TextField
                id="email"
                label="E-mail"
                name="email"
                style={{width:'100%',marginBottom:'20px', marginTop:'20px'}}
                size="small"
                variant="outlined"
                onChange={handleOnChange}
                type="email"
                />
                <TextField
                type="password"
                id="password"
                name="password"
                label="Password"
                style={{width:'100%'}}
                size="small"
                variant="outlined"
                onChange={handleOnChange}
                />
                <Button type="submit" sx={{mt:'20px'}} variant="contained">Login </Button>
            </form>
            <Typography sx={{ mt: 3 }}>
              <Link
                style={{ textDecoration: "none", fontSize: "14px" }}
                to="/register"
              >
                Already have an account? Please <b>Sign Up</b> here..
              </Link>
            </Typography>

            <Button variant="contained" onClick={handleGoogleLogin}>Google Login</Button>
        </Paper>

        </Grid>
        <Grid item xs={4} md={6} style={{padding:'20px'}}>  
            <img src={LoginImg} alt="" style={{width:'90%'}} />
        </Grid> 
      </Grid>
      <Typography>
              <Link
                style={{ textDecoration: "none", fontSize: "14px" }}
                to="/"
              >
                Back to Home page
              </Link>
            </Typography>
    </Container>
  );
};

export default Login;
