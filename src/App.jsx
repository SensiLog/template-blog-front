import { Routes, Route } from "react-router-dom"
import Biografia from './pages/Biografia'
import Blog from './pages/Blog'
import Contato from './pages/Contato'
import Home from './pages/Home'
import LeisSancionadas from './pages/LeisSancionadas'
import ConteudoLei from './pages/ConteudoLei'
import ProjetosDeLei from './pages/ProjetosDeLei'
import Noticia from "./pages/Noticia"
import Login from "./admin/Login"
import Register from "./admin/Register"


function App() {
  return (
    <>
      <Routes>
        { /* BLOG */}
        <Route path='/' element={<Home />} />
        <Route path='/noticias' element={<Blog />} />
        <Route path='/noticia/:id' element={<Noticia />} />
        <Route path='/biografia' element={<Biografia />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/lei/sancionadas' element={<LeisSancionadas />} />
        <Route path='/lei/projetos' element={<ProjetosDeLei />} />
        <Route path='/lei/:id' element={<ConteudoLei />} />

        { /* ADMIN */}
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
