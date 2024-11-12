import React, { useEffect } from 'react'
import Pagina from '@/components/Pagina'
import Footer from '@/components/Footer'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link'



const forms = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    return (
        <Pagina titulo="Biologar">
            <Footer>

            <Form>
                <div>
                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        <AiOutlineCheck className='me-1' />
                        Salvar
                    </Button>
                    <Link href={'/biologar'} className="ms-2 btn btn-danger">
                        
                        Voltar
                    </Link>
                </div>
            </Form>
            </Footer>
        </Pagina>
    )
}

export default forms