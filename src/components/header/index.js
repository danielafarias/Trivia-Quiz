import { HeaderContainer } from "./style";
import * as Icon from "react-feather";
import logo from "../../assets/img/logo.svg";

export function Header(props) {
  return (
    <HeaderContainer>
          <a href="/">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Trivia Quiz</h1>
            </div>
            </a>
            <div className="btn-group">
              <button onClick={props.menuToggler}>
                <Icon.Filter size={30} style={{ color: "#ffffff" }} />
              </button>
              <button onClick={props.themeToggler}>
                {props.theme === "light" ? (
                  <Icon.Moon size={30} style={{ color: "#ffffff" }} />
                ) : (
                  <Icon.Sun size={30} style={{ color: "#ffffff" }} />
                )}
              </button>
            </div>
    </HeaderContainer>
  );
}
