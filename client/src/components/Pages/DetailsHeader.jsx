// header component with a back button title and tabs

import React from 'react'
import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

export default function DetailsHeader({
    title,
    tabs,
    backUrl,
    children,
    ...props
    }) {
    return (
        <div className='bg-white w-full shadow'>
        <div className='py-6 px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
            <div className='flex'>
                <div className='flex-shrink-0'>
                <Link to={backUrl}>
                    <svg
                    className='h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 19l-7-7m0 0l7-7m-7 7h18'
                    />
                    </svg>
                </Link>
                </div>
                <div className='ml-4'>
                <h1 className='text-2xl font-bold text-gray-900'>{title}</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='ml-4'>{children}</div>
            </div>
            </div>
        </div>
        <div className='border-b border-gray-200'>
            <Tab.Group>
            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
                <Tab.List className='flex space-x-8'>
                {tabs.map((tab, index) => (
                    <Tab
                    key={index}
                    className={({ selected }) =>
                        `${
                        selected
                            ? 'border-yellow-500 text-yellow-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }
                             py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`
                    }
                    >
                    {tab}
                    </Tab>
                ))}
                </Tab.List>
            </div>
            </Tab.Group>
        </div>
        </div>
    )
    }