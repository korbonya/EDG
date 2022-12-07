import { DetailsHeader } from "../../../components/Pages"
import pylôneImg from '../../../assets/images/pilone.jpg'

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
                                        En chat
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
                        <div className="flex mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h2 className="font-bold">Conakry/Ratoma, Cobaye carrefour marché</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

