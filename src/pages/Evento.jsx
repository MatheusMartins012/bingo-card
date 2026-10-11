
function Evento() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
          Programe-se
        </p>

        <h1 className="mb-6 text-4xl font-extrabold">
          Conheça nosso evento
        </h1>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300">
            <strong className="text-white">Local:</strong>{' '}
            Igreja matriz de forquilha
          </p>

          <p className="text-slate-300">
            <strong className="text-white">Data:</strong>{' '}
            15/10/2026
          </p>

          <p className="text-slate-300">
            <strong className="text-white">Horário:</strong>{' '}
            a partir das 20:00 horas
          </p>
        </div>
      </div>
    </main>
  )
}

export default Evento
