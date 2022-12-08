import { DetailsHeader } from "../../../components/Pages"
import pylôneImg from '../../../assets/images/pilone.jpg'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function index() {
    return (
        <div className="min-h-full">
            <DetailsHeader
                title="Post Details"
                backUrl={'/posts'}
            />
            <div className="grid grid-cols-2 gap-2 px-10 py-5 bg-white">
                <div className="image">
                    <div className="py-5 px-5 border flex items-center justify-center">
                        <img className="h-64" src={pylôneImg} alt="image du pylône" />
                    </div>
                    <div className="mt-4 ">
                        <h1 className="text-lg font-bold">Pylône 02145KN23</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <div className="flex items-center mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        Residentiel
                                    </span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-green-800">
                                        En Traillie
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium">
                                        Hauteur: 30 m
                                    </span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium">
                                        Puissance: 440 KV
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h1 className="font-bold">Lignes: L0245, L3256, LLA235</h1>
                        </div>
                        <div className="flex mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h2 className="font-bold">Conakry/Ratoma, Cobaye carrefour marché</h2>
                        </div>
                        <div className="flex mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <h2 className="font-bold">Déployé le: 20/02/2003</h2>
                        </div>
                    </div>
                </div>
                <div className="trns px-4">
                    <h1 className="font-bold text-xl">Liste des trnasformateurs</h1>
                    <div>
                        <h1>Nbre de transformateurs: 4</h1>
                        <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                Actifs: 3
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 mx-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                En Panne: 1
                            </span>
                        </div>

                        <div className="w-full mt-5">
                            <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                                                <span>Transformateurs èlévateur TR02134</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-yellow-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                              <table className="table-auto w-full">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-2">Nom</th>
                                                        <th className="px-4 py-2">Puissance</th>
                                                        <th className="px-4 py-2">Etat</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border px-4 py-2">TR02134</td>
                                                        <td className="border px-4 py-2">440 KV</td>
                                                        <td className="border px-4 py-2">
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                                Actif
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="mt-2">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                                                <span>Transformateur SA2354 ?</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-yellow-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                <table className="table-auto w-full">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-4 py-2">Nom</th>
                                                            <th className="px-4 py-2">Puissance</th>
                                                            <th className="px-4 py-2">Etat</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="border px-4 py-2">TR02134</td>
                                                            <td className="border px-4 py-2">440 KV</td>
                                                            <td className="border px-4 py-2">
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                                    Actif
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

