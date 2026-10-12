
import { useState } from 'react'

const cartelas = [
  {
    id: 1,
    nome: 'Cartela individual',
    descricao: 'Ideal para começar a participar.',
    preco: 10,
    destaque: false,
  },
  {
    id: 2,
    nome: 'Pacote especial',
    descricao: 'Mais oportunidades em um único pedido.',
    preco: 40,
    destaque: true,
  },
  {
    id: 3,
    nome: 'Pacote família',
    descricao: 'Uma opção para compartilhar a diversão.',
    preco: 70,
    destaque: false,
  },

  {
    id: 4,
    nome: "vip",
    descricao: "Apenas para clientes especiais.",
    preco: 100,
    destaque: false,
  }
]

function Cartelas() {
  const [quantidades, setQuantidades] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  })

  function aumentarQuantidade(id) {
    setQuantidades((quantidadesAtuais) => ({
      ...quantidadesAtuais,
      [id]: quantidadesAtuais[id] + 1,
    }))
  }

  function diminuirQuantidade(id) {
    setQuantidades((quantidadesAtuais) => ({
      ...quantidadesAtuais,
      [id]: Math.max(0, quantidadesAtuais[id] - 1),
    }))
  }


  function zerarQuantidade(id) {
    setQuantidades({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    }
    )
  }

  const totalItens = cartelas.reduce(
    (total, cartela) => total + quantidades[cartela.id],
    0,
  )

  const valorTotal = cartelas.reduce(
    (total, cartela) =>
      total + cartela.preco * quantidades[cartela.id],
    0,
  )

  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Escolha sua participação
          </p>

          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Escolha suas cartelas
          </h1>

          <p className="mx-auto max-w-2xl text-slate-400">
            Selecione as opções desejadas e acompanhe o valor
            do seu pedido em tempo real.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartelas.map((cartela) => (
            <article
              key={cartela.id}
              className={`flex flex-col rounded-2xl border p-6 ${cartela.destaque
                ? 'border-amber-400 bg-amber-400/5'
                : 'border-white/10 bg-white/5'
                }`}
            >
              {cartela.destaque && (
                <span className="mb-4 w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                  DESTAQUE
                </span>
              )}

              <h2 className="mb-3 text-xl font-bold">
                {cartela.nome}
              </h2>

              <p className="mb-6 flex-1 text-sm leading-6 text-slate-400">
                {cartela.descricao}
              </p>

              <p className="mb-6 text-3xl font-extrabold text-amber-400">
                {formatarMoeda(cartela.preco)}
              </p>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-300">
                  Quantidade
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => diminuirQuantidade(cartela.id)}
                    disabled={quantidades[cartela.id] === 0}
                    aria-label={`Diminuir ${cartela.nome}`}
                    className="flex size-10 items-center justify-center rounded-lg border border-white/20 text-xl transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-bold tabular-nums">
                    {quantidades[cartela.id]}
                  </span>

                  <button
                    type="button"
                    onClick={() => aumentarQuantidade(cartela.id)}
                    aria-label={`Aumentar ${cartela.nome}`}
                    className="flex size-10 items-center justify-center rounded-lg bg-amber-400 text-xl font-bold text-slate-950 transition hover:bg-amber-300 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm text-slate-400">
                  Subtotal desta opção
                </p>

                <p className="mt-1 text-lg font-bold">
                  {formatarMoeda(
                    cartela.preco * quantidades[cartela.id],
                  )}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-400">
                Resumo do pedido
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {totalItens} {totalItens === 1 ? 'opção selecionada' : 'opções selecionadas'}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Quantidade total de pacotes ou cartelas selecionados.
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-sm text-slate-400">
                Valor total
              </p>

              <p className="mt-1 text-3xl font-extrabold text-amber-400">
                {formatarMoeda(valorTotal)}
              </p>

              <div className="flex gap-4">

                <button type="button" disabled={totalItens === 0}
                  onClick={zerarQuantidade}
                  aria-label="Limpar todas as quantidades selecionadas"
                  className="mt-4 w-full rounded-xl bg-red-500 px-4 py-2 font-bold text-slate-950 transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto cursor-pointer ">
                  Limpar tudo
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (totalItens == 0) {
                      alert("Por favor, selecione ao menos um item para continuar.");
                      return;
                    }
                    alert(`Pedido demonstrativo: ${formatarMoeda(valorTotal)}`);
                  }}
                  className="mt-4 w-full rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Cartelas
