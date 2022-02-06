import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FE654F;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  .logo {
      display: flex;
      img {
          width: 10%;
          margin-right: 5px;
      }

      h1 {
        color: #98DFAF;
      }
  }

  .btn-group {
        display: flex;
      button {
          background-color: transparent;
          border: none;
          border-radius: 9999px;
          padding: 0.3rem;
          margin-left: 20px;
          cursor: pointer;
    
          :hover {
            backdrop-filter: blur(2px);
            backdrop-filter: brightness(120%);
          }
      }
  }
`;