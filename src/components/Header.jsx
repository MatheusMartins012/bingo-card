import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="relative z-50 border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          onClick={fecharMenu}
          className="text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          Bingo <span className="text-amber-400">Premiado</span>
        </Link>

        {/* Navegação para computador */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            Início
          </Link>

          <Link
            to="/premios"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            Prêmios
          </Link>

          <Link
            to="/evento"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            Evento
          </Link>

          <Link
            to="/cartelas"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            Cartelas
          </Link>

          <Link
            to="/cartelas"
            className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Comprar agora
          </Link>
        </nav>

        {/* Botão do menu para celular */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold md:hidden"
        >
          {menuAberto ? 'Fechar ✕' : 'Menu ☰'}
        </button>
      </div>

      {/* Navegação para celular */}
      {menuAberto && (
        <nav className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={fecharMenu}
              className="text-slate-300 hover:text-amber-400"
            >
              Início
            </Link>

            <Link
              to="/premios"
              onClick={fecharMenu}
              className="text-slate-300 hover:text-amber-400"
            >
              Prêmios
            </Link>

            <Link
              to="/evento"
              onClick={fecharMenu}
              className="text-slate-300 hover:text-amber-400"
            >
              Evento
            </Link>

            <Link
              to="/cartelas"
              onClick={fecharMenu}
              className="text-slate-300 hover:text-amber-400"
            >
              Cartelas
            </Link>

            <Link
              to="/cartelas"
              onClick={fecharMenu}
              className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-slate-950"
            >
              Comprar agora
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header