// tailwindcss responsive sidebar 
import { Fragment, useState, lazy } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    CogIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    LockClosedIcon,
    MoonIcon,
    HomeModernIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import MenuItem from "./MenuItem";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { end: true, name: 'Tableau de board', href: '/', icon: HomeIcon, current: true },
    { end: false, name: 'Demandeurs', href: 'applicants', icon: HomeIcon, current: false },
    { end: false, name: 'Rendez-vous', href: 'rendez_vous', icon: HomeIcon, current: false },
    { end: false, name: 'Utisateurs', href: 'utisateurs', icon: UserGroupIcon, current: false },
]
const secondaryNavigation = [

    { end: false, name: 'Aide', href: '/confidentialite', icon: QuestionMarkCircleIcon },
    { end: false, name: 'Confidentialité', href: 'licence', icon: ShieldCheckIcon },
]


const Sidebar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-full">
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
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-700">
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
                                        <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-blue-300-mark-white-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <nav
                                className="mt-5 flex-shrink-0 h-full divide-y divide-blue-800 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <div className="px-2 space-y-1">
                                    {navigation.map((item, index) => (
                                         <Fragment key={index}>
                                         <MenuItem item={item}/>
                                     </Fragment>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        {secondaryNavigation.map((item) => (
                                          <Fragment key={item.name}>
                                          <MenuItem item={item}/>
                                      </Fragment>
                                        ))}
                                    </div>
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
                <div className="flex flex-col flex-grow bg-blue-700 pt-5 pb-4 overflow-y-auto">
                    <div className="px-4">
                        <div className="flex items-center justify-center py-3 my-5 bg-blue-50">
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Workflow"
                            />
                        </div>
                    </div>
                    <nav className="mt-5 flex-1 flex flex-col divide-y divide-blue-800 overflow-y-auto" aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                            {navigation.map((item, index) => (
                                <Fragment key={index}>
                                <MenuItem item={item}/>
                            </Fragment>
                            ))}
                        </div>
                        <div className="mt-6 pt-6">
                            <div className="px-2 space-y-1">
                                {secondaryNavigation.map((item) => (
                                    <Fragment key={item.name}>
                                        <MenuItem item={item}/>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )

};

export default Sidebar;