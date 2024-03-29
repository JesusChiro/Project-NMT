import { useEffect } from 'react'
import { useTasks } from '../../context/TasksContext'
import TaskCard from '../../components/TaskCard/TaskCard'
import { useAuth } from '../../context/AuthContext'
export default function TasksPage() {
    const { getTasks, tasks } = useTasks()
    const { user } = useAuth()
    useEffect(() => {
        getTasks()
    }, [])
    if (tasks.length === 0) return (<h1>No hay tareas para este usuario</h1>)
    return (
        <div className='items-center my-6 bg-slate-300 px-20 py-2'>
            <span className="block font-extrabold text-3xl pt-8 text-gray-900 dark:text-white text-center ">Bienvenido {user.username}</span>
            <span className="block font-bold text-2xl text-gray-900 dark:text-white my-3">Listado de Tareas</span>
            <div className="table-fixed relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="px-6 py-3 text-center">
                            <th scope="col" className="px-6 py-3 w-1/5">
                                Orden de Compra
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/6">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                Fecha de Creación
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                Fecha de Modificación
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        tasks.map((task) => (
                            <TaskCard task={task} key={task._id} />
                        ))
                    }
                </table>
            </div >
        </div >
    )
}