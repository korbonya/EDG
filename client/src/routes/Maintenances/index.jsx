import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { powerStations } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Service",
            id: "service",
            accessorKey: "service",
        },
        {
            header: "sur",
            id: "sur",
            accessorFn: (row) => row.on,
        },
        {
            header: "Agent",
            id: "type",
            accessorKey: "agent",
        },
        {
            header: "status",
            id: "status",
            accessorFn: (row) => `${row.power} MW`,
        },
        {
            accessorKey: "date",
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
                button="Ajouter une centrale" buttonLink='add' />
            <Table {...{ data: powerStations, columns }} />
        </div>
    )
}
