import { Routes, Route } from "react-router-dom"
// Routes
import MainPage from "./Routes/MainPage"
import Graphics from "./Routes/Graphics"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/graphics" element={<Graphics />} />
    </Routes>
  )
}

export default App