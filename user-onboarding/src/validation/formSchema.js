import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name must be entered.')
    .min(5, 'Name must be at least 5 characters long.'),
    email: yup
    .string()
    .email('Must enter a valid email.')
    .required('Email is required.'),
    password: yup
    .string()
    .required('You must have a password.')
    .min(7, 'Password must be at least 7 characters long.'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept the TOS.')
})

export default formSchema