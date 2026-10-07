import { Link } from "react-router-dom"
import styled from "styled-components"

export const BackLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light.background};
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.tertiary};
    outline-offset: 4px;
  }

  body.dark-mode & {
    background: ${({ theme }) => theme.colors.dark.control};
    color: ${({ theme }) => theme.colors.dark.text};
    border-color: ${({ theme }) => theme.colors.dark.border};

    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
    }

    &:focus-visible {
      outline-color: ${({ theme }) => theme.colors.dark.accent};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
