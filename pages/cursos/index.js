import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillBookmarkCheckFill, BsFillPencilFill } from 'react-icons/bs'

const Index = () => {

    const [cursos, setCursos] = useState([])
    const [universidades, setUniversidades] = useState([]) 
    const [formData, setFormData] = useState({
        curso: '',
        universidadeId: '', 
        duracao: '',
        modalidade: ''
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setCursos(getAllCursos())
        setUniversidades(getAllUniversidades()) // Carregar universidades
    }, [])

    // Função para pegar todos os cursos cadastrados
    function getAllCursos() {
        return JSON.parse(localStorage.getItem('cursos')) || []
    }

    // Função para pegar todas as universidades cadastradas
    function getAllUniversidades() {
        return JSON.parse(localStorage.getItem('universidade')) || []
    }

    // Função para validar os campos antes de adicionar um curso
    const validateForm = () => {
        const errors = {}
        if (!formData.curso) errors.curso = "O campo 'Curso' é obrigatório."
        if (!formData.universidadeId) errors.universidade = "O campo 'Universidade' é obrigatório."
        if (!formData.duracao || !/^\d+\s(meses|anos)$/.test(formData.duracao)) {
            errors.duracao = "O campo 'Duração' deve estar no formato 'XX meses' ou 'XX anos'."
        }
        if (!formData.modalidade) errors.modalidade = "O campo 'Modalidade' é obrigatório."
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Função para adicionar ou editar um curso
    const salvarCurso = () => {
        if (validateForm()) {
            const cursos = getAllCursos()
            cursos.push(formData)
            localStorage.setItem('cursos', JSON.stringify(cursos))
            setCursos(cursos) // Atualiza o estado com a nova lista de cursos
            setFormData({ curso: '', universidadeId: '', duracao: '', modalidade: '' }) // Limpa os campos do formulário
        }
    }

    // Função para excluir um curso
    function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
            const cursos = getAllCursos()
            cursos.splice(id, 1)
            localStorage.setItem('cursos', JSON.stringify(cursos))
            setCursos(cursos)
        }
    }

    // Função para lidar com as mudanças no formulário
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <Pagina titulo="Cursos">
                {/* Formulário de cadastro */}
                <Form>
                    <Form.Group controlId="curso">
                        <Form.Label>Curso</Form.Label>
                        <Form.Control
                            type="text"
                            name="curso"
                            value={formData.curso}
                            onChange={handleChange}
                            isInvalid={!!errors.curso}
                        />
                        <Form.Control.Feedback type="invalid">{errors.curso}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="universidadeId">
                        <Form.Label>Universidade</Form.Label>
                        <Form.Control
                            as="select"
                            name="universidadeId"
                            value={formData.universidadeId}
                            onChange={handleChange}
                            isInvalid={!!errors.universidade}
                        >
                            <option value="">Selecione a universidade</option>
                            {universidades.map((uni, index) => (
                                <option key={index} value={uni.id}>{uni.nome}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors.universidade}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="duracao">
                        <Form.Label>Duração</Form.Label>
                        <Form.Control
                            type="text"
                            name="duracao"
                            value={formData.duracao}
                            onChange={handleChange}
                            isInvalid={!!errors.duracao}
                        />
                        <Form.Control.Feedback type="invalid">{errors.duracao}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="modalidade">
                        <Form.Label>Modalidade</Form.Label>
                        <Form.Control
                            type="text"
                            name="modalidade"
                            value={formData.modalidade}
                            onChange={handleChange}
                            isInvalid={!!errors.modalidade}
                        />
                        <Form.Control.Feedback type="invalid">{errors.modalidade}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" onClick={salvarCurso}>Salvar Curso</Button>
                </Form>

                <Link href={'/cursos/form/'} className="btn btn-dark mb-2">Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> <BsFillBookmarkCheckFill /> </th>
                            <th>Curso</th> 
                            <th>Universidade</th> 
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cursos/' + i}>
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.curso}</td>
                                {/* Exibe o nome da universidade associada ao curso */}
                                <td>{universidades.find(uni => uni.id === item.universidadeId)?.nome}</td>
                                <td>{item.duracao}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default Index
