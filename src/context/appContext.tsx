// appContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
import Home from "../pages/Home";
import Team from "../pages/Team";
import News from "../pages/News";
import Facilities from "../pages/Facilities";
import Updates from "../pages/Updates";
import More from "../pages/More";
import { useNavigate } from "react-router-dom";
import Profile from "../pages/Profile";

// Define the shape of the app context
interface Path {
    path: string;
    component: React.ComponentType;
}
interface NavItem {
    name: string;
    path: string;
    dropdown?: NavItem[];
}
interface AppStateContextType {
    paths: Path[];
    navItems: NavItem[];
    navigate: ReturnType<typeof useNavigate>;
}

// Create context with default value
const AppStateContext = createContext<AppStateContextType | undefined>(
    undefined,
);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
    const paths: Path[] = [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/team",
            component: Team,
        },
        {
            path: "/team/dr-gurumurthy",
            component: Profile,
        },
        {
            path: "/news",
            component: News,
        },
        {
            path: "/facilities",
            component: Facilities,
        },
        {
            path: "/updates",
            component: Updates,
        },
        {
            path: "/more",
            component: More,
        },
        {
            path: "*",
            component: Home,
        },
    ];

    const navItems: NavItem[] = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Team",
            path: "/team",
            dropdown: [
                {
                    name: "Dr. Gurumurthy",
                    path: "/team/dr-gurumurthy",
                },
            ],
        },
        {
            name: "News",
            path: "/news",
        },
        {
            name: "Facilities",
            path: "/facilities",
        },
        {
            name: "Updates",
            path: "/updates",
        },
        {
            name: "More",
            path: "/more",
        },
    ];
    const navigate = useNavigate();
    return (
        <AppStateContext.Provider value={{ paths, navItems, navigate }}>
            {children}
        </AppStateContext.Provider>
    );
};

// Create a custom hook to use the app state
// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = (): AppStateContextType => {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error("useAppState must be used within an AppStateProvider");
    }
    return context;
};
