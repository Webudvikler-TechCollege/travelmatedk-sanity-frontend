import type { CardProps } from "./Card.types";
import {
  CardStyled,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle
} from "./Card.styled";

const SUBTITLE_MAX_LENGTH = 100;

export const Card = ({
  image,
  title,
  subtitle
}: CardProps) => {
  const shortSubtitle = subtitle.length > SUBTITLE_MAX_LENGTH
    ? `${subtitle.slice(0, SUBTITLE_MAX_LENGTH - 1).trimEnd()}…`
    : subtitle;


  return (
    <CardStyled>

      <CardImage
        src={image}
        alt={title}
      />

      <CardContent>

        <CardTitle>
          {title}
        </CardTitle>

        <CardSubtitle>
          {shortSubtitle}
        </CardSubtitle>

      </CardContent>

    </CardStyled>
  );
};