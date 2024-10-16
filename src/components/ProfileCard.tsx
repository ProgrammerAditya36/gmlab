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
        <div className="flex gap-10 justify-around">
            <div className="">
                <img src={imgUrl} alt="" className="object-contain max-w-[400px]" />
            </div>
            <div className="flex flex-col justify-start gap-5 w-1/2">
                <h1 className={`text-4xl ${link && 'cursor-pointer'} underline`}>
                    {link ? <span onClick={() => navigate(link)}>{title}</span> : title}
                </h1>
                <p className="text-lg mt-4 text-justify ">{description}</p>
            </div>
        </div>
    )
}

export default ProfileCard