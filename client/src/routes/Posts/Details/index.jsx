import { DetailsHeader } from "../../../components/Pages"
import pylôneImg from '../../../assets/images/pilone.jpg'

export default function index() {
    return (
        <div className="min-h-full">
            <DetailsHeader
                title="Post Details"
                backUrl={'/posts'}
            />
            <div className="grid grid-cols-2 gap-2 p-20 bg-white">
                <div className="image">
                    <div className="py-5 px-5 border flex items-center justify-center">
                        <img className="h-64" src={pylôneImg} alt="image du pylône" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Pylône de type Muguet 400 kV 2 ternes</h1>
                        <p className="text-gray-500">type fgh </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

