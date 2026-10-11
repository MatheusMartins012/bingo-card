
import Button from '../components/Button'

function Home() {
  return (
    <main
      id="inicio"
      className="min-h-screen bg-slate-950 px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Uma noite de prêmios
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Bingo Premiado
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-slate-300">
          Conheça os prêmios, descubra os detalhes do evento
          e escolha suas cartelas.
        </p>

        <Button onClick={() => window.location.href = '/cartelas'}>
          Comprar cartelas
        </Button>
      </div>
    </main>
  )
}

export default Home
