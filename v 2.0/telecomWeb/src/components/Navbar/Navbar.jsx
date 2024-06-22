import { Link } from 'react-router-dom'
import { NMT_INFO } from '../../utils/consts';
import { useAuth } from '../../context/AuthContext'
// import LoginPageModal from '../Modals/Form';

export function Navbarr() {
    const { isAuthenticated, logout, } = useAuth()
    const { user } = useAuth()
    console.log(user);
    return (
        <>
            <nav className=" bg-cyan-500 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={NMT_INFO.LOGO} alt={NMT_INFO.ALTLOGO} />
                    </Link>
                    <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        {isAuthenticated ? (
                            <>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 hover:ring-4 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <picture><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                    </picture>
                                    <img className="w-8 h-8 rounded-full" src="./img/icons/user-regular.svg" alt="user photo" />
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 
                                rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Welcome</span>
                                        <h1 className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.username}</h1>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/add-task"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Añade una O.C.
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/add-task"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Añade una Rendición
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={() => { logout() }}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <button type="button"
                                    className="flex text-sm bg-slate-300 hover:bg-gray-100 rounded-full 
                                lg:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-10 h-10 rounded-xl " src="./img/icons/user-regular.svg" alt="user photo" />
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to="/login"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/register"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                Register
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                        <button data-collapse-toggle="navbar-user" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
                            text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none 
                            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                            dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-user">
                        <ul
                            className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 
                        rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 
                        lg:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 
                        dark:border-gray-700">
                            <li>
                                <Link to="/nosotros"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                                    md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
                                >Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/soluciones"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                                    md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
                                >Soluciones</Link>
                            </li>
                            <li>
                                <Link to="/clientes"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                                    md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
                                >Clientes</Link>
                            </li>
                            <li>
                                <Link to="/contacto"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                                    md:dark:hover:bg-transparent dark:border-gray-700 text-center"
                                >Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}