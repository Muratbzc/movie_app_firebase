import loginimg from "../image/login.jpg";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import { useAuthContext } from "../context/AuthContext";
import { login } from "../auth/firebase";
import { singWithGoogle } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login(userInfo.email, userInfo.password, navigate);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <img src={loginimg} width="100%" height="100%" alt="" />
      </Container>
      <Container>
        <form onSubmit={handleLogin}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "3rem",
              gap: "2rem",
            }}
          >
            <Typography variant="h3" align="center">
              Login
            </Typography>
            <Typography variant="h5">Email</Typography>
            <TextField
              fullWidth
              id="email"
              variant="outlined"
              label="Enter your email address"
              value={userInfo?.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
              }
            />
            <Typography variant="h5">Password</Typography>

            <TextField
              fullWidth
              id="password"
              type="password"
              variant="outlined"
              label="Enter your password"
              value={userInfo?.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
              }
            />
            <Button variant="contained" color="secondary" type="submit">
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => singWithGoogle(navigate)}
            >
              Continue with Google
            </Button>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

export default Login;
