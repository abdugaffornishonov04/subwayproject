import { BrowserRouter, Route, Routes } from "react-router-dom"
import LanguagePage from "./pages/LanguagePage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LanguagePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
