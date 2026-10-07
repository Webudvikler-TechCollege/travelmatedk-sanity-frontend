import styled from "styled-components"

export const LocationMapStyled = styled.section`
  margin-top: 32px;

  iframe {
    display: block;
    width: 100%;
    height: 380px;
    margin-bottom: 12px;
    border: 0;
    border-radius: 12px;
  }

  @media (max-width: 750px) {
    iframe {
      height: 280px;
    }
  }
`
