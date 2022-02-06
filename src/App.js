import { useState } from "react";
import logo from "./assets/img/logo.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { Header } from "./components/styles";
import { Menu } from "./components/menu";
import * as Icon from "react-feather";
import { Home } from "./components/home";
import { Category } from "./components/category";

function App() {
  const [theme, setTheme] = useState("light");
  const [display, setDisplay] = useState("none");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const menuToggler = () => {
    display === "none" ? setDisplay("flex") : setDisplay("none");
  };
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  console.log(urlParams.has('id'));

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
              <button onClick={menuToggler}>
                <Icon.Filter size={30} style={{ color: "#ffffff" }} />
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
          <Menu display={display}/>
          {
            urlParams.has('id') ? <Category categoryId={id}/> : <Home/>
          }
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
