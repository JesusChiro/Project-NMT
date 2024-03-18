import { useEffect } from 'react'
import { useTasks } from '../../context/TasksContext'
import TaskCard from '../../components/TaskCard/TaskCard'
export default function TasksPage() {
    const { getTasks, tasks } = useTasks()

    useEffect(() => {
        getTasks()
    }, [])
    if (tasks.length === 0) return (<h1>No hay tareas para este usuario</h1>)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2'>{
            tasks.map((task) => (
                <TaskCard task={task} key={task._id} />
            ))
        }
        </div>
    )
}