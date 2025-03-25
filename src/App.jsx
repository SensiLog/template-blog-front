import Biografia from './pages/Biografia'
import Blog from './pages/Blog'
import Contato from './pages/Contato'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import LeisSancionadas from './pages/LeisSancionadas'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticias' element={<Blog />} />
        <Route path='/biografia' element={<Biografia />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/leis' element={<LeisSancionadas />} />
      </Routes>
    </>
  )
}

export default App
