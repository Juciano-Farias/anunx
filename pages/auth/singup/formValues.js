 import * as yup from 'yup'
 
 const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',

}

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Campo obrigatório'),

    email: yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),

    password: yup.string()
        .required('Campo obrigatório'),
    
    passwordConf: yup.number()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')

})

export {
    initialValues,
    validationSchema
}