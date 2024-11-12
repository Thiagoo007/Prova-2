import React from 'react'
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cursoValidator from '@/validator/cursoValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }

    function handleChange (event){
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute("mask")
    
        setValue(name, mask(value, mascara))
    }


   
    return (
        <Pagina titulo="Curso">
            <Form>
                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso: </Form.Label>
                    <Form.Control isInvalid={errors.curso} type="text" 
                    {...register('curso', cursoValidator.curso)} />
                {
                    errors.curso &&
                    <smal>{errors.curso.message}</smal>
                }
                
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="universidade">
                    <Form.Label>Universidade: </Form.Label>
                    <Form.Control isInvalid={errors.universidade} type="text" 
                    {...register('universidade', cursoValidator.universidade)} />
                {
                    errors.universidade &&
                    <smal>{errors.universidade.message}</smal>
                }
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control isInvalid={errors.duracao} type="text"  
                    {...register('duracao', cursoValidator.duracao)} 
                    mask="99-semestres"
                    onChange={handleChange} />
                    
                    {
                    errors.duracao &&
                        <smal>{errors.duracao.message}</smal>
                }

                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade:</Form.Label>
                    <Form.Select {...register('modalidade', cursoValidator.modalidade)} aria-label="Default select example">
                        <option>Escolha o modelo abaixo</option>
                        <option value="presencial">Presencial</option>
                        <option value="semipresencial">Semipresencial</option>
                        <option value="EAD">EAD</option>
                    </Form.Select>

                    {
                    errors.modalidade &&
                        <smal>{errors.modalidade.message}</smal>
                }

                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        
                        Salvar
                    </Button>
                    <Link href={'/cursos'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form