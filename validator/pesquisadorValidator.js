const pesquisadorValidator = {

    nome: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 50'
        }
    },

    cpf: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 11'
        }
    },

    curso: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 10'
        }
    },

    email: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 50'
        }
    },

    telefone: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 15'
        }
    },

    cep: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 10'
        }
    },

    cidade: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 50'
        }
    },

    numero: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 10'
        }
    },

    bairro: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 20'
        }
    },
}

export default pesquisadorValidator