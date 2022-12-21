import { Input } from "../../../components/inputs"
import {Button} from "../../../components/buttons";

export default function index() {
    return (
        <div className="px-20">
            <div className=" bg-white rounded-lg pb-4 text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:w-full">
                <div className='title border-b-2 py-5 mb-3 text-center'>
                    <h4 className='font-bold'>Ajouter un poste de transformation</h4>
                </div>
                <div>
                    <form className='px-4 py-3'>
                       <Input label='Nom du poste' placeholder='Nom du poste de transformation' />
                       <Input label={'addresse'} placeholder='addresse' />
                       <Input label={'Puissance nominal'} placeholder='Puissance du poste' />
                       {/* select the city */}
                       <select className='border border-gray-300 rounded-md px-4 py-2 mt-2 mx-4 focus:outline-none focus:border-green-500'>
                            <option value=''>Choisir une ville</option>
                            <option value=''>Conakry</option>
                            <option value=''>Boké</option>
                            <option value=''>Labé</option>
                            <option value=''>Mamou</option>
                            <option value=''>Kankan</option>
                            <option value=''>Kindia</option>
                        </select>
                        {/* select the commune */}
                        <select className='border border-gray-300 rounded-md px-4 py-2 mt-2 mx-4 focus:outline-none focus:border-green-500'>
                            <option value=''>Choisir une commune</option>
                            <option value=''>Conakry</option>
                            <option value=''>Boké</option>
                            <option value=''>Labé</option>
                            <option value=''>Mamou</option>
                            <option value=''>Kankan</option>
                            <option value=''>Kindia</option>
                        </select>
                        {/* select the quartier */}
                        <select className='border border-gray-300 rounded-md px-4 py-2 mt-2 mx-4 focus:outline-none focus:border-green-500'>
                            <option value=''>Choisir un quartier</option>
                            <option value=''>Conakry</option>
                            <option value=''>Boké</option>
                            <option value=''>Labé</option>
                            <option value=''>Mamou</option>
                            <option value=''>Kankan</option>
                            <option value=''>Kindia</option>
                        </select>
                        {/* select the type  */}
                        <select className='border border-gray-300 rounded-md px-4 py-2 mt-2 mx-4 focus:outline-none focus:border-green-500'>
                            <option value=''>Choisir un type</option>
                            <option value=''>Residentiel</option>
                            <option value=''>Commercial</option>
                            <option value=''>Industriel</option>
                        </select>
                        {/* save button */}
                        <Button>Enregistrer</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
