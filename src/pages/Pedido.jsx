
import { useState } from 'react'
import { cartelas } from '../data/cartelas'
import { useNavigate } from 'react-router-dom'

function Pedido() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [cpf, setCpf] = useState('')

    const quantidadesSalvas = JSON.parse(
        localStorage.getItem('bingo-quantidades') || '{}',
    )

    const cartelasSelecionadas = cartelas.filter(
        (cartela) => (quantidadesSalvas[cartela.id] || 0) > 0,
    )

    const totalPedido = cartelasSelecionadas.reduce(
        (total, cartela) =>
            total + cartela.preco * quantidadesSalvas[cartela.id],
        0,
    )



    const formatarMoeda = (valor) =>
        valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })

    function lidarComEnvio(evento) {
        evento.preventDefault()

        if (!nome.trim() || !email.trim() || !telefone.trim() || !cpf.trim()) {
            setMensagem('Preencha todos os campos.')
            return
        }


        navigate('/confirmacao', {
            state: {
                cliente: {
                    nome,
                    email,
                    telefone,
                    cpf,
                },

                itens: cartelasSelecionadas.map((cartela) => ({
                    id: cartela.id,
                    nome: cartela.nome,
                    preco: cartela.preco,
                    quantidade: quantidadesSalvas[cartela.id],
                })),

                total: totalPedido,
            },
        })

    }

    function voltarPagina() {

        navigate('/cartelas')

    }

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <div className="mx-auto max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
                    Quase lá
                </p>

                <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
                    Seus dados
                </h1>

                <p className="mb-8 text-slate-400">
                    Preencha seus dados para continuar com o pedido demonstrativo.
                </p>


                <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-4 text-xl font-bold">
                        Resumo do pedido
                    </h2>

                    {cartelasSelecionadas.length === 0 ? (
                        <p className="text-slate-400">
                            Nenhuma cartela foi selecionada.
                        </p>
                    ) : (
                        <ul className="space-y-3">
                            {cartelasSelecionadas.map((cartela) => (
                                <li
                                    key={cartela.id}
                                    className="flex justify-between gap-4 text-sm"
                                >
                                    <span className="text-slate-300">
                                        {cartela.nome} × {quantidadesSalvas[cartela.id]}
                                    </span>

                                    <span className="font-bold">
                                        {formatarMoeda(
                                            cartela.preco * quantidadesSalvas[cartela.id],
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="mt-5 flex justify-between border-t border-white/10 pt-4">
                        <span className="font-bold">Total</span>

                        <span className="text-xl font-extrabold text-amber-400">
                            {formatarMoeda(totalPedido)}
                        </span>
                    </div>
                </section>


                <form
                    onSubmit={lidarComEnvio}
                    className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
                >
                    <div>
                        <label htmlFor="nome" className="mb-2 block text-sm font-medium">
                            Nome completo
                        </label>

                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(evento) => setNome(evento.target.value)}
                            placeholder="Digite seu nome"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            E-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(evento) => setEmail(evento.target.value)}
                            placeholder="voce@exemplo.com"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="telefone" className="mb-2 block text-sm font-medium">
                            Telefone
                        </label>

                        <input
                            id="telefone"
                            type="tel"
                            value={telefone}
                            onChange={(evento) => setTelefone(evento.target.value)}
                            placeholder="(00) 00000-0000"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="CPF" className="mb-2 block text-sm font-medium">
                            CPF
                        </label>

                        <input
                            id="CPF"
                            type="tel"
                            value={cpf}
                            onChange={(evento) => setCpf(evento.target.value)}
                            placeholder="000000000-00"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300 cursor-pointer"
                    >
                        Finalizar pedido
                    </button>

                    <button
                        type="button"
                        onClick={voltarPagina}
                        className="w-full rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300 cursor-pointer"
                    >
                        Voltar
                    </button>

                    {mensagem && (
                        <p role="status" className="text-sm text-amber-400">
                            {mensagem}
                        </p>
                    )}
                </form>
            </div>
        </main>
    )
}

export default Pedido
