import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill, BsSearch } from 'react-icons/bs'

const index = () => {

    const [pesquisador, setPesquisador] = useState([])

    useEffect(() => {
        setPesquisador(getAll())
      }, [])
    
      function getAll() {
        return JSON.parse(window.localStorage.getItem('pesquisador')) || []
      }
    
      function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
          const pesquisador = getAll()
          pesquisador.splice(id, 1)
          window.localStorage.setItem('pesquisador', JSON.stringify(pesquisador))
          setPesquisador(pesquisador)
        }
      }
      
    return (
        <>
            <Pagina titulo="Pesquisador">
                <Link href={'/pesquisador/form/'} className="btn btn-dark mb-2" >Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th> <BsSearch/> </th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Curso</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Cidade</th>
                            <th>Número</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>
                    <tbody>

                        {pesquisador.map((item, i) => (

                            <tr key={i}>
                                <td>
                                    <Link href={'/pesquisador/' + i} >
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.curso}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.cidade}</td>
                                <td>{item.numero}</td>
                                <td>{item.bairro}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>

    )
}

export default index