import { useNavigate } from "react-router-dom";

interface MemberProps {
    name: string;
    description?: string;
    imgUrl: string;
    link?: string;
}
const MemberCard = ({ name, description, imgUrl, link }: MemberProps) => {
    const navigate = useNavigate();
    return (
        <div className={`flex items-center flex-col ${link && 'cursor-pointer'}`}
            onClick={() => link && (link.startsWith('http') ? window.open(link, '_blank') : navigate(link))}
        >
            <img src={imgUrl} alt="" className="object-contain w-[250px] h-[400px]" />
            <div className="flex flex-col justify-around mt-2">
                <h1 className="text-2xl text-center">{name}</h1>
                <p className="text-lg mt-4 text-center mx-auto">{description}</p>
            </div>
        </div>
    )
}

export default MemberCard