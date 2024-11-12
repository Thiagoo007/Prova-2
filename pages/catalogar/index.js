import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillBookFill,  BsFillBookmarkCheckFill,  BsFillPencilFill, BsJournalText } from 'react-icons/bs'

const index = () => {

    const [catalogar, setCatalogar] = useState([])

    useEffect(() => {
        setCatalogar(getAll())
      }, [])
    
      function getAll() {
        return JSON.parse(window.localStorage.getItem('catalogar')) || []
      }
    
      function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
          const catalogar = getAll()
          catalogar.splice(id, 1)
          window.localStorage.setItem('catalogar', JSON.stringify(catalogar))
          setCatalogar(catalogar)
        }
      }
      
    return (
        <>
            <Pagina titulo="Catalogar">
                <Link href={'/catalogar/form/'} className="btn btn-dark mb-2" >Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th> <BsJournalText/> </th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Reino</th>
                            <th>Classe</th>
                            <th>Filo</th>
                            <th>Ordem</th>
                            <th>Gênero</th>
                            <th>Família</th>
                            <th>Espécie</th>
                            <th>Alimentação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {catalogar.map((item, i) => (

                            <tr key={i}>
                                <td>
                                    <Link href={'/catalogar/' + i} >
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.ncientifico}</td>
                                <td>{item.reino}</td>
                                <td>{item.classe}</td>
                                <td>{item.filo}</td>
                                <td>{item.ordem}</td>
                                <td>{item.genero}</td>
                                <td>{item.familia}</td>
                                <td>{item.especie}</td>
                                <td>{item.alimentacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>

    )
}

export default index