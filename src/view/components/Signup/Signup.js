import React, { useState } from "react";

import { Paper, Typography } from "@mui/material";
import TextInput from "./../../common/TextInput/TextInput";
import Button from "./../../common/FilledButton/FilledButton";
import { registerUser } from "../../../service/authService/auth";

const Signup = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { setIsSignUp } = props;

  const paperStyle = {
    padding: 20,
    // height: "70vh",
    width: 280,
    backgroundColor: "white",
    margin: "50px auto",
  };

  const handleUsernameChange = (user) => {
    setUsername(user.target.value);
  };

  const handlePasswordChange = (password) => {
    setPassword(password.target.value);
  };

  const handleConfirmedPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword.target.value);
  };

  const handleEmailChange = (text) => {
    setEmail(text.target.value);
  };

  const onSignInClick = () => {
    setIsSignUp(false);
  };

  const onsignupclick = async () => {
    const params = { username, password, email };
    console.log("register params ****", params);
    const response = await registerUser(params);
    console.log("register response ****", response);
    // if (token.success) {
    //   console.log("navigate to dashboard");
    //   navigate("/dashboard");
    // }
  };

  const onResetClick = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };
  return (
    <Paper elevation={1} style={paperStyle}>
      <Typography variant={"h6"} style={{ color: "#0F2C56" }}>
        Register
      </Typography>

      <Typography variant={"subtitle1"} style={{ color: "#0F2C56" }}>
        Manage all your information efficiently
      </Typography>

      <Typography sx={{ fontSize: 10, color: "#0F2C56" }}>
        Let's get you all setup so you can verify your personal account and
        begin setting up your profile
      </Typography>

      <TextInput
        label="Username"
        placeholder="Enter username"
        variant="outlined"
        onChange={handleUsernameChange}
        required={true}
        value={username}
        sx={{ marginTop: "8px" }}
      />

      <TextInput
        label="Password"
        placeholder="Enter password"
        variant="outlined"
        onChange={handlePasswordChange}
        required={true}
        value={password}
        type={"password"}
        sx={{ marginTop: "8px" }}
      />

      <TextInput
        label="Confirm Password"
        placeholder="Confirm password"
        variant="outlined"
        onChange={handleConfirmedPasswordChange}
        required={true}
        value={confirmPassword}
        type={"password"}
        sx={{ marginTop: "8px" }}
      />

      <TextInput
        label="Email"
        placeholder="Enter email address"
        variant="outlined"
        onChange={handleEmailChange}
        required={true}
        value={email}
        sx={{ marginTop: "8px" }}
      />
      <div>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          label="Submit"
          onClick={onsignupclick}
          style={{ marginTop: "8px" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          label="Reset"
          onClick={onResetClick}
          style={{ marginTop: "8px" }}
        />
      </div>
      <Typography style={{ marginTop: "20px", color: "#0F2C56" }}>
        Already have an account ?
      </Typography>
      <Typography onClick={onSignInClick} style={{ color: "#414DAB" }}>
        Sign In
      </Typography>
    </Paper>
  );
};
export default Signup;
