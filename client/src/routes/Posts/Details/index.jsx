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
                </div>
            </div>
        </div>
    )
}

