
import { Container } from "../../components/elements/Container/Container"
import type { ContentWrapperProps } from "./ContentWrapper.types"

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {
  return (
    <div>
      <title>{pagetitle}</title>
      <Container className="center">
        <h1 className="page-heading">{pagetitle}</h1>
      </Container>
      <Container className="center">
        {children}
      </Container>
    </div>
  )
}
