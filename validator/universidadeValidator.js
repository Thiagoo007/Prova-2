const universidadeValidator = {

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

    cnpj: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é '
        },
        maxLengh: {
            value: 10,
            message: 'A quantidade de carateres maxima é 13'
        }
    },

    matricula: {
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

    salario: {
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
            message: 'A quantidade de carateres maxima é 11'
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

    logradouro: {
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

    complemento: {
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

    numero: {
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

export default universidadeValidator