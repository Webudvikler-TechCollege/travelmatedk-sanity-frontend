import defaultHeroImage from "../../../assets/travelmate-hero.png"
import { SearchForm } from "../../modules/SearchForm/SearchForm"
import { HeroStyled } from "./Hero.styled"
import type { HeroProps } from "./Hero.types"

export const Hero = ({ image = defaultHeroImage, alt, variant = "default" }: HeroProps) => {
  return (
    <HeroStyled
      $image={image}
      $variant={variant}
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
    >
      <SearchForm />
    </HeroStyled>
  )
}
