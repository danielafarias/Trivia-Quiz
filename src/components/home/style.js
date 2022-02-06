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

      .card-info {
        display: flex;
        align-items: center;
        background-color: #FE654F;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
         p {
             margin-left: 5px;
         }
      }
  }
`;
