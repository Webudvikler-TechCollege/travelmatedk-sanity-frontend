import { LabelStyled } from "./Label.styled"
import type { LabelProps } from "./Label.types"

export const Label = ({ visuallyHidden = false, ...props }: LabelProps) => {
  return <LabelStyled $visuallyHidden={visuallyHidden} {...props} />
}
