import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<NotFound/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
