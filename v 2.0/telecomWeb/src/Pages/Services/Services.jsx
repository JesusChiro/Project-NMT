import { SERVICES } from '../../utils/consts.js';

export function Services() {
    return (
        <>
            <div className='my-10 bg-white sm:px-5 px-2 lg:shadow-md rounded px-8 pt-6 pb-8 mx-auto items-center'>
                <h1 className='items-center text-center text-3xl font-extrabold dark:text-white py-4 sm:text-5xl'>Nuestras Soluciones</h1>
                <div className='my-0 mx-auto  px-0 sm:px-5 md:grid gap-2 grid-cols-2 lg:grid-cols-3 mx-auto '>
                    {
                        SERVICES.map(({ img, title, text }) => (
                            <div className='px-2 my-2 py-2 bg-slate-200 rounded md:h-fit lg:w-full' key={img} >
                                <img className='border-8 rounded-2xl mx-auto min-w-60 sm:max-w-96 md:max-w-64' src={img} alt={title} />
                                <div className='my-2 text-justify text-sm mx-auto sm:px-6 items-center'>
                                    <h3 className='text-center my-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white md:text-2xl'>{title}</h3>
                                    <p className='mb-3 text-gray-800 dark:text-gray-400'>{text}</p>
                                    <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Ver Más...</button>
                                </div>
                            </div>
                        ))
                    }
                </div >
            </div>
        </>

    )
}