import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'
import Menu from './Menu'

function Delete() {

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

    async function apagar() {

        try {

            await api.delete(`/filmes/${idBusca}`)

            setMensagem('Filme apagado com sucesso')

            setIdBusca('')
            setNome('')
            setGenero('')
            setAno('')

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

                    <h1 className='mb-4 text-center'>
                        Apagar Filme
                    </h1>

                    <input
                        className='form-control mb-3'
                        placeholder='ID'
                        value={idBusca}
                        onChange={(e) => setIdBusca(e.target.value)}
                    />

                    <button
                        className='btn btn-primary mb-4 w-100'
                        onClick={buscar}
                    >
                        Buscar
                    </button>

                    {
                        nome && (

                            <div>

                                <input
                                    className='form-control mb-3'
                                    value={nome}
                                    disabled
                                />

                                <input
                                    className='form-control mb-3'
                                    value={genero}
                                    disabled
                                />

                                <input
                                    className='form-control mb-3'
                                    value={ano}
                                    disabled
                                />

                            </div>

                        )
                    }

                    <div className='d-flex gap-2 mb-3'>

                        <button
                            className='btn btn-danger'
                            onClick={apagar}
                        >
                            Apagar
                        </button>

                        <button
                            className='btn btn-secondary'
                            onClick={() => navigate('/')}
                        >
                            Cancelar
                        </button>

                    </div>

                    <p>
                        {mensagem}
                    </p>

                </div>

            </div>

        </div>

    )
}

export default Delete