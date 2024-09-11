import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { useAppState } from "./context/appContext";
function App() {
    const { paths } = useAppState();
    return (
        <>
            <Layout>
                <Routes>
                    {paths.map((path, index) => {
                        return (
                            <Route
                                key={index}
                                path={path.path}
                                element={<path.component />}
                            />
                        );
                    })}
                </Routes>
            </Layout>
        </>
    );
}

export default App;
