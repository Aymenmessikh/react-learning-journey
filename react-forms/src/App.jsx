import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import FormHtml from "./components/FormHtml";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<NotFound />} />
                    <Route path="formhtml" element={<FormHtml />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}