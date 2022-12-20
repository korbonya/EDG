// tailwindcss responsive sidebar 
import { Fragment, useState, lazy } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    CogIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    HomeModernIcon,
    ListBulletIcon,
    XMarkIcon,
    Bars3Icon,
    ChartBarIcon,
    MagnifyingGlassIcon,
    MapIcon,
    WrenchIcon,
} from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo.png'

import MenuItem from "./MenuItem";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { end: true, name: 'Tableau de board', href: '/', icon: ChartBarIcon, current: true },
    { end: true, name: 'Carte', href: 'map', icon: MapIcon, current: false },
    { end: false, name: 'Postes', href: 'posts', icon: ListBulletIcon, current: false },
    // { end: false, name: 'Lignes Électriques', href: 'lines', icon: MagnifyingGlassIcon, current: false},
    // { end: false, name: 'Postes de tranformation', href: 'tstations', icon: HomeModernIcon, current: false},
    { end: false, name: 'Centrales Elèctriques', href: 'powers', icon: HomeIcon, current: false },
    { end: false, name: 'Maintenances', href: 'maintenances', icon: WrenchIcon, current: false },
    { end: false, name: 'Agents', href: 'agents', icon: UserGroupIcon, current: false },
    { end: false, name: 'Parametres', href: 'settings', icon: CogIcon, current: false },
]
const secondaryNavigation = [
    { end: false, name: 'Aide', href: '/confidentialite', icon: QuestionMarkCircleIcon },
    { end: false, name: 'Confidentialité', href: 'licence', icon: ShieldCheckIcon },
]


const Sidebar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-full  w-full">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-700">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <div className="flex items-center justify-center py-3 my-5 bg-green-50">
                                    <img src="http://placehold.it/100x100" alt="logo" className="w-10 h-10 rounded-full" />
                                </div>
                            </div>
                            <nav
                                className="mt-5 flex-shrink-0 h-full divide-y divide-green-800 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <div className="px-2 space-y-1">
                                    {navigation.map((item, index) => (
                                        <Fragment key={index}>
                                            <MenuItem item={item} />
                                        </Fragment>
                                    ))}
                                </div>

                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col flex-grow  bg-gradient-to-b from-green-900 to-green-700 pt-5 pb-4 overflow-y-auto">
                    <div className="px-4">
                        <div className="flex items-center justify-center px-4 rounded-lg py-2  mb-5 bg-gray-100 ">
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
                            <h1 className="text-gray-600 uppercase text-center text-lg font-bold ml-2">électricite de Guinée</h1>
                        </div>
                    </div>
                    <nav className="mt-5 flex-1 flex flex-col divide-y divide-green-800 overflow-y-auto" aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                            {navigation.map((item, index) => (
                                <Fragment key={index}>
                                    <MenuItem item={item} />
                                </Fragment>
                            ))}
                        </div>
                        {/* <div className="mt-6 pt-6">
                            <div className="px-2 space-y-1">
                                {secondaryNavigation.map((item) => (
                                    <Fragment key={item.name}>
                                        <MenuItem item={item} />
                                    </Fragment>
                                ))}
                            </div>
                        </div> */}
                    </nav>
                </div>
            </div>

            <div className="lg:pl-64 flex flex-col flex-1">
                <div className="relative z-10 flex-shrink-0 flex h-10 bg-white border-b border-gray-200 lg:border-none">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Search bar */}
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                {/* <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                        placeholder="Rechercher..."
                                        type="search"
                                    />
                                </div> */}
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* <button
                                type="button"
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                <span className="sr-only">voir les notifications</span>
                                <HomeIcon className="h-6 w-6" aria-hidden="true" />
                            </button> */}

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500  lg:rounded-md lg:hover:bg-gray-50">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://duux.com/wp-content/uploads/2019/12/68824649-man-standaard-placeholder-avatar-profiel-gray-picture-ge%C3%AFsoleerd-op-witte-achtergrond-voor-uw-ontwerp-.jpg"
                                            alt=""
                                        />
                                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                            <span className="sr-only">Open user menu for </span> Aliou Sow
                                        </span>

                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Votre Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Paramètre
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item onClick={() => console.log('jesuis decon')}>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Deconnexion
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 px-4 pb-4">
                    {children}
                </main>
            </div>

        </div>
    )

};

export default Sidebar;