import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { powerStations } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Nom",
            id: "numero",
            accessorKey: "name",
        },
        {
            header: "Ville/Commune",
            id: "ville",
            accessorFn: (row) => row.cityTown,
        },
        {
            header: "Type",
            id: "type",
            accessorKey: "type",
        },
        {
            header: "Puissance",
            id: "transformateurs",
            accessorFn: (row) => `${row.power} MW`,
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
            <PageHeader title='Listes des centrales élèctriques' subTitle=''
                button="Ajouter un pylône" buttonLink='add' />
            <Table {...{ data: powerStations, columns }} />
        </div>
    )
}
