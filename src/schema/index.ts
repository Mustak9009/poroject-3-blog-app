import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    userName:Yup.string().required('Please enter your userName'),
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).required('Please enter yoru password')
})