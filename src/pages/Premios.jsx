
import PrizeCard from '../components/PrizeCard'
import { prizes } from '../data/prizes'

function Premios() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
            Nossos prêmios
          </p>

          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Prêmios que fazem a diferença
          </h1>

          <p className="max-w-2xl text-slate-400">
            Confira os prêmios previstos para cada rodada do
            nosso Bingo Premiado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prizes.map((prize) => (
            <PrizeCard key={prize.id} prize={prize} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Premios
