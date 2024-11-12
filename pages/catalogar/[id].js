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

            const catalogar = JSON.parse(window.localStorage.getItem('catalogar'))
            const curso = catalogar[query.id]
            console.log (curso)
            
          for(let atributo in curso){
            setValue(atributo, curso[atributo])
          }
        } 
    }, [query.id])

        function salvar(dados) {
        const catalogar = JSON.parse(window.localStorage.getItem('catalogar')) || []
        catalogar.splice(query.id, 1, dados)
        window.localStorage.setItem('catalogar', JSON.stringify(catalogar))
        push('/catalogar')
    }

    return (
        <Pagina titulo="Catalogar">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ncientifico">
                    <Form.Label>N Cientifico: </Form.Label>
                    <Form.Control type="text" {...register('ncientifico')} />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="reino">
                    <Form.Label>Reino: </Form.Label>
                    <Form.Control type="text" {...register('reino')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="classe">
                    <Form.Label>Classe: </Form.Label>
                    <Form.Control type="text" {...register('classe')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="filo">
                    <Form.Label>Filo: </Form.Label>
                    <Form.Control type="text" {...register('filo')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="ordem">
                    <Form.Label>Ordem: </Form.Label>
                    <Form.Control type="text" {...register('ordem')} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="genero">
                    <Form.Label>Gênero: </Form.Label>
                    <Form.Control  type="text" {...register('genero')} />
       
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="familia">
                    <Form.Label>Família: </Form.Label>
                    <Form.Control type="text" {...register('familia')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="especie">
                    <Form.Label>Espécie: </Form.Label>
                    <Form.Control type="text" {...register('especie')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="alimentacao">
                    <Form.Label>Alimentação: </Form.Label>
                    <Form.Control type="text" {...register('alimentacao')} />   
                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        <AiOutlineCheck className='me-1' />
                        Salvar
                    </Button>
                    <Link href={'/catalogar'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default forms