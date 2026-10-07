import styled from "styled-components";

export const HeroStyled = styled.section<{ $image: string; $variant: "default" | "detail" }>`
  min-height: ${({ $variant }) => $variant === "detail" ? "400px" : "200px"};

  display: flex;
  align-items: center;

  background:
    ${({ $variant }) => $variant === "detail" ? "" : `linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.65) 35%,
      rgba(255, 255, 255, 0.05) 70%
    ),`}
    url("${({ $image }) => $image}") center center / cover no-repeat;

  @media (max-width: 750px) {
    min-height: ${({ $variant }) => $variant === "detail" ? "300px" : "400px"};
  }
`;

export const HeroContent = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
`;

export const HeroText = styled.div`
  max-width: 570px;

  h1 {
    margin: 0 0 12px;

    
    line-height: 1.05;

    color: #0d2b4c;
  }

  p {
    max-width: 480px;

    margin: 0 0 20px;

    color: #36536f;

    line-height: 1.5;
  }
`;

export const SearchBox = styled.form`
  max-width: 550px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 6px;

  background: #ffffff;
  border-radius: 12px;

  box-shadow: 0 8px 25px rgba(15, 45, 79, 0.12);

  input {
    flex: 1;

    padding: 14px;

    border: none;
    outline: none;
  }

  button {
    padding: 13px 34px;

    border: none;
    border-radius: 9px;

    background: #0867e8;
    color: #ffffff;

    font-weight: 700;

    cursor: pointer;
  }

  button:hover {
    background: #0058cf;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;