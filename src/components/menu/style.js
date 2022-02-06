import styled from "styled-components";

export const MenuContainer = styled.menu`
    margin: 0;
    padding: 0;
    display: ${({ display }) => display};
    flex-direction: column;
    position: top;
    width: 100%;
    .menu-category {
        display: flex;
        justify-content: center;
        cursor: pointer;
        background-color: #FE654F;
        width: 100%;
        p {
            margin-left: 10px;
        }

        :hover {
            filter: brightness(80%);
          }
    }
`;
