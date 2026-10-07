import { LocationMapStyled } from "./LocationMap.styled"
import type { LocationMapProps } from "./LocationMap.types"

export const LocationMap = ({ latitude, longitude, name }: LocationMapProps) => {
  if (
    latitude == null || longitude == null ||
    !Number.isFinite(latitude) || !Number.isFinite(longitude) ||
    Math.abs(latitude) > 90 || Math.abs(longitude) > 180
  ) {
    return null
  }

  // Kortets udsnit: vest, syd, øst, nord.
  const bounds = [
    Math.max(-180, longitude - 0.02),
    Math.max(-90, latitude - 0.01),
    Math.min(180, longitude + 0.02),
    Math.min(90, latitude + 0.01),
  ]
  const params = new URLSearchParams({
    bbox: bounds.join(","),
    layer: "mapnik",
    marker: `${latitude},${longitude}`,
  })
  const mapLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`

  return (
    <LocationMapStyled aria-label={`Kort over ${name}`}>
      <h2>Find på kortet</h2>
      <iframe
        title={`Kort med placeringen af ${name}`}
        src={`https://www.openstreetmap.org/export/embed.html?${params}`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        Åbn større kort i OpenStreetMap
      </a>
    </LocationMapStyled>
  )
}
