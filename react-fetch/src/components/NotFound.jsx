import { useLocation } from "react-router"
export default function NotFound() {
    const location = useLocation()
    const routename = location.pathname
    return (
        <>
            <div>
                404 NOT FOUND
            </div>
            <div>
                Aucun Composant React n'est associé à la route {routename}.
            </div>
        </>
    )
}
