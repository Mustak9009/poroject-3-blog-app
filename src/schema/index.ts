import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    userName:Yup.string().required('Please enter your userName'),
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).required('Please enter yoru password')
});
export const LoginSchema = Yup.object({
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).required('Please enter yoru password')
})
export const writePostSchema = Yup.object({
    title:Yup.string().min(10).max(80).required('Title is required'),
    story:Yup.string().min(500).max(12000).required('Story is required')
})
export const updateUserSchema = Yup.object({
    password:Yup.string().min(6).required('Please enter yoru password')
})