import React, { Component } from "react";

import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          padding: "14px",
          fontSize: "16px",
          boxShadow: "none",
          letterSpacing: "0px",
        },
        containedPrimary: {
          backgroundColor: "rgba(0, 45, 89, 1)",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#002D59",
            boxShadow: "none",
          },
        },
        containedSecondary: {
          backgroundColor: "rgba(188, 221, 210, 1)",
          color: "rgba(0, 45, 89, 1)",
          textTransform: "none",
          fontSize: "15px",
          "&:hover": {
            backgroundColor: "rgba(188, 221, 210, 1)",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const FilledButton = (props) => {
  const {
    label,
    sx,
    variant,
    size,
    startIcon,
    endIcon,
    disabled,
    color,
    classes,
    onClick,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        color={color}
        classes={classes}
        {...props}
        onClick={onClick}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default FilledButton;
