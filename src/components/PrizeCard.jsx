import Button from './Button'
function PrizeCard({ prize }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-6 hover:border-amber-400/50">
      <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-amber-400/10 text-3xl">
        {prize.icon}
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">
        {prize.name}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-6 text-slate-400">
        {prize.description}
      </p>
      <p className="mb-5 flex-1 text-sm leading-0.5 text-slate-400">
        {prize.buy}
      </p>

      <p className="mb-5 text-2xl font-extrabold text-amber-400">
        R$ {prize.value.toLocaleString('pt-BR')}
      </p>



      <Button
        variant="secondary"
        onClick={() => alert(`Você selecionou: ${prize.name}`)}
      >
        Ver detalhes
      </Button>
    </article>
  )
}

export default PrizeCard