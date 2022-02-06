import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Doctors Portal
            </Link>
          </Typography>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/appoinment"
            >
              Appoinment
            </Link>
          </Button>
          {user?.email ? (
            <Box>
              <Link
                to="/dashboard"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button color="inherit" variant="outlined" >
              {user && user.displayName} 
              </Button>
              <Button color="inherit" variant="outlined" sx={{ml:1}} onClick={logOut}>
                Logout <LogoutIcon sx={{ml:1, fontSize:'20px'}}/>
              </Button>

            </Box>
          ) : (
            <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
