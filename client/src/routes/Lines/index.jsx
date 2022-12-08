import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { posts } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            header: "Numero de ligne",
            id: "numero",
            accessorKey: "register_number",
        },
        {
            header: "Départ-arrivée",
            id: "ville",
            accessorFn: (row) => [row.city, row.town].join(" / "),
        },
        {
            header: "",
            id: "type",
            accessorKey: "type",
        },
        {
            header: "Transformateurs",
            id: "transformateurs",
            accessorFn: (row) => `actifs ${row.transformers.actives}, inactifs ${row.transformers.inactives}`,
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
            <Table {...{ data: posts, columns }} />
        </div>
    )
}
