import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill, BsMortarboardFill } from 'react-icons/bs'
import InputMask from 'react-input-mask' // Importando a biblioteca para máscaras

// Função para validar CNPJ
const validarCNPJ = (cnpj) => {
  const regex = /^\d{14}$/;
  return regex.test(cnpj);
}


const validarEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

const validarTelefone = (telefone) => {
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(telefone);
}


const validarCEP = (cep) => {
  const regex = /^\d{5}-\d{3}$/;
  return regex.test(cep);
}

const Index = () => {

    const [universidade, setUniversidade] = useState([])
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        nome: '',
        cnpj: '',
        email: '',
        telefone: '',
        cep: '',
        cidade: '',
        numero: '',
        bairro: ''
    })

    useEffect(() => {
        // Inicializa a lista de universidades ao carregar a página
        setUniversidade(getAll())
    }, [])
    
    
    function getAll() {
        return JSON.parse(window.localStorage.getItem('universidade')) || []
    }
    
    // Função para excluir uma universidade
    function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
            const universidades = getAll()
            universidades.splice(id, 1)
            window.localStorage.setItem('universidade', JSON.stringify(universidades))
            setUniversidade(universidades) // Atualiza o estado para refletir a exclusão
        }
    }

    // Função para validar o formulário antes de salvar
    const validarFormulario = () => {
        const erros = {}

        // Validações dos campos
        if (!formData.nome) erros.nome = 'O nome da universidade é obrigatório.'
        if (!formData.cnpj) erros.cnpj = 'O CNPJ é obrigatório.'
        if (formData.cnpj && !validarCNPJ(formData.cnpj)) erros.cnpj = 'CNPJ inválido.'
        
        if (!formData.email) erros.email = 'O e-mail é obrigatório.'
        if (formData.email && !validarEmail(formData.email)) erros.email = 'E-mail inválido.'
        
        if (!formData.telefone) erros.telefone = 'O telefone é obrigatório.'
        if (formData.telefone && !validarTelefone(formData.telefone)) erros.telefone = 'Telefone inválido.'
        
        if (!formData.cep) erros.cep = 'O CEP é obrigatório.'
        if (formData.cep && !validarCEP(formData.cep)) erros.cep = 'CEP inválido.'
        
        if (!formData.cidade) erros.cidade = 'A cidade é obrigatória.'
        if (!formData.numero) erros.numero = 'O número é obrigatório.'
        if (!formData.bairro) erros.bairro = 'O bairro é obrigatório.'

        setErrors(erros)
        return Object.keys(erros).length === 0 
    }

    // Função para salvar os dados no localStorage e atualizar a tabela
    const salvarUniversidade = () => {
        if (validarFormulario()) {
            const universidades = getAll()
            universidades.push(formData) // Adiciona o novo cadastro à lista existente
            window.localStorage.setItem('universidade', JSON.stringify(universidades)) 
            setUniversidade(universidades)
            setFormData({ nome: '', cnpj: '', email: '', telefone: '', cep: '', cidade: '', numero: '', bairro: '' }) // Limpa o formulário
            alert('Universidade cadastrada com sucesso!')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <Pagina titulo="Universidade">
                <Link href={'/universidade/form/'} className="btn btn-dark mb-2">Novo</Link>

                {/* Formulário de Cadastro de Universidade */}
                <Form>
                    <Form.Group controlId="nome">
                        <Form.Label>Nome da Universidade</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            isInvalid={!!errors.nome}
                        />
                        <Form.Control.Feedback type="invalid">{errors.nome}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="cnpj">
                        <Form.Label>CNPJ</Form.Label>
                        <InputMask
                            mask="99.999.999/9999-99"
                            value={formData.cnpj}
                            onChange={handleChange}
                            name="cnpj"
                            maskChar={null}
                            className="form-control"
                            isInvalid={!!errors.cnpj}
                        />
                        <Form.Control.Feedback type="invalid">{errors.cnpj}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <InputMask
                            mask="(99) 99999-9999"
                            value={formData.telefone}
                            onChange={handleChange}
                            name="telefone"
                            maskChar={null}
                            className="form-control"
                            isInvalid={!!errors.telefone}
                        />
                        <Form.Control.Feedback type="invalid">{errors.telefone}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="cep">
                        <Form.Label>CEP</Form.Label>
                        <InputMask
                            mask="99999-999"
                            value={formData.cep}
                            onChange={handleChange}
                            name="cep"
                            maskChar={null}
                            className="form-control"
                            isInvalid={!!errors.cep}
                        />
                        <Form.Control.Feedback type="invalid">{errors.cep}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="cidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            isInvalid={!!errors.cidade}
                        />
                        <Form.Control.Feedback type="invalid">{errors.cidade}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="numero">
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                            type="text"
                            name="numero"
                            value={formData.numero}
                            onChange={handleChange}
                            isInvalid={!!errors.numero}
                        />
                        <Form.Control.Feedback type="invalid">{errors.numero}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="bairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            isInvalid={!!errors.bairro}
                        />
                        <Form.Control.Feedback type="invalid">{errors.bairro}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" onClick={salvarUniversidade}>Salvar</Button>
                </Form>

                {/* Tabela de Universidades */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> <BsMortarboardFill /> </th>
                            <th>Nome</th>
                            <th>Cnpj</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Cidade</th>
                            <th>Número</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universidade.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/universidade/' + i}>
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cnpj}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.cidade}</td>
                                <td>{item.numero}</td>
                                <td>{item.bairro}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default Index
