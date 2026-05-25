import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'
import Menu from './Menu'

function Create() {

    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')

    async function salvar(e) {

        e.preventDefault()

        try {

            await api.post('/filmes', {

                nome,
                genero,
                ano

            })

            navigate('/')

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

                    <h1 className='mb-4'>
                        Criar Filme
                    </h1>

                    <form onSubmit={salvar}>

                        <input
                            className='form-control mb-3'
                            placeholder='Nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            className='form-control mb-3'
                            placeholder='Genero'
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />

                        <input
                            className='form-control mb-3'
                            placeholder='Ano'
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                        />

                        <div className='d-flex gap-2'>

                            <button className='btn btn-success'>
                                Criar
                            </button>

                            <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={() => navigate('/')}
                            >
                                Cancelar
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    )
}

export default Create