import React from 'react'
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import universidadeValidator from '@/validator/universidadeValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        const universidade = JSON.parse(window.localStorage.getItem('universidade')) || []
        universidade.push(dados)
        window.localStorage.setItem('universidade', JSON.stringify(universidade))
        push('/universidade')
    }

    function handleChange (event){
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute("mask")
    
        setValue(name, mask(value, mascara))
    }


   
    return (
        <Pagina titulo="Universidade">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" 
                    {...register('nome', universidadeValidator.nome)} />
                {
                    errors.nome &&
                    <smal>{errors.nome.message}</smal>
                }

                </Form.Group>

                <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>Cnpj: </Form.Label>
                    <Form.Control isInvalid={errors.cnpj} type="text" 
                    {...register('cnpj', universidadeValidator.cpf)}
                    mask="99.999.999/9999-99"
                    onChange={handleChange} />
                {
                    errors.cpf &&
                    <smal>{errors.cnpj.message}</smal>
                }

                </Form.Group>
               
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" 
                    {...register('email', universidadeValidator.email)} />
                {
                    errors.email &&
                    <smal>{errors.email.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" 
                    {...register('telefone', universidadeValidator.telefone)}
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
                    {...register('cep', universidadeValidator.cep)}
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
                    {...register('cidade', universidadeValidator.cidade)} />
                {
                    errors.cidade &&
                    <smal>{errors.cidade.message}</smal>
                }

                </Form.Group>
                
                
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" 
                    {...register('numero', universidadeValidator.numero)} />
                {
                    errors.numero &&
                    <smal>{errors.numero.message}</smal>
                }

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" 
                    {...register('bairro', universidadeValidator.bairro)} />
                {
                    errors.bairro &&
                    <smal>{errors.bairro.message}</smal>
                }

                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        
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

export default form