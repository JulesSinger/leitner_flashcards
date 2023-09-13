import { useParams } from "react-router-dom"

export default function Box() {
    const params = useParams();

    return (
        <div>
            <h1>Box {params.index}</h1>
        </div>
    )
}