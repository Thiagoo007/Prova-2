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

            const universidade = JSON.parse(window.localStorage.getItem('universidade'))
            const curso = universidade[query.id]
            console.log (curso)
            
          for(let atributo in curso){
            setValue(atributo, curso[atributo])
          }
        } 
    }, [query.id])

        function salvar(dados) {
        const universidade = JSON.parse(window.localStorage.getItem('universidade')) || []
        universidade.splice(query.id, 1, dados)
        window.localStorage.setItem('universidade', JSON.stringify(universidade))
        push('/universidade')
    }

    return (
        <Pagina titulo="Universidade">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf: </Form.Label>
                    <Form.Control type="text"  {...register('cpf')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control type="text"  {...register('matricula')} />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text"  {...register('email')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="text"  {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                    <Form.Control type="text"  {...register('cep')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control type="text"  {...register('cidade')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control type="text"  {...register('numero')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text"  {...register('bairro')} />
                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        <AiOutlineCheck className='me-1' />
                        Salvar
                    </Button>
                    <Link href={'/universidade'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default forms