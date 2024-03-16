import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TasksContext';
import { useNavigate } from 'react-router-dom'

export default function TasksFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/tasks');
    })

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId='exampleForm.ControlInput1'>
                    <Form.Label>Titulo de tarea</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Title'
                        {...register('title')}
                        autoFocus />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Tarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Tasks'
                        {...register('description')} />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form >
        </div >
    )
}