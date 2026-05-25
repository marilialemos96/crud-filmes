import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'
import Menu from './Menu'

function Update() {

    const navigate = useNavigate()

    const [idBusca, setIdBusca] = useState('')

    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')

    const [mensagem, setMensagem] = useState('')

    async function buscar() {

        try {

            const response = await api.get(`/filmes/${idBusca}`)

            setNome(response.data.nome)
            setGenero(response.data.genero)
            setAno(response.data.ano)

            setMensagem('')

        }
        catch(error) {

            setMensagem('Filme não cadastrado')

            setNome('')
            setGenero('')
            setAno('')

        }

    }

    async function alterar() {

        try {

            await api.put(`/filmes/${idBusca}`, {

                nome,
                genero,
                ano

            })

            setMensagem('Filme alterado com sucesso')

        }
        catch(error) {

            console.log(error)

        }

    }

    return (

        <div>

            <Menu />

            <div className='container mt-5'>

                <div className='card p-4'>

                    <h1 className='mb-5 text-center'>
                        Busca e Edição de Filme
                    </h1>

                    <label className='form-label'>
                        Id:
                    </label>

                    <input
                        className='form-control mb-4'
                        value={idBusca}
                        onChange={(e) => setIdBusca(e.target.value)}
                    />

                    <div className='d-flex gap-2 mb-5'>

                        <button
                            className='btn btn-primary'
                            onClick={buscar}
                        >
                            Procurar
                        </button>

                        <button
                            className='btn btn-secondary'
                            onClick={() => navigate('/')}
                        >
                            Cancelar
                        </button>

                    </div>

                    {
                        nome && (

                            <div>

                                <label className='form-label'>
                                    Nome:
                                </label>

                                <input
                                    className='form-control mb-4'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <label className='form-label'>
                                    Gênero:
                                </label>

                                <input
                                    className='form-control mb-4'
                                    value={genero}
                                    onChange={(e) => setGenero(e.target.value)}
                                />

                                <label className='form-label'>
                                    Ano:
                                </label>

                                <input
                                    className='form-control mb-4'
                                    value={ano}
                                    onChange={(e) => setAno(e.target.value)}
                                />

                                <div className='d-flex gap-2 mb-3'>

                                    <button
                                        className='btn btn-primary'
                                        onClick={alterar}
                                    >
                                        Alterar
                                    </button>

                                    <button
                                        className='btn btn-secondary'
                                        onClick={() => navigate('/')}
                                    >
                                        Cancelar
                                    </button>

                                </div>

                            </div>

                        )
                    }

                    <p>
                        {mensagem}
                    </p>

                </div>

            </div>

        </div>

    )
}

export default Update