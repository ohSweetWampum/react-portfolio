import "typeface-roboto";
import React from "react";
import Container from "./components/container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff3d00",
    },
    background: {
      default: "#fff",
    },
  },
});

// Functional component that returns a Container component
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container />
  </ThemeProvider>
);

// Exporting the App component for use in other files
export default App;
