import styled, { css } from "styled-components"

export const LabelStyled = styled.label<{ $visuallyHidden: boolean }>`
  ${({ $visuallyHidden }) => $visuallyHidden && css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  `}
`
