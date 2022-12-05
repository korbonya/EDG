import { useMemo } from "react"
import { PageHeader } from "../../components/Pages"
import { Table } from "../../components/Tables"
import {posts} from "../../features/Posts/data"

export default function index() {
    // columns for the table
    
    return (
       <PageHeader title='Listes des pilones' subTitle='Informations sur les pilones et les transformateurs'
        button="Ajouter un pilone" buttonLink='add' />
    )
}
