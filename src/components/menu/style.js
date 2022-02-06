import styled from "styled-components";

export const MenuContainer = styled.menu`
    margin: 0;
    display: ${({ display }) => display};
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    
    .menu-category {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        background-color: #98DFAF;
        width: 30%;
        p {
            margin-right: 5px;
        }

        :hover {
            filter: brightness(90%);
          }
    }
`;
