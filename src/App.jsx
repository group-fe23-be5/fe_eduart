import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Article from "./pages/Article"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/article" element={<Article />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
