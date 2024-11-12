import React from 'react'
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import pesquisadorValidator from '@/validator/pesquisadorValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        const pesquisador = JSON.parse(window.localStorage.getItem('pesquisador')) || []
        pesquisador.push(dados)
        window.localStorage.setItem('pesquisador', JSON.stringify(pesquisador))
        push('/pesquisador')
    }

    function handleChange (event){
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute("mask")
    
        setValue(name, mask(value, mascara))
    }


   
    return (
        <Pagina titulo="Pesquisador">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" 
                    {...register('nome', pesquisadorValidator.nome)} />
                {
                    errors.nome &&
                    <smal>{errors.nome.message}</smal>
                }
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="text" 
                    {...register('cpf', pesquisadorValidator.cpf)}
                    mask="999.999.999-99"
                    onChange={handleChange} />
                {
                    errors.cpf &&
                    <smal>{errors.cpf.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso: </Form.Label>
                        <Form.Control isInvalid={errors.curso} type="text" 
                        {...register('curso', pesquisadorValidator.curso)} />
                {
                    errors.curso &&
                    <smal>{errors.curso.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                      <Form.Control isInvalid={errors.email} type="text" 
                      {...register('email', pesquisadorValidator.email)} />
                {
                    errors.email &&
                    <smal>{errors.email.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" 
                    {...register('telefone', pesquisadorValidator.telefone)}
                    mask="(99) 99999-9999"
                    onChange={handleChange} />
                {
                    errors.telefone &&
                    <smal>{errors.telefone.message}</smal>
                }

                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                        <Form.Control isInvalid={errors.cep} type="text" 
                        {...register('cep', pesquisadorValidator.cep)}
                        mask="99.999-999"
                        onChange={handleChange} />
                {
                    errors.cep &&
                    <smal>{errors.cep.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                        <Form.Control isInvalid={errors.cidade} type="text" 
                        {...register('cidade', pesquisadorValidator.cidade)} />
                {
                    errors.Cidade &&
                    <smal>{errors.Cidade.message}</smal>
                }

                </Form.Group>
                
                
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                     <Form.Control isInvalid={errors.numero} type="text" 
                     {...register('numero', pesquisadorValidator.numero)} />
                {
                    errors.numero &&
                    <smal>{errors.numero.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                       <Form.Control isInvalid={errors.bairro} type="text" 
                       {...register('bairro', pesquisadorValidator.bairro)} />
                {
                    errors.bairro &&
                    <smal>{errors.bairro.message}</smal>
                }

                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        
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

export default form