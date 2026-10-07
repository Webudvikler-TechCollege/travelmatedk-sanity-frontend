import styled from "styled-components";

export const SectionStyled = styled.section`
  width: min(1180px, calc(100% - 32px));

  margin-inline: auto;
  padding-block: 20px 6px;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-bottom: 14px;

  h2 {
    margin: 0;

    font-size: 1.35rem;
    color: #0f2d4f;
  }

  a {
    color: #0867e8;

    font-size: 0.9rem;
    font-weight: 600;

    text-decoration: none;
  }
`;

export const CardGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);

  gap: 16px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;