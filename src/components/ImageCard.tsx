interface ImageCardProps {
    imgUrl: string;
    title: string;
}
const ImageCard = ({ imgUrl, title }: ImageCardProps) => {
    return (
        <div className="mb-6 flex flex-col items-center gap-5">
            <img
                src={imgUrl}
                className="h-[400px] max-w-[365px] object-cover"
                alt=""
            />
            <h1 className="text-3xl">{title}</h1>
        </div>
    );
};

export default ImageCard;
