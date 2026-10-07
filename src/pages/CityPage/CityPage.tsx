import { Hero } from "../../components/partials/Hero/Hero"
import { CityList } from "../../components/modules/CityList/CityList"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"

export const CityPage = () => (
  <>
    <Hero />
    <ContentWrapper pagetitle="TravelMate">
      <CityList />
    </ContentWrapper>
  </>
)

