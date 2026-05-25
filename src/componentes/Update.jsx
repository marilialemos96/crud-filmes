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
    const [filmeSearch, setFlmeSearch] = useState(false);

    const [mensagem, setMensagem] = useState({
        tipo: '',
        texto: ''
    });

    function validate() {
        if(!nome.trim()) {
            return "Campo nome inválido."
        }
        if(!genero.trim()) {
            return "Campo gênero inválido."
            
        }
        if(!ano.trim() || isNaN(ano)) {
            return "Campo ano inválido."
        }
        return null;
    }

    async function buscar() {
        try {

            const response = await api.get(`/filmes/${idBusca}`)

            setNome(response.data.nome)
            setGenero(response.data.genero)
            setAno(response.data.ano)
            setFlmeSearch(true)

            setMensagem({
                tipo: '',
                texto: ''
            });

        }
        catch(error) {

            setMensagem({
                tipo: 'erro',
                texto: 'Filme não cadastrado'
            });

            setNome('')
            setGenero('')
            setAno('')

        }

    }

    async function alterar() {

        const validateError = validate();
        if (validateError) { 
            setMensagem({
                tipo: 'erro',
                texto: validateError
            });
            return;
        }

        try {

            await api.put(`/filmes/${idBusca}`, {

                nome: nome.trim(),
                genero: genero.trim(),
                ano: ano.trim()

            })

            setMensagem({
                tipo: 'sucesso',
                texto: 'Filme alterado com sucesso'
            })

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

                    {mensagem.texto && (
                        <div className={`alert ${mensagem.tipo === 'erro' ? 'alert-danger' : 'alert-success'}`}>{mensagem.texto}</div>
                    )}

                    <input
                        className='form-control mb-4'
                        value={idBusca}
                        placeholder='ID'
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
                        filmeSearch && (

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
                </div>

            </div>

        </div>

    )
}

export default Update