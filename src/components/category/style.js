import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    background-color: #98dfaf;
    color: #fe654f;
    font-weight: 700;
    align-items: center;
    justify-content: space-evenly;
    width: 15rem;
    height: 5rem;
    border: none;
    margin: 1rem;
    cursor: pointer;
    border-radius: 10px;

    :hover {
      filter: brightness(80%);
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: rgba(152, 223, 175, 0.4);
  backdrop-filter: blur(5px);
  width: 40rem;
  height: 30rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    border-bottom: 1px solid #fe654f;

    .card-info {
      display: flex;
      align-items: center;
      padding: 5px;
      margin-bottom: 1rem;
      p {
        margin-left: 5px;
      }
    }
  }

  .card-text {
    display: flex;
    align-items: center;
    b {
      margin-left: 5px;
    }
  }

  .card-options {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;

      button {
        color: #ffffff;
      }
      }
  }
`;
