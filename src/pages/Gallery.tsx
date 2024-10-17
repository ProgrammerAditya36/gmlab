import Container from "../components/Container";
import ImageGallery from "../components/ImageGallery";
import PageLayout from "../components/PageLayout";

const imagePath = `/images/GM's_Research_Group_-_Gallery`;
const images1 = ["1.png", "2.png", "3.png", "4.png", "5.png"];
const images2 = ["6.png", "7.png"];
const images3 = ["8.png", "9.png", "10.png"];
const Gallery = () => {
    return (
        <PageLayout bgTitle="Gallery">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <ImageGallery
                            imageUrls={images1.map(
                                (image) => `${imagePath}/${image}`,
                            )}
                        />
                        <ImageGallery
                            imageUrls={images2.map(
                                (image) => `${imagePath}/${image}`,
                            )}
                        />
                        <ImageGallery
                            imageUrls={images3.map(
                                (image) => `${imagePath}/${image}`,
                            )}
                        />
                        <img
                            src={`${imagePath}/11.png`}
                            alt="Gallery Image"
                            className="w-[500px] rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out md:w-[350px] lg:w-[550px]"
                        />
                    </div>
                    <div className="grid gap-5 lg:grid-cols-3">
                        {["12.png", "13.png", "14.png"].map((image, index) => (
                            <img
                                key={index}
                                src={`${imagePath}/${image}`}
                                alt="Gallery Image"
                                className="w-[500px] rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out md:w-[350px] lg:w-[550px]"
                            />
                        ))}
                    </div>
                    <div className="grid gap-5 lg:grid-cols-4">
                        {["15.png", "16.png", "17.png", "18.png"].map(
                            (image, index) => (
                                <img
                                    key={index}
                                    src={`${imagePath}/${image}`}
                                    alt="Gallery Image"
                                    className="w-[500px] rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out md:w-[350px] lg:w-[550px]"
                                />
                            ),
                        )}
                    </div>
                </div>
            </Container>
        </PageLayout>
    );
};

export default Gallery;
