import { useState } from "react";

interface ImageGalleryProps {
    imageUrls: string[];
}
const ImageGallery = ({ imageUrls }: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1,
        );
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Main Image */}
            <div className="relative">
                <img
                    src={imageUrls[currentIndex]}
                    alt="Gallery Image"
                    className="w-[500px] rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out md:w-[350px] lg:w-[550px]"
                />
                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white bg-opacity-75 shadow hover:bg-gray-100"
                >
                    &larr;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white bg-opacity-75 shadow hover:bg-gray-100"
                >
                    &rarr;
                </button>
            </div>

            {/* Dot Navigation */}
            <div className="mt-4 flex space-x-2">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        } transition-all duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
