import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import Menu from './Menu'

function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function carregar() {

            try {

                const response = await api.get('/filmes')
                
                setFilmes(response.data)

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

                <h1 className='mb-4'>
                    Lista de Filmes
                </h1>

                <div className='row justify-content-center'>

                    {
                        filmes.map((filme) => (

                            <div className='col-md-3 mb-4' key={filme.id}>

                                <Link to={`/read/${filme.id}`} 
                                    className='text-decoration-none text-dark'
                                >

                                <div className='card h-100'>

                                    <div className='card-body'>

                                        <h6>
                                            ID: {filme.id}
                                        </h6>

                                        <h5 className='card-title'>  
                                            {filme.nome}
                                        </h5>

                                        <p>
                                            Gênero: {filme.genero}
                                        </p>

                                        <p>
                                            Ano: {filme.ano}
                                        </p>

                                    </div>

                                </div>

                                </Link>

                            </div>

                        ))
                                }

                </div>

            </div>

        </div>

    )
}

export default Home