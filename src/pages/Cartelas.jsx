
import Button from '../components/Button'

function Cartelas() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
          Garanta sua participação
        </p>

        <h1 className="mb-4 text-4xl font-extrabold">
          Escolha suas cartelas
        </h1>

        <p className="mb-8 text-slate-400">
          Em breve você poderá selecionar a quantidade de
          cartelas e acompanhar o valor do seu pedido.
        </p>

        <Button onClick={() => alert('Vamos implementar o carrinho na próxima etapa!')}>
          Conhecer as cartelas
        </Button>
      </div>
    </main>
  )
}

export default Cartelas
