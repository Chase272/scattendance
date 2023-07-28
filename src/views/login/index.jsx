import React, { useState } from "react";
import { TextField, useTheme, Button, Box } from "@mui/material";
import { tokens } from "../../theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom/dist";
import { app } from "../../utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSubmit = (event) => {
    const auth = getAuth();
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        setError();
        setUser(userCreds.user);
        // console.log(userCreds); //UserCreds Not Working
        console.log(user);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <Box
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="3px"
      sx={{
        p: "50px",
        m: "100px",
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
