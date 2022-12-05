import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table, ActionButtons } from "../../components/Tables"
import { posts } from "../../features/Posts/data"

export default function index() {
    // columns for the table
    const columns = useMemo(() => [
        {
            Header: "Numero d'en.",
            id: "numero",
            accessorKey: "register_number",
        },
        {
            Header: "Ville/Commune",
            id: "ville",
            accessorFn: (row) => [row.city, row.town].join(" / "),
        },
        {
            Header: "Type",
            id: "type",
            accessorKey: "type",
        },
        {
            Header: "Transformateurs",
            id: "transformateurs",
            accessorFn: (row) => `actifs ${row.transformers.actives}, inactifs ${row.transformers.inactives}`,
        },
        {
            Header: "Déployé le",
            id: "deployed_at",
            accessorKey: "deployed_at",
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
            <PageHeader title='Listes des pilones' subTitle='Informations sur les pilones et les transformateurs'
                button="Ajouter un pilone" buttonLink='add' />
            <Table {...{ data: posts, columns }} />
        </div>
    )
}
