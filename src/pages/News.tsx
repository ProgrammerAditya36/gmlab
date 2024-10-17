import Container from "../components/Container";
import PageLayout from "../components/PageLayout";

const imgPath = "/images/GM's_Research_Group_-_News";
const images = [
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
];
const News = () => {
    return (
        <PageLayout bgTitle="News">
            <Container>
                <div className="grid gap-5 lg:grid-cols-2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={`${imgPath}/${image}`}
                            alt="News Image"
                            className="w-[500px] rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out md:w-[350px] lg:w-[550px]"
                        />
                    ))}
                </div>
            </Container>
        </PageLayout>
    );
};

export default News;
