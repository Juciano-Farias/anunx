import * as yup from 'yup';

const initialValues = {
    title: '',
    category: '',
    description:'',
    price:'',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string() 
        .min(6, 'Escreva um tíitulo maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

    category: yup.string().required('Campo obrigatório'),

    files: yup.array()
        .min(1, 'Envie pelo menos uma foto')
        .required('Campo obrigatório'),

    description: yup.string()
        .min(30, 'Escreva uma descrição com pelo menos 30 caractes.')
        .max(800, 'Título muito grande')
        .required('Campo obrigatório'),

    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),

})

export {
    initialValues, 
    validationSchema
}