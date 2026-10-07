import { ButtonStyled } from "./Button.styled"
import type { ButtonProps } from "./Button.types"

export const Button = ({ type = "button", ...props }: ButtonProps) => {
  return <ButtonStyled type={type} {...props} />
}
