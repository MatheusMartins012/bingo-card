
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950 text-white sm:grid-cols-2 lg:grid-cols-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          Bingo<span className="text-amber-400">Premiado</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-slate-300 hover:text-amber-400">
            Início
          </Link>

          <Link to="/premios" className="text-sm text-slate-300 hover:text-amber-400">
            Prêmios
          </Link>

          <Link to="/evento" className="text-sm text-slate-300 hover:text-amber-400">
            Evento
          </Link>

          <Link to="/cartelas" className="text-sm text-slate-300 hover:text-amber-400">
            Cartelas
          </Link>
        </nav>

        <Link
          to="/cartelas"
          className="rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-300"
        >
          Comprar
        </Link>
      </div>
    </header>
  )
}

export default Header
