import React, { useState } from "react";
import "./Login.css";
import { Grid, Paper, Avatar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Signup from "../Signup/Signup";
import TextInput from "../Common/TextInput/TextInput";
import FilledButton from "../Common/FilledButton/FilledButton";
import { loginUser } from "../../service/authService.js/auth";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    backgroundColor: "white",
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const bgImage =
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnxlbnwwfHwwfHw%3D&w=1000&q=80";

  const handleSubmit = async () => {
    const params = { username, password };
    console.log("login params:::", params);
    const token = await loginUser(params);
    console.log("token ****", token);
    if (token.success) {
      console.log("navigate to dashboard");
      navigate("/dashboard");
    }
    setToken(token);
  };

  const onUserNameChange = (user) => {
    setUsername(user.target.value);
  };

  const onPasswordChange = (password) => {
    setPassword(password.target.value);
  };

  const onSignUP = () => {
    setIsSignUp(true);
  };

  return (
    <Grid
      style={{ backgroundColor: "#F8F8F8", height: "100vh", display: "flex" }}
    >
      <Paper style={{ flex: 0.8, backgroundImage: `url(${bgImage})` }}></Paper>
      {!isSignUp ? (
        <Paper elevation={1} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
            <h2>Login</h2>
          </Grid>
          <TextInput
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            onChange={onUserNameChange}
            required={true}
            value={username}
            sx={{ marginTop: "8px" }}
          />

          <TextInput
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            onChange={onPasswordChange}
            required={true}
            value={password}
            sx={{ marginTop: "8px" }}
            type={"password"}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
                style={{ color: "black" }}
              />
            }
            label="Remember me"
          />
          <FilledButton
            type="submit"
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            fullWidth
            label="Sign In"
          />

          <Typography onClick={onSignUP} style={{ color: "#414DAB" }}>
            Forgot password ?
          </Typography>

          <Box>
            <Typography>Do you have an account ?</Typography>
            <Typography onClick={onSignUP} style={{ color: "#414DAB" }}>
              Sign Up
            </Typography>
          </Box>
        </Paper>
      ) : (
        <Signup setIsSignUp={setIsSignUp} />
      )}
    </Grid>
  );
};
export default Login;
