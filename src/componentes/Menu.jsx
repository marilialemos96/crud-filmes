import { Link } from 'react-router-dom'

function Menu() {

    return (

        <nav className='navbar navbar-dark bg-dark px-4'>

            <h3 className='text-white'>
                CRUD Filmes
            </h3>

            <div className='d-flex gap-2'>

                <Link
                    className='btn btn-light'
                    to='/'
                >
                    Inicio
                </Link>

                <Link
                    className='btn btn-success'
                    to='/create'
                >
                    Criar
                </Link>

                <Link
                    className='btn btn-success'
                    to='/Update'
                >
                    Alterar
                </Link>

                <Link
                    className='btn btn-success'
                    to='/delete'
                >
                    Apagar
                </Link>

            </div>

        </nav>

    )
}

export default Menu