import { AttractionList } from "../../components/modules/AttractionList/AttractionList"
import { Hero } from "../../components/partials/Hero/Hero"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"

export const HomePage = () => (
  <>
    <Hero />
    <ContentWrapper pagetitle="TravelMate">
      <AttractionList />
    </ContentWrapper>
  </>
)

