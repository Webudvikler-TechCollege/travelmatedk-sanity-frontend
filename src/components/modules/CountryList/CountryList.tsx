import { Link } from "react-router-dom"
import { useCountries } from "../../../hooks/useCountries"
import { ListStyled } from "../../../styled/Elements"
import { Card } from "../Card/Card"

export const CountryList = () => {
  const { countries, error } = useCountries()

  if (error) return <p role="alert">{error}</p>

  return (
    <ListStyled>
      {countries.map(item => {
        return (
          <Link key={item._id} to={`/countries/${item._id}`}>
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
