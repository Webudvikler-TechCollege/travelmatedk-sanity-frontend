import { HeaderStyled, HeaderInner, Logo, HeaderActions, HeaderButton, DarkButton } from "./Header.styled";
import { Nav } from "../Nav/Nav";
import { useThemeMode } from "../../../context/ThemeContext";
import { useLanguage } from "../../../context/LanguageContext";

export const Header = () => {
  const { language, setLanguage } = useLanguage()
  const { darkMode, setDarkMode } = useThemeMode()
  return (
    <HeaderStyled>
      <HeaderInner>

        <Logo>
          ✈️ Travel<span>Mate</span>
        </Logo>

        <Nav />

        <HeaderActions>

          <HeaderButton
            as="select"
            aria-label="Vælg sprog"
            value={language}
            onChange={event => setLanguage(event.target.value)}
          >
            <option value="da">🌐 Dansk</option>
            <option value="en">🌐 English</option>
            <option value="es">🌐 Español</option>
          </HeaderButton>

          <HeaderButton
            type="button"
            aria-pressed={!darkMode}
            onClick={() => setDarkMode(false)}
          >
            ☀️ Light
          </HeaderButton>

          <DarkButton
            type="button"
            aria-pressed={darkMode}
            onClick={() => setDarkMode(true)}
          >
            🌙 Dark
          </DarkButton>

        </HeaderActions>

      </HeaderInner>
    </HeaderStyled>
  );
};