import { useTasks } from '../../context/TasksContext';
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default function TaskCard({ task }) {

    const { deleteTask } = useTasks()

    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {task.title}
                    </td>
                    <td className="px-2 py-2">
                        {task.description}
                    </td>
                    <td className="px-2 py-2 text-center">
                        {dayjs(task.date).utc().format('DD/MM/YYYY')}
                    </td>
                    <td className="px-2 py-2 text-center">
                        {dayjs(task.updatedAt).utc().format('DD/MM/YYYY')}
                    </td>
                    <td className="px-2 py-2 grid grid-rows-2 gap-1 mx-auto">
                        <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-fit rounded-md'
                            onClick={() => {
                                deleteTask(task._id);
                            }}>
                            Eliminar
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-fit rounded-md'>
                            <Link to={`/tasks/${task._id}`}
                            >Editar
                            </Link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

