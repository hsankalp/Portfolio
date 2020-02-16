import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008b8b"
    },
    secondary: {
      main: "#8fbc8f"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Header />
        <Main />
        {/* <Footer /> */}
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
