import { Tab } from '@headlessui/react';

export default function index() {
    return (
        <div>
            <header className=" px-4 py-3 ">
                <h1 className="text-2xl px-4 mb-2 font-bold text-gray-700">Paramètres</h1>
                <Tab.Group>
                    <Tab.List className="border-b-2">
                        <Tab className="px-4 py-2 font-medium text-yellow-900 border-b-2 hover:border-yellow-500 focus:outline-none focus:border-yellow-500">
                            Utilisateurs
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-yellow-500 focus:outline-none focus:border-yellow-500">
                            Villes
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-yellow-500 focus:outline-none focus:border-yellow-500">
                            Communes
                        </Tab>
                        <Tab className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:border-yellow-500 focus:outline-none focus:border-yellow-500">
                            Services
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="px-4 py-3 flex flex-col items-end ">
                                <button className="px-4 py-2 font-bold text-gray-50 bg-yellow-500 rounded-sm hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow">
                                    Ajouter un utilisateur
                                </button>
                                <table className="w-full mt-6 text-gray-600">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 font-bold text-left">Name</th>
                                            <th className="px-4 py-2 font-bold text-left">Email</th>
                                            <th className="px-4 py-2 font-bold text-left">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">John Doe</td>
                                            <td className="border px-4 py-2">johndoe@example.com</td>
                                            <td className="border px-4 py-2">Admin</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Jane Smith</td>
                                            <td className="border px-4 py-2">janesmith@example.com</td>
                                            <td className="border px-4 py-2">User</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Bob Johnson</td>
                                            <td className="border px-4 py-2">bobjohnson@example.com</td>
                                            <td className="border px-4 py-2">User</td>
                                        </tr>
                                    </tbody>
                                </table>
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
