import { HeaderContainer } from "./style";
import logo from "../../assets/img/logo.svg";
import * as Icon from "react-feather";

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
        <a
          href="https://github.com/danielafarias/Trivia-Quiz"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <Icon.GitHub size={30} style={{ color: "#ffffff" }} />
          </button>
        </a>
      </div>
    </HeaderContainer>
  );
}
