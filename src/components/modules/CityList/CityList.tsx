import { Link } from "react-router-dom"
import { ListStyled } from "../../../styled/Elements"
import { Card } from "../Card/Card"
import { useCities } from "../../../hooks/useCities"

type CityListProps = {
  countryId?: string
}

export const CityList = ({ countryId }: CityListProps) => {
  const { cities, error } = useCities()

  if (error) return <p role="alert">Kunne ikke hente byerne: {error}</p>
  if (!cities) return <p role="status">Henter byer…</p>

  const filteredCities = countryId == null
    ? cities
    : cities.filter(city => city.countryId === countryId)

  if (filteredCities.length === 0) return <p>Der er endnu ingen byer at vise.</p>

  return (
    <ListStyled>
      {filteredCities.map(item => {
        return (
          <Link key={item._id} to={`/cities/${item._id}`}>
          <Card
            image={item.image}
            title={item.name}
            subtitle={item.description}
          />
          </Link>
        )
      })}
    </ListStyled>
  )
}
