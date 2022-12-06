import { DetailsHeader } from "../../../components/Pages"

export default function () {
  return (
    <div className="min-h-full">
        <DetailsHeader
            title="Post Details"
            tabs={['details', 'component']}
        />
    </div>
  )
}

