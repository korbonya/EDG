import { Link } from "react-router-dom"

export default function (
    {
        title,
        subTitle,
        button,
        buttonLink,
        buttonClassName,
    }
) {
    return (
        <div>
            <div className='px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
                <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
                    <div className='flex-1 min-w-0'>
                        {/* Profile */}
                        <div className='flex items-center'>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'>
                                        {title}
                                    </h1>
                                </div>
                                <dl className='mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
                                    <dd className='flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6'>
                                        {subTitle}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 flex space-x-3 md:mt-0 md:ml-4'>
                        <Link to={buttonLink}>
                            <button
                                type='button'
                                className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${buttonClassName}`}
                            >
                                {button}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
