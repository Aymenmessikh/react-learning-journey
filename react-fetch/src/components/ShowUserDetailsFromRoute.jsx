import { useParams } from "react-router-dom";
import ShowUserDetailsById from "./ShowUserDetailsById";

export default function ShowUserDetailsFromRoute() {
    const { userid } = useParams();

    return (
        <div>
            <ShowUserDetailsById id={userid} />
        </div>
    );
}
