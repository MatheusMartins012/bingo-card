
import { Link, useLocation } from 'react-router-dom'

function Confirmacao() {
    const location = useLocation()
    const pedido = location.state

    const formatarMoeda = (valor) =>
        valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })

    if (!pedido) {
        return (
            <main className="min-h-screen bg-slate-950 px-6 py-20 text-center text-white">
                <h1 className="text-3xl font-extrabold">
                    Nenhum pedido encontrado
                </h1>

                <p className="mt-4 text-slate-400">
                    Preencha seus dados para visualizar a confirmação.
                </p>

                <Link
                    to="/cartelas"
                    className="mt-8 inline-block rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950"
                >
                    Voltar às cartelas
                </Link>
            </main>
        )
    }

    const { cliente, itens, total } = pedido

    const quantidadeTotal = itens.reduce(
        (total, item) => total + item.quantidade,
        0,
    )


    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <div className="mx-auto max-w-3xl">
                <section className="mb-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-center">
                    <div className="mb-4 text-5xl">✓</div>

                    <h1 className="text-3xl font-extrabold md:text-4xl">
                        Pedido preparado!
                    </h1>

                    <p className="mt-3 text-slate-300">
                        Este é um resumo demonstrativo. Nenhum pagamento foi realizado.
                    </p>
                </section>

                <section className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-5 text-xl font-bold">
                        Dados do cliente
                    </h2>

                    <div className="space-y-3 text-sm">
                        <p>
                            <span className="text-slate-400">Nome: </span>
                            {cliente.nome}
                        </p>

                        <p>
                            <span className="text-slate-400">E-mail: </span>
                            {cliente.email}
                        </p>

                        <p>
                            <span className="text-slate-400">Telefone: </span>
                            {cliente.telefone}
                        </p>

                        <p>
                            <span className="text-slate-400">CPF: </span>
                            {cliente.cpf}
                        </p>
                    </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-5 text-xl font-bold">
                        Itens do pedido
                    </h2>

                    <ul className="space-y-4">
                        {itens.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between gap-4 border-b border-white/10 pb-4"
                            >
                                <div>
                                    <p className="font-semibold">{item.nome}</p>

                                    <p className="mt-1 text-sm text-slate-400">
                                        {item.quantidade} × {formatarMoeda(item.preco)}
                                    </p>
                                </div>

                                <p className="font-bold">
                                    {formatarMoeda(item.quantidade * item.preco)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex justify-between gap-4">
                        <span className="font-bold">Total demonstrativo</span>

                        <span className="text-xl font-extrabold text-amber-400">
                            {formatarMoeda(total)}
                        </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-400">
                        Quantidade total de itens: {quantidadeTotal}
                    </p>
                </section>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/"
                        className="rounded-xl border border-white/20 px-6 py-3 font-bold transition hover:bg-white/10"
                    >
                        Voltar ao início
                    </Link>

                    <Link
                        to="/cartelas"
                        className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
                    >
                        Ver cartelas
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Confirmacao
