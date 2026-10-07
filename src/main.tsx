import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styled/Global.ts";
import { theme } from "./styled/Theme.ts";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { CountryContextProvider } from "./hooks/useCountries";
import { CityContextProvider } from "./hooks/useCities.tsx";
import { AttractionContextProvider } from "./hooks/useAttractions.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ThemeContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CountryContextProvider>
              <CityContextProvider>
                <AttractionContextProvider>
                  <App />
                </AttractionContextProvider>
              </CityContextProvider>
            </CountryContextProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
