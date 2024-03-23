import { PROVIDERS, CUSTOMERS } from '../../utils/consts.js'
export function Customers() {
    return (
        <>
            <div className='my-10 bg-white sm:px-5 px-2 lg:shadow-md rounded px-8 pt-6 pb-8 mx-auto items-center'>
                <h1 className='items-center text-center text-3xl font-extrabold dark:text-white py-4 sm:text-5xl'>Nuestros Clientes</h1>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" className="flex text-xl items-center justify-between w-full p-4 font-medium rtl:text-right
                    text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 focus:text-2xl
                    dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Nuestros Clientes</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-3 border border-b-0  border-gray-200 dark:border-gray-700 dark:bg-gray-900 md:grid grid-cols-2 lg:grid grid-cols-3 items-center">
                            {CUSTOMERS.map(({ Img, Alt, Id }) => (
                                <div className="my-2" key={Id}>
                                    <img alt={Alt} className="p-2 drop-shadow-2xl mx-auto min-w-52 sm:max-w-96 drop-shadow-2xl md:max-w-64 px-4 " src={Img} />
                                </div>))}
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" className="flex text-xl items-center justify-between w-full p-4 font-medium rtl:text-right
                    text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 focus:text-2xl
                    dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                            <span>Nuestros Proveedores</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-3 border border-b-0  border-gray-200 dark:border-gray-700 dark:bg-gray-900 md:grid grid-cols-2 lg:grid grid-cols-3 items-center">
                            {PROVIDERS.map(({ Img, Alt, Id }) => (
                                <div className="my-2" key={Id}>
                                    <img alt={Alt} className="p-2 drop-shadow-2xl mx-auto min-w-52 sm:max-w-96 drop-shadow-2xl md:max-w-64 px-4" src={Img} />
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}