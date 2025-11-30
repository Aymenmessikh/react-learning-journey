import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ShowUsersExample from "./components/ShowUsersExample.jsx";
import ShowUsers from "./components/ShowUsers.jsx";
import ShowUserDetailsById from "./components/ShowUserDetailsById.jsx";
import ShowUserDetailsFromRoute from "./components/ShowUserDetailsFromRoute.jsx";
import CreateUser from "./components/CreateUser.jsx";
import EditUserDetailsById from "./components/EditUserDetailsById.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="users/showusersexample" element={<ShowUsersExample />} />
                    <Route path="users/showusers" element={<ShowUsers />} />
                    <Route
                        path="users/showuserbyidtest"
                        element={<ShowUserDetailsById id={2} />}
                    />
                    <Route path="user/detail/:userid" element={<ShowUserDetailsFromRoute />} />
                    <Route path="user/create" element={<CreateUser />} />
                    <Route path="edituserbyidtest" element={<EditUserDetailsById id={2} />} />
                    <Route index element={<NotFound/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
