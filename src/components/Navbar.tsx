import { useAppState } from "../context/appContext";
import { useState } from "react";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";
import logo from "/logo.png";

const Navbar = () => {
    const { navItems, navigate } = useAppState();
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = (index: number) => {
        if (activeDropdown === index) {
            setActiveDropdown(null); // Close the dropdown if it's already open
        } else {
            setActiveDropdown(index); // Open the clicked dropdown
        }
    };

    return (
        <nav className="bg-gray-900 p-4">
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="h-10 w-10" />
                    <span className="text-lg font-bold text-white">
                        GM Research Lab
                    </span>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Menu Items */}
                <ul
                    className={`absolute right-0 w-full bg-gray-900 p-4 transition-all duration-300 ease-in-out lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:p-0 ${menuOpen ? "top-16" : "top-[-100%]"
                        }`}
                >
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col gap-1 lg:flex-row lg:items-center"
                        >
                            <div className="flex items-center">
                                <span
                                    className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-white hover:font-bold"
                                    onClick={() => {
                                        if (item.path) {
                                            navigate(item.path);
                                            setActiveDropdown(null);
                                            setMenuOpen(false);
                                        } else if (item.dropdown) {
                                            toggleDropdown(index);
                                        }
                                    }}
                                >
                                    {item.name}
                                </span>

                                {/* Dropdown Toggle Icon */}
                                {item.dropdown && (
                                    <span
                                        className="ml-1 cursor-pointer text-white lg:ml-2"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {activeDropdown === index ? (
                                            <ChevronUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="h-4 w-4" />
                                        )}
                                    </span>
                                )}
                            </div>

                            {/* Dropdown Items */}
                            {item.dropdown && activeDropdown === index && (
                                <div className="mt-1 z-10 w-full rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:top-full lg:mt-2 lg:w-48">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        {item.dropdown.map(
                                            (dropdownItem, idx) => (
                                                <span
                                                    key={idx}
                                                    className="block cursor-pointer px-3 py-2 text-sm text-white hover:bg-gray-700 hover:font-semibold"
                                                    onClick={() => {
                                                        if (dropdownItem.path) {
                                                            navigate(
                                                                dropdownItem.path,
                                                            );
                                                        }
                                                        setActiveDropdown(null);
                                                        setMenuOpen(false); // Close menu on selection in mobile
                                                    }}
                                                >
                                                    {dropdownItem.name}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
