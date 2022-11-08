import styles from "./App.module.css"
import { Route, Routes, useLocation } from "react-router-dom"
import homeIcon from '../public/images/icons/icon-home.svg';
import infoIcon from '../public/images/icons/icon-info-circle.svg';
import logoffIcon from '../public/images/icons/icon-power-off.svg';
import loginIcon from '../public/images/icons/icon-user-alt.svg';
import logo from '../public/images/icons/logo.svg';
import { Footer } from "./components/footer"
import { About } from "./pages/about"
import { History } from "./pages/history"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { MenuButton } from "./components/menuButton";


function App() {
  const location = useLocation()
  console.log(location)

  return (
    <div className="App">
      <header className={styles.header}>
          <div className={styles.title}>
            <img src={logo} alt='logo' className={styles.title} />
          </div>
          <div className={styles.home}>
            <MenuButton text = "HOME" />
          </div>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
