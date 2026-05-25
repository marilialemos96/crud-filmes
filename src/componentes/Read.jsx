import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import api from '../services/api'
import Menu from './Menu'

function Read() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [filme, setFilme] = useState({})

    useEffect(() => {

        async function carregar() {

            try {

                const response = await api.get(`/filmes/${id}`)

                setFilme(response.data)

            }
            catch(error) {

                console.log(error)

            }

        }

        carregar()

    }, [])

    return (

        <div>

            <Menu />

            <div className='container mt-5'>

                <div className='card p-5'>

                    <h1 className='mb-4'>
                        Detalhes do Filme
                    </h1>

                    <h3>
                        ID: {filme.id}
                    </h3>

                    <h3>
                        Nome: {filme.nome}
                    </h3>

                    <h3>
                        Gênero: {filme.genero}
                    </h3>

                    <h3>
                        Ano: {filme.ano}
                    </h3>

                    <button 
                        className='btn btn-secondary mt-4' 
                        onClick={() => navigate('/')}>
                        Voltar
                    </button>

                </div>

            </div>

        </div>

    )
}

export default Read