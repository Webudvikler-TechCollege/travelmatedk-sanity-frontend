import { Link } from "react-router-dom"
import { ListStyled } from "../../../styled/Elements"
import { Card } from "../Card/Card"
import { useAttractions } from "../../../hooks/useAttractions"

type AttractionListProps = {
  cityId?: string
}

export const AttractionList = ({ cityId }: AttractionListProps) => {
  
  const { attractions, error } = useAttractions()

  if (error) return <p role="alert">Kunne ikke hente seværdighederne: {error}</p>
  if (!attractions) return <p role="status">Henter seværdigheder…</p>

  const filteredAttractions = cityId == null
    ? attractions
    : attractions.filter(attraction => attraction.cityId === cityId)

  if (filteredAttractions.length === 0) return <p>Der er endnu ingen seværdigheder at vise.</p>

    console.log(filteredAttractions);
    

  return (
    <ListStyled>
      {filteredAttractions.map(item => {
        return (
          <Link key={item._id} to={`/attractions/${item._id}`}>
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
