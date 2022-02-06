import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { Menu } from "./components/menu";
import { Home } from "./components/home";
import { Category } from "./components/category";
import { Header } from "./components/header";

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
          <Header menuToggler={menuToggler} themeToggler={themeToggler} theme={theme}/>
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
