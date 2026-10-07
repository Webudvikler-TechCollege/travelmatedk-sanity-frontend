import { BackLinkStyled } from "./BackLink.styled"

type BackLinkProps = {
  to?: string
  label?: string
}

export const BackLink = ({ to = "/", label = "Tilbage til steder" }: BackLinkProps) => (
  <BackLinkStyled to={to} aria-label={label} title={label}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M19 12H5m7-7-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </BackLinkStyled>
)
