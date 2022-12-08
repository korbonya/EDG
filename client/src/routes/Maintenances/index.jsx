import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { maintenances } from "../../features/Posts/data"

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
            id: "agent",
            accessorKey: "agent",
        },
    
        {
            accessorKey: "date",
            header: "Date",
            id: "date",
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
            <Table {...{ data: maintenances, columns }} />
        </div>
    )
}
