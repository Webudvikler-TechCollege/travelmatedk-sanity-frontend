import { Button } from "../../elements/Button/Button";
import { Container } from "../../elements/Container/Container";
import { Input } from "../../elements/Input/Input";
import { SearchFormStyled } from "./SearchForm.styled";

export const SearchForm = () => {
  return (
    <Container>
      <SearchFormStyled action="/search" method="GET">
        <Input name="keyword" aria-label="Søg..." placeholder="Søg..." />
        <Button type="submit">Søg</Button>
      </SearchFormStyled>
    </Container>
  );
};
