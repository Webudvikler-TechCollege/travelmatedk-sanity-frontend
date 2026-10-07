import styled from "styled-components"

export const InputStyled = styled.input`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 34px;
  padding: 6px 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.control};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.light.text};
  box-shadow: ${({ theme }) => theme.shadows.input};
  font-size: ${({ theme }) => theme.fontsizes.body};
`
