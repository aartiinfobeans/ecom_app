import {
  Box,
  createTheme,
  FormHelperText,
  TextField,
  ThemeProvider,
} from "@mui/material";

import styled from "@emotion/styled";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1976d2",
  },
  "&.MuiInput-underline:after": {
    borderBottomColor: "darkcyan",
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid",
      borderColor: "#838383",
      borderRadius: 8,
    },
    "&:hover fieldset": {
      border: "1px solid",
      borderColor: "#838383",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid ",
      borderColor: "#838383",
      borderRadius: 8,
    },
  },
});

const theme = createTheme({
  components: {
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: "30px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: "#838383",
          fontSize: "18px",
          paddingTop: "15px",
          paddingLeft: "15px",
        },
      },
    },
  },
});

const TextInput = ({
  label = "",
  type = "text",
  name = "",
  placeholder = "",
  onChange,
  required = false,
  formFieldError = "",
  disabled = false,
  variant = "outlined",
  multiline = false,
  value,
  size = "medium",
  sx = {},
  inputProps = {},
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "white",
          borderRadius: "50px",
        }}
      >
        <CssTextField
          label={label}
          variant={variant}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          // error={formFieldError ? true : false}
          disabled={disabled}
          value={value}
          multiline={multiline}
          fullWidth
          size="large"
          sx={sx}
          inputProps={inputProps}
        />
        {formFieldError ? (
          <FormHelperText id="my-helper-text">{formFieldError}</FormHelperText>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};

export default TextInput;
