import { Button } from "../../components/Buttons"
import { Input, Password } from "../../components/inputs"

export default function Login() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white rounded-lg shadow-xl p-6 m-4 w-96">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Connexion</h2>
                    <form className="mt-4">
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value=""
                            onChange={() => { }}
                        />
                        <Password
                            label="Mot de passe"
                            name="password"
                            placeholder="Mot de passe"
                            value=""
                            onChange={() => { }}
                        />
                        <Button className="w-full mt-4">Se connecter</Button>
                    </form>
                    <Button className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800">S'inscrire</Button>
                </div>
            </div>
        </div>
    )
}
