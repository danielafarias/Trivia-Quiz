import { useState } from "react";
import logo from "./assets/img/logo.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           
            <button onClick={themeToggler}>Switch Theme</button>
          </header>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
