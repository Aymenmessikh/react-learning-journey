import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewTask from "./pages/NewTask.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";
import EditTask from "./pages/EditTask.jsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewTask />} />
                <Route path="/edit/:id" element={<EditTask />} />
                <Route path="/task/:id" element={<TaskDetailPage />} />
            </Routes>
        </Layout>
    );
}

export default App;