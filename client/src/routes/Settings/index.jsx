import React, {useMemo} from 'react'
import { Tab } from '@headlessui/react';
import { Table } from '../../components/Tables';

export default function index() {
    const data = useMemo(
        () => [
            {
                id: 1,
                name:"mariama sow",
                email:"mariama@gmail.com",
                role:"admin",
                status:"active",
            },
            {
                id: 2,
                name:"Aminata sow",
                email:"aminata@gmail.com",
                role:"admin",
                status:"active",
            },
            {
                id: 3,
                name:"Diouldé Ly ",
                email:"diouldé@gmail.com",
                role:"admin",
                status:"active",
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name',
                Header: 'Nom',
                id: 'Nom',
            },
            {
                accessorKey: 'email',
                Header: 'Email',
                id: 'Email',
            },
            {
                accessorKey: 'role',
                Header: 'Role',
                id: 'Role',
            },
            {
                accessorKey: 'status',
                Header: 'Status',
                id: 'Status',
            },
        ],[]
    );

    return (
        <div>
            <header className=" px-4 py-3 ">
                <h1 className="text-2xl px-4 mb-2 font-bold text-gray-700">Paramètres</h1>
                <Tab.Group>
                    <Tab.List className="border-b-2">
                        <Tab className="px-4 py-2 font-medium text-green-900 border-b-2 hover:border-green-500 focus:outline-none focus:border-green-500">
                            Utilisateurs
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 focus:outline-none focus:border-green-500">
                            Villes
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 focus:outline-none focus:border-green-500">
                            Communes
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 focus:outline-none focus:border-green-500">
                            Services
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="px-4 py-3 flex flex-col items-end ">
                                <button className="px-4 py-2 font-bold text-gray-50 bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:shadow-outline-green">
                                    Ajouter un utilisateur
                                </button>
                              <div className='mt-5'>
                                <Table columns={columns} data={data} />
                              </div>
                            </div>

                        </Tab.Panel>
                        <Tab.Panel>
                            <p>Tab 2 content goes here...</p>
                        </Tab.Panel>
                        <Tab.Panel>
                            <p>Tab 3 content goes here...</p>
                        </Tab.Panel>
                        <Tab.Panel>
                            <p>Tab 4 content goes here...</p>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </header>

        </div>
    )
}
