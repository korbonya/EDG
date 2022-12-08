import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { tStations } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Numeéro du poste",
            id: "numero",
            accessorKey: "number_register",
        },
        {
            header: "Adresse",
            id: "address",
            accessorFn: (row) => row.address,
        },
        {
            header: "Entrée",
            id: "tension",
            accessorFn: (row) => `${row.voltage} kV`
        },
        {
            header: "Sortie",
            id: "longeur",
            accessorFn: (row) => `${row.length} km`,
        },
        {
            accessorKey: "deployed_at",
            header: "Déployé le",
            id: "deployed_at",
        },
        {
            accessorKey: 'id',
            header: '',
            cell: info => <div className=''>
                <ActionButtons id={info.getValue()} onDelete={() => onDelete(info.getValue())} />
            </div>,
        }
    ], [])

    return (
        <div>
            <PageHeader title='Listes des lignes élèctriques' subTitle=''
                button="Ajouter une ligne" buttonLink='add' />
            <Table {...{ data: lines, columns }} />
        </div>
    )
}
