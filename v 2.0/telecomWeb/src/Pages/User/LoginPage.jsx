import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, errors: signinErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 text-white max-w-md p-10 rounded-md'>
                {signinErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))}
                <h1 className='text-3xl font-bold my-2'>Login</h1>
                <form onSubmit={onSubmit} className='border-0'>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Username'
                    />
                    {errors.email && (
                        <p className='text-red-500'>Username is obligatorio</p>)}
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    {errors.password && (
                        <p className='text-red-500'>Password is obligatorio</p>)}
                    <button
                        type="submit"
                        className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>
                        Log In
                    </button>
                    <p className='flex gap-x-2 justify-between'>
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className='text-sky-500'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div >
    )
}