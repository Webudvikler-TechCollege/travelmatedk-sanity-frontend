import { useParams } from "react-router-dom"
import { BackLink } from "../../elements/BackLink/BackLink"
import { CityList } from "../CityList/CityList"
import { ContentWrapper } from "../../../layouts/ContentWrapper/ContentWrapper"
import { CountryDetailsStyled } from "./CountryDetails.styled"
import { useCountries } from "../../../hooks/useCountries"

export const CountryDetails = () => {
  const { id } = useParams()
  const { countries } = useCountries()

  const country = countries.find(
    country => country._id === id
  )

  if (!country) {
    return <p>Indlæser...</p>
  }

  return (
    <ContentWrapper pagetitle={country.name}>

      <CountryDetailsStyled>

        <BackLink />

        <div className="details-grid">

          <img
            className="details-image"
            src={country.image}
            alt={country.name}
          />

          <div className="details-content">
            <p>{country.description}</p>
          </div>

        </div>

        <section className="country-cities">

          <h2>Byer i {country.name}</h2>

          <CityList countryId={country._id} />

        </section>

      </CountryDetailsStyled>

    </ContentWrapper>
  )
}
