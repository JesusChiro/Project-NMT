import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div>

            <Form onSubmit={onSubmit}>
                {
                    registerErrors.map((error, i) => (
                        <div key={i}>
                            {error}
                        </div>
                    ))
                }
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" {...register('username', { required: true })} />
                    {errors.username && <p>Username is required</p>}
                </Form.Group>
                <Form.Group className="mb-errors, password" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"{...register('email', { required: true })} />
                    {errors.email && <p>Email is required</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="password" {...register('password', { required: true })} />
                    {errors.password && <p>Password is required</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Button type="submit" variant="primary">
                        Registrar
                    </Button>
                </Form.Group>
            </Form>
        </div >
    )
}