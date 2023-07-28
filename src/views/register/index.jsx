import React, { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Register = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, rollNo, dateOfBirth, password);
  }

  return (
    <Box
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
      m="20px"
      p="20px"
      flexDirection="column"
    >
      <h2>Register a Student to Course </h2>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Roll No:"
          onChange={(e) => setRollNo(e.target.value)}
          value={rollNo}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
