import styled from "styled-components";
import { Reset } from "./Mixins";

export const Main = styled.main`
    
`

export const ListStyled = styled.ul`
    ${Reset};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(0, min(100%, 200px)));
    justify-content: start;
    grid-auto-rows: 1fr;
    align-items: stretch;
    gap: 1rem;
    list-style-type: none;

    > a {
        display: flex;
        min-width: 0;
        text-decoration: none;
    }
`
