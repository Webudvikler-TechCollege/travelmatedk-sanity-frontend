import { Link, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import { MainLayout } from "./layouts/MainLayout/MainLayout"
import { ContentWrapper } from "./layouts/ContentWrapper/ContentWrapper"
import { CountryPage } from "./pages/CountryPage/CountryPage"
import { CityPage } from "./pages/CityPage/CityPage"
import { CountryDetails } from "./components/modules/CountryDetails/CountryDetails"
import { CityDetails } from "./components/modules/CityDetails/CityDetails"
import { AttractionDetails } from "./components/modules/AttractionDetails/AttractionDetails"
import { SearchPage } from "./pages/SearchPage/SearchPage"

export const App = () => {
  return <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="attractions/:id" element={<AttractionDetails />} />
      <Route path="countries" element={<CountryPage />} />
      <Route path="countries/:id" element={<CountryDetails />} />
      <Route path="cities" element={<CityPage />} />
      <Route path="cities/:id" element={<CityDetails />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="*" element={
        <ContentWrapper pagetitle="Siden findes ikke">
          <p><Link to="/">Tilbage til oversigten</Link></p>
        </ContentWrapper>
      } />
    </Route>
  </Routes>
}
