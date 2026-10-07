import styled from "styled-components"

export const AttractionDetailsStyled = styled.article`
  padding-bottom: 40px;

  .details-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
    gap: 32px;
    margin: 24px 0 32px;
  }

  .details-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
  }

  .details-content {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .details-content > p {
    margin: 0 0 24px;
    line-height: 1.7;
    white-space: pre-line;
  }

  dl {
    margin: 0;
  }

  dt {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  dd {
    margin: 4px 0 16px;
    overflow-wrap: anywhere;
  }

  @media (max-width: 750px) {
    .details-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: 24px;
    }
  }
`
