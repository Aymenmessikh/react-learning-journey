import { useParams } from "react-router-dom";
import EditUserDetailsById from "./EditUserDetailsById";

export default function EditUserDetailsByIdFromRoute() {
    const { id } = useParams();

    return (
        <div>
            <EditUserDetailsById id={id} />
        </div>
    );
}
