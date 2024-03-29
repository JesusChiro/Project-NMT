import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default function TasksFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks()
    const { user } = useAuth()
    console.log(user);
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
                setValue('date', dayjs.utc(task.date).format('YYYY/MM/DD'))
            }
        } loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        }
        if (data.date) dataValid.date = dayjs.utc(data.date).format()
        if (params.id) {
            updateTask(params.id, dataValid)
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    })

    return (
        <div className='mx-auto bg-zinc-800 max-w-md w-full my-10 p-10 rounded-md'>
            <h1 className='text-center text-slate-200 text-2xl'>Registro de Tareas de {user.username}</h1>
            <form onSubmit={onSubmit}>
                <label
                    htmlFor='title'>Titulo de tarea</label>
                <input
                    type='text'
                    placeholder='Title'
                    {...register('title')}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    autoFocus />
                <label htmlFor='description'>Tarea</label>
                <textarea
                    rows='3'
                    placeholder='Description'
                    {...register('description')}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'></textarea>
                <label htmlFor='date'>Date</label>
                <input
                    type="date"
                    {...register('date')}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                <button className='bg-indigo-500 px-3 py-2 roudend-md'>
                    Guardar
                </button>
            </form >
        </div >
    )
}