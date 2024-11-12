import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill, BsMortarboardFill } from 'react-icons/bs'

const index = () => {

    const [universidade, setUniversidade] = useState([])

    useEffect(() => {
        setUniversidade(getAll())
      }, [])
    
      function getAll() {
        return JSON.parse(window.localStorage.getItem('universidade')) || []
      }
    
      function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
          const universidade = getAll()
          universidade.splice(id, 1)
          window.localStorage.setItem('universidade', JSON.stringify(universidade))
          setUniversidade(universidade)
        }
      }
      
    return (
        <>
            <Pagina titulo="Universidade">
                <Link href={'/universidade/form/'} className="btn btn-dark mb-2" >Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th> <BsMortarboardFill/> </th>
                            <th>Nome</th>
                            <th>Cnpj</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Cidade</th>
                            <th>Número</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>
                    <tbody>

                        {universidade.map((item, i) => (

                            <tr key={i}>
                                <td>
                                    <Link href={'/universidade/' + i} >
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cnpj}</td>
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