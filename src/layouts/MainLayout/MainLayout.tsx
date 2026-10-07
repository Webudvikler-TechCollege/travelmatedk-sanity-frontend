import { Outlet } from "react-router-dom"
import { Header } from "../../components/partials/Header/Header"
import { Footer } from "../../components/partials/Footer/Footer"
import { Main } from "../../styled/Elements"

export const MainLayout = () => (
  <>
    <a href="#main-content" className="skip-link">Gå til indhold</a>
    <Header />
    <Main id="main-content">
      <Outlet />
    </Main>
    <Footer />
  </>
)

