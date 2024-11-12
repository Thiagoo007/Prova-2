import React from 'react'
import { Container } from 'react-bootstrap'
import { BsGithub, BsGoogle, BsInstagram, BsWhatsapp } from 'react-icons/bs'


const Footer = () => {
    return (

    <>
        <Container>

            <footer className="text-center text-white fixed-bottom" 
            style={{ backgroundImage: 'linear-gradient(to right, #5E887C,#8D9E96,#5E887C)' }}>

                <div className="container pt-0">

                    <section className="mb-1">


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwi97qLu-ub_AhWSBdQKHUhqA8UQPAgJ"
                            role="button"
                            data-mdb-ripple-color="white"
                            ><BsGoogle />
                        </a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="https://www.instagram.com/iesb_oficial/"
                            role="button"
                            data-mdb-ripple-color="white"
                            ><BsInstagram />
                        </a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="https://web.whatsapp.com"
                            role="button"
                            data-mdb-ripple-color="white"
                            ><BsWhatsapp />
                        </a>
                        
                    </section>

                </div>

                <div class="text-center text-white p-1" style={{ backgroundColor: '#1D4E55' }}>
                    © 2024 Copyright     © desenvolvedor: Thiago Moreira
                    <a class="text-white" >{'  '} </a>
                </div>

            </footer>
        </Container>
    </>
  )
}

export default Footer