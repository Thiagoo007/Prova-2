import React from 'react'
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import catalogarValidator from '@/validator/catalogarValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        const catalogar = JSON.parse(window.localStorage.getItem('catalogar')) || []
        catalogar.push(dados)
        window.localStorage.setItem('catalogar', JSON.stringify(catalogar))
        push('/catalogar')
    }

    function handleChange (event){
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute("mask")
    
        setValue(name, mask(value, mascara))
    }


   
    return (
        <Pagina titulo="Catalogar">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" 
                    {...register('nome', catalogarValidator.nome)} />
                {
                    errors.nome &&
                    <smal>{errors.nome.message}</smal>
                }

                </Form.Group>

                <Form.Group className="mb-3" controlId="ncientifico">
                    <Form.Label>N Cientifico: </Form.Label>
                    <Form.Control isInvalid={errors.ncientifico} type="text" 
                    {...register('ncientifico', catalogarValidator.ncientifico)} />
                {
                    errors.ncientifico &&
                    <smal>{errors.ncientifico.message}</smal>
                }
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="reino">
                    <Form.Label>Reino: </Form.Label>
                    <Form.Control isInvalid={errors.reino} type="text" 
                    {...register('reino', catalogarValidator.reino)} />
                {
                    errors.reino &&
                    <smal>{errors.reino.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="classe">
                    <Form.Label>Classe: </Form.Label>
                    <Form.Control isInvalid={errors.classe} type="text" 
                    {...register('classe', catalogarValidator.classe)} />
                {
                    errors.classe &&
                    <smal>{errors.classe.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="filo">
                    <Form.Label>Filo: </Form.Label>
                    <Form.Control isInvalid={errors.filo} type="text" 
                    {...register('filo', catalogarValidator.filo)} />
                {
                    errors.filo &&
                    <smal>{errors.filo.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="ordem">
                    <Form.Label>Ordem: </Form.Label>
                    <Form.Control isInvalid={errors.ordem} type="text" 
                    {...register('ordem', catalogarValidator.ordem)} />
                {
                    errors.ordem &&
                    <smal>{errors.ordem.message}</smal>
                }
                </Form.Group>

                <Form.Group className="mb-3" controlId="genero">
                    <Form.Label>Gênero: </Form.Label>
                    <Form.Control isInvalid={errors.genero} type="text" 
                    {...register('genero', catalogarValidator.genero)} />
                {
                    errors.genero &&
                    <smal>{errors.genero.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="familia">
                    <Form.Label>Família: </Form.Label>
                    <Form.Control isInvalid={errors.familia} type="text" 
                    {...register('familia', catalogarValidator.familia)} />
                {
                    errors.familia &&
                    <smal>{errors.familia.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="especie">
                    <Form.Label>Espécie: </Form.Label>
                    <Form.Control isInvalid={errors.especie} type="text" 
                    {...register('especie', catalogarValidator.especie)} />
                {
                    errors.especie &&
                    <smal>{errors.especie.message}</smal>
                }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="alimentacao">
                    <Form.Label>Alimentação:</Form.Label>
                    <Form.Select {...register('alimentacao', catalogarValidator.alimentacao)} aria-label="Default select example">
                        <option>Escolha o modelo abaixo</option>
                        <option value="carnivoro">Carnívoro</option>
                        <option value="herbivoro">Herbívoro</option>
                        <option value="detritivoro">detritívoro</option>
                        <option value="onivoro">Onívoro</option>
                        <option value="invertivoro">Invertívoro</option>
                        <option value="detritivo">Detritívoro</option>
                        <option value="perifitivoro">Perifitívoro</option>
                    </Form.Select>

                    {
                    errors.alimentacao &&
                        <smal>{errors.alimentacao.message}</smal>
                }
                </Form.Group>

                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        
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

export default form