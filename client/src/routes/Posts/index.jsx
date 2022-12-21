import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { posts } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Nom du Poste",
            id: "numero",
            accessorKey: "name",
        },
        {
            header: "Tension",
            id: "tension",
            accessorKey:"voltageLevel",
        },
        {
            header: "Lignes",
            id: "lines",
            accessorFn:(row) => row.lines.join(', '),
        },
        {
            header: "Dernier M.",
            id: "maintenance",
            accessorFn: (row) => row.maintenance.lastMaintenanceDate,
        },
        {
            accessorFn: (row) => row.status.inService ? "En service" : "Hors service",
            header: "Status",
            id: "status",
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
            <PageHeader title='Listes des poste de transformations' subTitle='Informations sur les postes et les transformateurs'
                button="Ajouter un poste" buttonLink='add' />
            <Table {...{ data: posts, columns }} />
        </div>
    )
}
