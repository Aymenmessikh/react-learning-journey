import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import FormHtml from "./components/FormHtml";
import FormReactState from "./components/FormReactState.jsx";
import FormWithFormik from "./components/FormWithFormik.jsx";
import FormWithFormikAndYup from "./components/FormWithFormikAndYup.jsx";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<NotFound />} />
                    <Route path="formhtml" element={<FormHtml />} />
                    <Route path="FormReactState" element={<FormReactState />} />
                    <Route path="FormWithFormik" element={<FormWithFormik />} />
                    <Route path="FormWithFormikAndYup" element={<FormWithFormikAndYup />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}