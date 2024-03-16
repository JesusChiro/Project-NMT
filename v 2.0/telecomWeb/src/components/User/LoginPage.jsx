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
        <>
            <h1>Login</h1>
            <Form onSubmit={onSubmit}>
                {
                    signinErrors.map((error, i) => (
                        <div key={i}>
                            {error}
                        </div>
                    ))
                }
                <Form.Group className="mb-errors, password" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" {...register('email', { required: true })} />
                    {errors.email && <p>Email is obligatorio</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="password" {...register('password', { required: true })} />
                    {errors.password && <p>Password is obligatorio</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Button type="submit" variant="primary">
                        Log In
                    </Button>
                </Form.Group>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </Form>

        </>
    )
}