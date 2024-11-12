const cursoValidator = {

    curso: {
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
    
    universidade: {
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

    duracao: {
        required: 'O campo é obrigatorio', 
        minLenght: {
            value: 3,
            message: 'A quantidade de caracteres minima é 2'
        },
        maxLengh: {
            value: 2,
            message: 'A quantidade de carateres maxima é 20'
        },
        min: {
            value: 5,
            message: 'O valor mínimo é 1'
        },
        max: {
            value: 12,
            message: 'O valor máximo é 12'
        }
    },

   
}

export default cursoValidator