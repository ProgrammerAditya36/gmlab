import { useNavigate } from "react-router-dom";

interface ProfileProps {
    imgUrl: string;
    title: string;
    description: string;
    link?: string;
}
const ProfileCard = ({ imgUrl, title, description, link }: ProfileProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-around gap-5 lg:flex-row lg:gap-10">
            <div className="mx-auto">
                <img
                    src={imgUrl}
                    alt=""
                    className="max-w-[250px] object-contain lg:max-w-[400px]"
                />
            </div>
            <div className="flex flex-col justify-start text-center lg:w-1/2 lg:gap-5 lg:text-left">
                <h1
                    className={`text-4xl ${link && "cursor-pointer"} underline`}
                >
                    {link ? (
                        <span onClick={() => navigate(link)}>{title}</span>
                    ) : (
                        title
                    )}
                </h1>
                <p className="mt-4 text-justify text-lg">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
