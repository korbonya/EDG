import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { lines } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Numero de ligne",
            id: "numero",
            accessorKey: "number_register",
            width: 200,
        },
        {
            header: "Départ-arrivée",
            id: "ville",
            accessorFn: (row) => row.startEnd,
            width: 200,
        },
        {
            header: "Tension",
            id: "tension",
            accessorKey: "voltage",
            width: 200,
        },
        {
            header: "longeur",
            id: "longeur",
            accessorFn: (row) => `${row.length} km`,
            width: 100,
        },
        {
            accessorKey: "deployed_at",
            header: "Déployé le",
            id: "deployed_at",
            width: 150,
        },
        {
            accessorKey: 'id',
            header: '',
            cell: info => <div className=''>
                <ActionButtons id={info.getValue()} onDelete={() => onDelete(info.getValue())} />
            </div>,
            width: 50,
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
