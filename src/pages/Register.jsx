import { Button, Container, TextField, Typography } from "@mui/material";
// import { useAuthContext } from "../context/AuthContext";
import { register, singWithGoogle } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    register(userInfo.email, userInfo.password, navigate);
  };
  return (
    <form onSubmit={handleRegister}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
          gap: "0.5rem",
        }}
      >
        <Typography variant="h3" align="center">
          Sing In
        </Typography>
        <Typography variant="h5">First Name</Typography>
        <TextField
          fullWidth
          id="firstname"
          variant="outlined"
          label="Enter your first name"
          value={userInfo?.firstname}
          size="small"
          onChange={(e) =>
            setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
          }
        />
        <Typography variant="h5" mt={2}>
          Last Name
        </Typography>
        <TextField
          fullWidth
          id="lastname"
          variant="outlined"
          label="Enter your last name"
          value={userInfo?.lastname}
          size="small"
          onChange={(e) =>
            setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
          }
        />

        <Typography variant="h5" mt={2}>
          Email
        </Typography>
        <TextField
          fullWidth
          id="email"
          variant="outlined"
          label="Enter your email address"
          value={userInfo?.email}
          size="small"
          onChange={(e) =>
            setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
          }
        />
        <Typography variant="h5" mt={2}>
          Password
        </Typography>

        <TextField
          fullWidth
          id="password"
          variant="outlined"
          label="Enter your password"
          value={userInfo?.password}
          size="small"
          onChange={(e) =>
            setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
          }
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="small"
          sx={{ marginTop: "2rem" }}
        >
          Sing In
        </Button>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={singWithGoogle}
        >
          Continue with Google
        </Button>
      </Container>
    </form>
  );
};

export default Register;
