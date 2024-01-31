import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
}

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(/^01\d{9}$/, 'Enter valid phone number')
        .required('Required'),
    email: Yup.string()
        .email('Enter valid email')
        .required('Required'),
    confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Confirming email is required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[\^$*.\[\]{}()?“!@#%&/,><’:;|_~`]/, 'Password must contain at least one special character')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirming password is required'),
})

const onSubmit = (values, onSubmitProps) => {
    console.log('form data', values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    console.log('formik props', formik)
                    return (
                        <div className='flex items-center justify-center h-screen'>
                            <Form className='w-[600px] h-auto '>
                                <h1 className='text-2xl text-green-400 text-center mb-5'>Register</h1>

                                <div className=''>
                                    <label htmlFor="username">First and last name</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="text" id="name" name="name" />
                                    <ErrorMessage name='name' component={TextError} />
                                </div>

                                <div className='form-control'>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type='text' id='phoneNumber' name='phoneNumber' />
                                    <ErrorMessage name='phoneNumber' component={TextError} />
                                </div>


                                <div className='form-control'>
                                    <label htmlFor="email">E-mail</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="email" id="email" name="email"
                                    />
                                    <ErrorMessage name='email' component={TextError} />

                                </div>

                                <div className='form-control'>
                                    <label htmlFor="confirmEmail">Confirm E-mail</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="email" id="confirmEmail" name="confirmEmail"
                                    />
                                    <ErrorMessage name='confirmEmail' component={TextError} />

                                </div>

                                <div className='relative'>
                                    <label htmlFor="password">Password</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type={showPassword ? 'password' : 'text'} id="password" name="password" />
                                    <span
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash className=' absolute top-9 right-4'/> : <FaEye className=' absolute top-9 right-4'/>}
                                    </span>

                                    
                                    <ErrorMessage name='password' component={TextError} />
                                </div>

                                <div className='relative'>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type={showPassword ? 'password' : 'text'}
                                        id="confirmPassword"
                                        name="confirmPassword" />
                                   <span
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash className=' absolute top-9 right-4'/> : <FaEye className=' absolute top-9 right-4'/>}
                                    </span>
                                    <ErrorMessage name='confirmPassword' component={TextError} />
                                </div>



                                <button className='w-[120px] h-[20px] flex items-center justify-center p-3 bg-green-400 text-white mt-4' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                            </Form>
                        </div>
                    )
                }
            }


        </Formik>
    );
};


export default Register;

