import { Hero } from "../../components/partials/Hero/Hero"
import { CountryList } from "../../components/modules/CountryList/CountryList"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"

export const CountryPage = () => (
  <>
    <Hero />
    <ContentWrapper pagetitle="TravelMate">
      <CountryList />
    </ContentWrapper>
  </>
)

