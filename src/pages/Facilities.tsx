import Container from "../components/Container";
import ImageCard from "../components/ImageCard";
import PageLayout from "../components/PageLayout";

const imagePath = `/images/GM's_Research_Group_-_Facilities`;
const facilities = [
    "Photocatalytic Chamber",
    "UV Irradiation Chamber",
    "Fumehood",
    "Dip Coating Unit",
    "Electrodeposition Unit",
    "Hydrothermal Reactor",
    "Ultrasonicator",
    "Spin Coater",
    "Hot Air Oven",
    "pH meter",
    "Muffle Furnace",
];
const Facilities = () => {
    return (
        <PageLayout bgTitle="Facilities">
            <Container>
                <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
                    {facilities.map((facility, index) => (
                        <ImageCard
                            key={index}
                            title={facility}
                            imgUrl={`${imagePath}/${index + 3}.jpg`}
                        />
                    ))}
                </div>
            </Container>
        </PageLayout>
    );
};

export default Facilities;
