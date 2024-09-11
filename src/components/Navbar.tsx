import { Link } from "react-router-dom";
import { useAppState } from "../context/appContext";
import { useState } from "react";

const Navbar = () => {
    const { navItems, navigate } = useAppState();
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    const handleClick = (path: string) => {
        navigate(path); // Navigate to the item's path on click
    };
    // Handle mouse entering the menu item (parent)
    const handleMouseEnter = (index: number) => {
        setDropdownOpen(index); // Show the dropdown on hover
    };

    // Handle mouse leaving the menu area (both parent and dropdown)
    const handleMouseLeave = () => {
        setTimeout(() => {
            setDropdownOpen(null); // Hide the dropdown after a delay
        }, 200);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(index)} // Open dropdown on hover
                        onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
                    >
                        {item.dropdown ? (
                            <>
                                {/* Button for the dropdown item */}
                                <button
                                    onClick={() => handleClick(item.path)} // Navigate to parent path on click
                                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                >
                                    {item.name}
                                </button>

                                {/* Show dropdown if hovered */}
                                {dropdownOpen === index && (
                                    <div
                                        className="absolute mt-2 rounded-md bg-white shadow-lg"
                                        onMouseEnter={() =>
                                            setDropdownOpen(index)
                                        } // Keep dropdown open when hovering over it
                                        onMouseLeave={handleMouseLeave} // Close dropdown when leaving the dropdown
                                    >
                                        <ul className="py-1">
                                            {item.dropdown.map(
                                                (dropdownItem, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            to={
                                                                dropdownItem.path
                                                            }
                                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                to={item.path}
                                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
