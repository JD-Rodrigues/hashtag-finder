import { Route, Routes } from "react-router-dom"
import { About } from "./pages/about/about"
import { History } from "./pages/history/history"
import { Home } from "./pages/home/home"
import { Login } from "./pages/login/login"


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
