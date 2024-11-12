import React, { useEffect } from 'react'
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link'


const forms = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if(query.id) {

            const pesquisador = JSON.parse(window.localStorage.getItem('pesquisador'))
            const curso = pesquisador[query.id]
            console.log (curso)
            
          for(let atributo in curso){
            setValue(atributo, curso[atributo])
          }
        } 
    }, [query.id])

        function salvar(dados) {
        const pesquisador = JSON.parse(window.localStorage.getItem('pesquisador')) || []
        pesquisador.splice(query.id, 1, dados)
        window.localStorage.setItem('pesquisador', JSON.stringify(pesquisador))
        push('/pesquisador')
    }

    return (
        <Pagina titulo="Pesquisador">
            <Form>
                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso: </Form.Label>
                    <Form.Control type="text" {...register('curso')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="universidade">
                    <Form.Label>Universidade: </Form.Label>
                    <Form.Control type="text" {...register('universidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="text"  {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text"  {...register('modalidade')} />
                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        <AiOutlineCheck className='me-1' />
                        Salvar
                    </Button>
                    <Link href={'/pesquisador'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default forms