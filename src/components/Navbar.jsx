import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";
import avatar from "../image/avatar.png";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goAndCloseLogin = () => {
    handleCloseNavMenu();
    navigate("login");
  };
  const goAndCloseLogout = () => {
    handleCloseNavMenu();
    logOut();
  };
  const goAndCloseRegister = () => {
    handleCloseNavMenu();
    navigate("register");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HdMovies
          </Typography>

          <Box
            color="primary"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {!currentUser ? (
                <MenuItem onClick={goAndCloseLogin}>
                  <Typography textAlign="">Login</Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={goAndCloseLogout}>
                  <Typography textAlign="">Logout</Typography>
                </MenuItem>
              )}

              <MenuItem onClick={goAndCloseRegister}>
                <Typography>Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HdMovies
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {!currentUser ? (
              <Button
                onClick={() => navigate("login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={() => logOut()}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
            )}

            <Button
              onClick={() => navigate("register")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Register
            </Button>
          </Box>

          {currentUser && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt={currentUser?.displayName}
                  src={currentUser?.photoURL || avatar}
                />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
