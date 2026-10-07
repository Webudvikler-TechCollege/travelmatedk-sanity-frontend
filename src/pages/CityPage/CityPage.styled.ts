import styled from "styled-components"

export const HomeIntro = styled.div`
  padding: 22px 0 46px;

  p {
    margin: 0 0 20px;
  }

  section + section {
    margin-top: 20px;
  }

  section:last-child p:last-child {
    margin-bottom: 0;
  }
`
