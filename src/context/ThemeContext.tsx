import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Beskriver de værdier vores context skal indeholde
type ThemeContextProps = {
  darkMode: boolean
  toggleTheme: () => void
  setDarkMode: (darkMode: boolean) => void
}

// Provideren skal kunne modtage child components
type ProviderProps = {
  children: ReactNode
}

// Opretter vores context
export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleTheme: () => {},
  setDarkMode: () => {}
})

// Provideren gør værdierne tilgængelige for resten af appen
export const ThemeContextProvider = ({ children }: ProviderProps) => {

  // false = light mode, true = dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  // Skifter mellem true og false
  const toggleTheme = () => {
    setDarkMode((current) => !current)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeMode = () => {
  return useContext(ThemeContext)
}
