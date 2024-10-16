import { useAppState } from "../context/appContext";

const Footer = () => {
    const { footerItems, navigate } = useAppState();
    return (
        <div className="sticky bottom-0 block w-full">
            <footer className="flex items-center justify-center bg-[rgba(86,86,86)] py-6 text-white">
                <ul className="flex gap-4">
                    {footerItems.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    if (item.path) {
                                        navigate(item.path);
                                    }
                                }}
                                className="hover:underline"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
