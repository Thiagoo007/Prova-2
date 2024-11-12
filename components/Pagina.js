import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './Cabecalho';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

const Pagina = (props) => {
    return (
        <>
        
            <Cabecalho />
            <div style={{ backgroundColor: '#1D4E55' }} className=' py-5 text-white text-center mb-3'>
                <Container>
                    <h1>
                        {props.titulo}
                    </h1>
                </Container>
            </div>

            <Container className='mb-5 pb-4'>
                {props.children}
            </Container>
            <Footer/>
        </>
    )

}

export default Pagina