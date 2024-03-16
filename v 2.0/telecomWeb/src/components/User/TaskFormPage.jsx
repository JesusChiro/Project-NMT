import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

export default function TasksFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
            }
        } loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            createTask(data);
        }
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