import { useState } from 'react'
import { DetailsHeader } from "../../../components/Pages"
import pylôneImg from '../../../assets/images/pilone.jpg'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import html2canvas from 'html2canvas';
import clsx from "clsx";
import qrImage from '../../../assets/images/qrcode.jpg'
import logo from '../../../assets/images/logo.png'


export default function index() {
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)

    const downloadImage = () => {
        const element = document.getElementById('qrcode');

        html2canvas(element).then((canvas) => {
            const a = document.createElement('a');
            a.download = 'image.png';
            a.href = canvas.toDataURL('image/png');
            a.click();
        });
    };

    const toggle = (rank) => {
        switch (rank) {
            case 1:
                setStatus1(!status1)
                break;
            case 2:
                setStatus2(!status2)
                break;
            case 3:
                setStatus3(!status3)
                break;
            default:
                break;
        }
    }
    return (
        <div className="min-h-full">
            <DetailsHeader
                title="Details du Poste de Test 1"
                backUrl={'/posts'}
            />
            <div className="grid grid-cols-3 gap-2 px-1 py-2 ">
                <div className="image">
                    <div className="py-1 ">
                        <img className="h-64" src={pylôneImg} alt="image du pylône" />
                    </div>
                    <div className="mt-8 ">
                        <div className="">
                            <div className="bg-white py-2 shadow rounded-md w-full">
                                <div id='qrcode' className="flex justify-center items-center w-full p-4">
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <div className="flex ralative">
                                            <img src={qrImage} className='w-44' alt="the qr code image" />
                                        </div>
                                        <h1 className="text-green-900 text-md font-semibold">
                                            Postes de Test 1
                                        </h1>
                                        <h1 className="text-green-900 text-md font-semibold">
                                            Référence : 123456789
                                        </h1>
                                    </div>
                                </div>
                                {/* download button */}
                                <div className="flex justify-center mt-2">
                                    <button
                                        onClick={downloadImage}
                                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Télécharger
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trns px-4 col-span-2">

                    <div className="grid grid-cols-3 gap-2">
                        <div className="">
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                                <h2 className="font-normal">Tensions</h2>
                            </div>
                            <h1 className="font-semibold"> 20KV, 15V /0.4KV</h1>
                        </div>
                        <div className="">
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                                <h2 className="font-normal">Type</h2>
                            </div>
                            <h1 className="font-semibold">Pylône</h1>
                        </div>
                        <div className="">
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <h2 className="font-normal">Linges</h2>
                            </div>
                            <h1 className="font-semibold"> L024, L32</h1>
                        </div>

                        <div className="">
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <h2 className="font-normal">Affecté le</h2>
                            </div>
                            <h1 className="font-semibold"> 20 Nov. 2011</h1>
                        </div>

                        <div className="">
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <h2 className="font-normal">Déployé le</h2>
                            </div>
                            <h1 className="font-semibold"> 20 Nov. 2011</h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-start mt-4">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h2 className="font-semibold">Conakry/Ratoma, Cobaye marché</h2>
                        </div>
                        <div className="flex justify-center ">
                            <button className="inline-flex items-center px-4 hover:underline  border-transparent shadow-sm text-sm font-semibold rounded-md text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Afficher sur la carte
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="py-4">
                        <hr className="h-1 w-full bg-gray-100" />
                    </div>



                    <div className="">
                        <h1 className="font-bold text-xl">Liste des trnasformateurs</h1>
                        <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border border-green-500 text-green-800">
                                Actifs: 3
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 mx-2 rounded-full text-sm font-medium border border-red-500 text-red-800">
                                En Panne: 1
                            </span>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="flex justify-center ">
                                <button className="inline-flex items-center px-4 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    AJOUTER
                                </button>
                            </div>
                        </div>

                        <div className="mt-2">
                            <table className="table-auto w-full mt-4">
                                <thead>
                                    <tr className="bg-green-50">
                                        <th className="px-4 py-2">Nom</th>
                                        <th className="px-4 py-2">Puissance</th>
                                        <th className="px-4 py-2">Etat</th>
                                        <th className="px-4 py-2">Deployé</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">TR02134</td>
                                        <td className="border px-4 py-2">13KV/0.44Kv</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${status1 ? 'bg-green-100' : 'bg-red-100'} ${status1 ? 'text-green-900' : 'text-red-900'}`}>
                                                {status1 ? 'En service' : 'Hors service'}
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">
                                            <div className="flex justify-center">
                                                <a
                                                    className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                                                    onClick={() => { toggle(1) }}
                                                >
                                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                        <label
                                                            name="toggle"
                                                            id="toggle"
                                                            className={clsx("absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer", status1 && 'border-green-400 right-0')} />
                                                        <label
                                                            htmlFor="toggle"
                                                            className={clsx("block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer", status1 && 'bg-green-400')}>
                                                        </label>
                                                    </div>
                                                </a>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </button>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">TR0785</td>
                                        <td className="border px-4 py-2">12KV/0.26KV</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${status2 ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                                                {status2 ? 'En service' : 'Hors service'}
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">
                                            <div className="flex justify-center">
                                                <a
                                                    className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                                                    onClick={() => { toggle(2) }}
                                                >
                                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                        <label
                                                            name="toggle"
                                                            id="toggle"
                                                            className={clsx("absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer", status2 && 'border-green-400 right-0')} />
                                                        <label
                                                            htmlFor="toggle"
                                                            className={clsx("block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer", status2 && 'bg-green-400')}>
                                                        </label>
                                                    </div>
                                                </a>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </button>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">TR0564</td>
                                        <td className="border px-4 py-2">13KV/0.44KV</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${status3 ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                                                {status3 ? 'En service' : 'Hors service'}
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">
                                            <div className="flex justify-center">
                                                <a
                                                    className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                                                    onClick={() => { toggle(3) }}
                                                >
                                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                        <label
                                                            name="toggle"
                                                            id="toggle"
                                                            className={clsx("absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer", status3 && 'border-green-400 right-0')} />
                                                        <label
                                                            htmlFor="toggle"
                                                            className={clsx("block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer", status3 && 'bg-green-400')}>
                                                        </label>
                                                    </div>
                                                </a>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </button>
                                                <button className="inline-flex items-center px-1 mx-1 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className="py-10">
                        <hr className="h-1 w-full bg-gray-100" />
                    </div>

                    <div>

                        <h1 className="font-bold text-xl">Liste des interventions</h1>

                        <div>
                            <div className="flex items-center justify-end mt-2">
                                <div className="flex justify-center ">
                                    <button className="inline-flex items-center px-4 hover:underline  border-transparent shadow-sm text-md font-medium rounded-md text-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Afficher l'historique
                                    </button>
                                </div>
                                <div className="flex justify-center ">
                                    <button className="inline-flex items-center px-4 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        AJOUTER
                                    </button>
                                </div>
                            </div>
                            <table className="table-auto w-full mt-2">
                                <thead>
                                    <tr className="bg-green-50">
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Type</th>
                                        <th className="px-4 py-2">agent</th>
                                        <th className="px-4 py-2">Etat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">Maintenance</td>
                                        <td className="border px-4 py-2">Aboubacar diallo</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800`}>
                                                Terminé
                                            </span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">Maintenance</td>
                                        <td className="border px-4 py-2">Aboubacar diallo</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800`}>
                                                Terminé
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">20/02/2003</td>
                                        <td className="border px-4 py-2">Maintenance</td>
                                        <td className="border px-4 py-2">Aboubacar diallo</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800`}>
                                                Terminé
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div>




                    </div>
                </div>
            </div>
        </div>
    )
}

