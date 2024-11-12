import React from 'react'
import Pagina from '@/components/Pagina'
import Footer from '@/components/Footer'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const biologar = JSON.parse(window.localStorage.getItem('biologar')) || []
        biologar.push(dados)
        window.localStorage.setItem('biologar', JSON.stringify(biologar))
        push('/biologar')
    }

    return (
        <Pagina titulo="Biologar">
            
            <Form>
                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        
                        Salvar
                    </Button>
                    <Link href={'/biologar'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form