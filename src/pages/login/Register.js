import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import loginImg from "../../assets/images/login.png";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link , useLocation, useHistory} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { authError, user, registerUser, isLoading } = useAuth();
  const location  = useLocation();
  const history  = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  // handle Registration

  const handleRegister = (e) => { 
    if (loginData === "") {
      alert("field must not be empty");
    }
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
    }

    registerUser(loginData.email, loginData.password,loginData.name, location, history);
     
    e.preventDefault();
  };

  return (
    <Container>
      <Grid
        container
        spacing="2"
        style={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 5 }}>
            <Typography variant="h5">Register</Typography>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Registration Succesfull..</Alert>
            )}
            {
              authError && <Alert severity="error">{authError}</Alert>
            } 
            
            {!isLoading && (
              <form onSubmit={handleRegister}>
                <TextField
                  id="userName"
                  label="Your Name"
                  type="text"
                  size="small"
                  name="name"
                  onChange={handleOnChange}
                  style={{ width: "100%", mb: 2, marginTop: "10px" }}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  type="text"
                  size="small"
                  name="email"
                  onChange={handleOnChange}
                  style={{ width: "100%", mb: 2, marginTop: "10px" }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  size="small"
                  onChange={handleOnChange}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                />
                <TextField
                  id="outlined-password-input2"
                  label="Re-Password"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  size="small"
                  onChange={handleOnChange}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                />
                <Button type="submit" variant="outlined">
                  Register
                </Button>
              </form>
            )}

            <Typography sx={{ mt: 3 }}>
              <Link
                style={{ textDecoration: "none", fontSize: "14px" }}
                to="/login"
              >
                Already have an account? Please <b>Sign In</b> here..
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={loginImg} alt="" style={{ width: "100%" }} />
        </Grid>
        
        <Typography>
              <Link
                style={{ textDecoration: "none", fontSize: "14px" }}
                to="/"
              >
                Back to Home page
              </Link>
            </Typography>
      </Grid>
    </Container>
  );
};

export default Register;
