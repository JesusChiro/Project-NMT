import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { CONTACT_US } from '../../utils/consts.js';

export const Contact = () => {
    const refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const servicesId = 'service_mggtwlp'
        const templateId = 'template_azov3sv'
        const apikey = '048wb8pPNZw5GviLV'
        emailjs.sendForm(servicesId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className='flex-col justify-center sm:flex-col lg:flex-row my-10 mx-auto flex'>
                <div className='w-full sm:px-1 lg:w-1/2 mx-auto'>
                    <form
                        ref={refForm}
                        action=""
                        onSubmit={handleSubmit}
                        className='bg-white w-max px-2 mx-auto sm:w-10/12  bg-white lg:shadow-md w-3/4 rounded px-8 pt-6 pb-8 '>
                        <h2 className='items-center text-center text-4xl font-extrabold dark:text-white'>Contáctanos</h2>
                        <p className='sm:text-lg font-normal text-gray-500 mt-1 lg:text-xl dark:text-gray-400'>Por favor, rellena el formulario</p>
                        <fieldset
                            className='py-2'>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor=''>Nombres Completos:</label>
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                name='username' type="text" placeholder='Ej: Juan Perez' required />
                        </fieldset>
                        <fieldset
                            className='py-2'>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                name='email'>Email:</label>
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                type="email" placeholder="Enter email" name='email' id='email' required />
                        </fieldset>
                        <fieldset
                            className='py-2'>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor=''>Mensaje:</label>
                            <textarea
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                maxLength='500' placeholder='Soy Juan Perez de la empresa... y deseo información sobre...'
                                name='message' rows={3} required />
                        </fieldset>
                        <button className='bg-blue-500  hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Send</button>
                    </form>
                </div>
                <div className='mt-4 w-full lg:w-1/2 mx-auto'>
                    <section className='bg-white w-max lg:shadow-md w-3/4 rounded px-8 pt-6 pb-8 flex place-content-center flex-col mx-auto'>
                        <div className="text-center font-bold text-2xl">
                            <h2 className='items-center font-extrabold dark:text-white text-2xl lg:text-4xl'>Contacto Directo</h2>
                        </div>
                        {
                            CONTACT_US.map(({ Id, Work, AltWork, IconWork, Name, LinkMail, Email, Phone, LinkToWsp }) => (
                                <div className="flex place-content-center" key={Id}>
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 ">
                                        <li className=" py-3 sm:py-4 ">
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    <img className="w-10 h-10 rounded " src={IconWork} alt={AltWork} />
                                                </div>
                                                <div className="px-0 mx-0 sm:flex-1 min-w-0 ms-4">
                                                    <p className="text-xs text-left sm:text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        👨‍💻{Name}
                                                    </p>
                                                    <p className="text-xs text-left sm:text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                                        <a href={LinkMail}>✉ {Email}</a>
                                                    </p>
                                                    <p className="text-xs text-left sm:text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                                        {Work}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                    </section >
                </div>
            </div >
        </>
    )
}
