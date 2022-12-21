import { Input } from "../../../components/inputs"
import { Button } from "../../../components/buttons";

export default function index() {
    return (
        <div className="lg:px-36">
            <div className=" bg-white rounded-lg lg:px-10 pb-4 text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:w-full">
                <div className='title border-b-2 py-5 mb-3 text-center'>
                    <h4 className='font-bold'>Ajouter un poste de transformation</h4>
                </div>
                <div>
                    <form className='px-4 py-3'>
                        <Input label='Nom du poste' placeholder='Nom du poste de transformation' />
                        <Input label={'addresse'} placeholder='addresse' />
                        <Input label={'Puissance nominal'} placeholder='Puissance du poste' />
                        <Input label={'Tension'} placeholder='Tension du poste' />
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="text-sm font-medium text-gray-600" htmlFor="city">Ville</label>
                                <select className='border border-gray-300 w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-green-500'>
                                    <option value=''>Choisir une ville</option>
                                    <option value=''>Conakry</option>
                                    <option value=''>Boké</option>
                                    <option value=''>Labé</option>
                                    <option value=''>Mamou</option>
                                    <option value=''>Kankan</option>
                                    <option value=''>Kindia</option>
                                </select>
                            </div>
                            {/* select the commune */}
                            <div>
                                <label className="text-sm font-medium text-gray-600" htmlFor="commune">Commune</label>
                                <select className='border border-gray-300 w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-green-500'>
                                    <option value=''>Choisir une commune</option>
                                    <option value=''>Conakry</option>
                                    <option value=''>Boké</option>
                                    <option value=''>Labé</option>
                                    <option value=''>Mamou</option>
                                    <option value=''>Kankan</option>
                                    <option value=''>Kindia</option>
                                </select>
                            </div>
                            {/* select the quartier */}
                            <div>
                                <label className="text-sm font-medium text-gray-600" htmlFor="quartier">Quartier</label>
                                <select className='border border-gray-300 w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-green-500'>
                                    <option value=''>Choisir un quartier</option>
                                    <option value=''>Conakry</option>
                                    <option value=''>Boké</option>
                                    <option value=''>Labé</option>
                                    <option value=''>Mamou</option>
                                    <option value=''>Kankan</option>
                                    <option value=''>Kindia</option>
                                </select>
                            </div>
                            {/* select the type  */}
                            <div>
                                <label className="text-sm font-medium text-gray-600" htmlFor="type">Type</label>
                                <select className='border border-gray-300 w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-green-500'>
                                    <option value=''>Choisir un type</option>
                                    <option value=''>Residentiel</option>
                                    <option value=''>Commercial</option>
                                    <option value=''>Industriel</option>
                                </select>
                            </div>
                        </div>
                        {/* save button */}
                        <Button className={'w-full mt-8'}>Enregistrer</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
