import { Button } from "../Button/Button"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <Button onClick={toggleTheme}>
      {darkMode ? "Light mode" : "Dark mode"}
    </Button>
  )
}
