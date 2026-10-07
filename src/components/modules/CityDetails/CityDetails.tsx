import { useParams } from "react-router-dom"
import { BackLink } from "../../elements/BackLink/BackLink"
import { AttractionList } from "../AttractionList/AttractionList"
import { ContentWrapper } from "../../../layouts/ContentWrapper/ContentWrapper"
import { CityDetailsStyled } from "./CityDetails.styled"
import { useCities } from "../../../hooks/useCities"

export const CityDetails = () => {

  // Hent id fra URL
  const { id } = useParams()

  // Hent byen fra API
  const { cities, error } = useCities()

  // Fejl
  if (error) {
    return <p>Der opstod en fejl</p>
  }

  const city = cities.find(
    city => city._id === id
  )

  if (!city) {
    return <p>Byen blev ikke fundet</p>
  }

  return (
    <ContentWrapper pagetitle={city.name}>

      <CityDetailsStyled>

        <BackLink />

        <div className="details-grid">

          <img
            className="details-image"
            src={city.image}
            alt={city.name}
          />

          <div className="details-content">
            <p>{city.description}</p>
          </div>

        </div>

        <section className="city-locations">

          <h2>
            Seværdigheder i {city.name}
          </h2>

          <AttractionList cityId={city._id} />

        </section>

      </CityDetailsStyled>

    </ContentWrapper>
  )
}