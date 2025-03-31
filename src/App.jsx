import { Routes, Route } from "react-router-dom"
import Biografia from './pages/Biografia'
import Blog from './pages/Blog'
import Contato from './pages/Contato'
import Home from './pages/Home'
import LeisSancionadas from './pages/LeisSancionadas'
import ConteudoLei from './pages/ConteudoLei'
import ProjetosDeLei from './pages/ProjetosDeLei'
import Noticia from "./pages/Noticia"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticias' element={<Blog />} />
        <Route path='/noticia/:id' element={<Noticia />} />
        <Route path='/biografia' element={<Biografia />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/lei/sancionadas' element={<LeisSancionadas />} />
        <Route path='/lei/projetos' element={<ProjetosDeLei />} />
        <Route path='/lei/:id' element={<ConteudoLei />} />
      </Routes>
    </>
  )
}

export default App
