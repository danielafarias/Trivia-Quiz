import { useState } from "react";
import logo from "./assets/img/logo.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { Header } from "./components/styles/styles";
import * as Icon from "react-feather";

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
          <Header>
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Trivia Quiz</h1>
            </div>
            <div className="btn-group">
              <button>
                <Icon.Menu size={30} style={{ color: "#ffffff" }} />
              </button>
              <button onClick={themeToggler}>
                {theme === "light" ? (
                  <Icon.Moon size={30} style={{ color: "#ffffff" }} />
                ) : (
                  <Icon.Sun size={30} style={{ color: "#ffffff" }} />
                )}
              </button>
            </div>
          </Header>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
