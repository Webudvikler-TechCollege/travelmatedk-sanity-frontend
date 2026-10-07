import styled from "styled-components"

export const ButtonStyled = styled.button`
  min-height: 34px;
  padding: 5px 20px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.control};
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadows.button};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontsizes.body};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`
