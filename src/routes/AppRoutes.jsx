
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import Premios from '../pages/Premios'
import Cartelas from '../pages/Cartelas'
import Evento from '../pages/Evento'
import Pedido from '../pages/Pedido'
import Confirmacao from '../pages/Confirmacao'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premios" element={<Premios />} />
        <Route path="/cartelas" element={<Cartelas />} />
        <Route path="/evento" element={<Evento />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/confirmacao" element={<Confirmacao />}/>
        <Route
          path="*"
          element={
            <main className="min-h-screen bg-slate-950 p-10 text-center text-white">
              <h1 className="text-4xl font-bold">404</h1>
              <p className="mt-4 text-slate-400">
                Página não encontrada.
              </p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
