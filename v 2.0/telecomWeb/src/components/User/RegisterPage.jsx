import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { registerRequest } from '../../api/auth';

export default function RegisterPage() {

    const onSubmit = handleSubmit(async (values) => {
        const res = registerRequest(values)
        console.log(res)
    })

    const { register, handleSubmit } = useForm()
    
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" {...register('username', { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"{...register('email', { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="password" {...register('password', { required: true })} />
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