import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import Home from "../pages/Home";
import Team from "../pages/Team";
import News from "../pages/News";
import Facilities from "../pages/Facilities";
import Updates from "../pages/Updates";
import More from "../pages/More";
import { useNavigate } from "react-router-dom";
import Profile from "../pages/Profile";
import pastGroupMembers from "../pages/pastGroupMembers";
import presentGroupMembers from "../pages/presentGroupMembers";
import publications from "../pages/publications";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";

// Define the shape of the app context
interface Path {
    path: string;
    component: React.ComponentType;
}
interface NavItem {
    name: string;
    path?: string;
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
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(
                window.innerWidth >= 1024 && window.innerWidth < 1280,
            );
        };
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const paths: Path[] = [
        { path: "/", component: Home },
        { path: "/team", component: Team },
        { path: "/team/dr-gurumurthy", component: Profile },
        { path: "/team/pastGroupMembers", component: pastGroupMembers },
        { path: "/team/presentGroupMembers", component: presentGroupMembers },
        { path: "/news", component: News },
        { path: "/facilities", component: Facilities },
        { path: "/updates", component: Updates },
        { path: "/more", component: More },
        { path: "/publications", component: publications },
        { path: "/contact", component: Contact },
        { path: "/gallery", component: Gallery },
        { path: "*", component: Home },
    ];

    const baseNavItems: NavItem[] = [
        { name: "Home", path: "/" },
        {
            name: "Team",
            path: "/team",
            dropdown: [
                { name: "Dr. Gurumurthy", path: "/team/dr-gurumurthy" },
                {
                    name: "Present Group Members",
                    path: "/team/presentGroupMembers",
                },
                { name: "Past Group Members", path: "/team/pastGroupMembers" },
            ],
        },
        { name: "News", path: "/news" },
        { name: "Facilities", path: "/facilities" },
        { name: "Updates", path: "/updates" },
    ];

    // Conditionally add "More" dropdown for smaller screens
    const moreItems: NavItem[] = isLgScreen
        ? [
              {
                  name: "More",

                  dropdown: [
                      { name: "Gallery", path: "/gallery" },
                      { name: "Publications", path: "/publications" },
                      { name: "Contact", path: "/contact" },
                  ],
              },
          ]
        : [
              { name: "Gallery", path: "/gallery" },
              { name: "Publications", path: "/publications" },
              { name: "Contact", path: "/contact" },
          ];

    const navItems = [...baseNavItems, ...moreItems];

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
