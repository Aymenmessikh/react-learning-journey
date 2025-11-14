import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Accueil from "./components/Accueil/Accueil.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Contact from "./components/Contact/Contact.jsx";
import PostDetail from "./components/Posts/PostDetail.jsx";

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Accueil />} />
                    <Route path={"posts"} element={<Posts />} />
                    <Route path={"posts/:id"} element={<PostDetail />} />
                    <Route path={"contact"} element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App