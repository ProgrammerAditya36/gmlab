import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppStateProvider } from "./context/appContext";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </BrowserRouter>,
);
