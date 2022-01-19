import React, {useState} from 'react';

import './style.css'

export default function NovoCliente(){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = usestate('')
    const [sexo, setSexo] = useState('')

    return(
        <div classNome="novo-cliente-container">
            <section className="titulo-cadastro-cliente">
                <h1>Cadastro de Clientes</h1>
            </section>
            <section className="cliente-form">
                <form action="">
                    <label>
                        Nome:
                    <input 
                    value={nome}
                    onChange={ e => setNome(e.target.value)}
                    />
                     </label>

                     <label>
                         Sobrenome:
                    <input
                    value={sobrenome}
                    onChange={e => setSobrenome(e.target.value)}
                    />
                    </label>

                    <label htmlFor="cpf">
                        CPF:
                        <input
                    nome="cpf"
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    </label>

                    <label htmlfor="">
                        Sexo:
                        <input 
                    placeholder="Sexo"
                    value={sexo}
                    onChange={e => setSexo(e.target.value)}
                    />

                </form>

            </section>
        </div>
    )
}