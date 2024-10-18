import Container from "../components/Container";
import MemberCard from "../components/MemberCard";
import PageLayout from "../components/PageLayout";

interface member {
    name: string;
    description?: string;
    imgUrl: string;
    link?: string;
}
interface section {
    title: string;
    members: member[];
}

const imagePath = `https://storage.googleapis.com/phoneauth-377dc.appspot.com/images/GM's_Research_Group_-_Present_Group_Members`;

const presentGroupMembers: section[] = [
    {
        title: "PhD Scholars",
        members: [
            {
                name: "Ms. Shilpa M P",
                description: `M.Sc - St. Philomena College, Puttur Joined - 2020 Research focus - Nanomaterials `,
                link: "https://scholar.google.com/citations?hl=en&user=qW0kcPgAAAAJ",
                imgUrl: "3.jpg",
            },
            {
                name: `Mr. Shivakumar J S`,
                description: `M.Sc - Karnatak University,  Dharwad Joined - 2021 Research focus - Nanofluids `,
                link: "https://scholar.google.com/citations?user=3FyabecAAAAJ&hl=en&oi=sra",
                imgUrl: "4.jpg",
            },
            {
                name: "Mr. Saideep S Bhat",
                description: `M.Sc - Manipal Institute of Technology Joined - 2022 Research focus - Thin Films `,
                link: "https://scholar.google.com/citations?hl=en&user=WWAh2CUAAAAJ",
                imgUrl: "5.jpg",
            },
            {
                name: "Mrs. Nanditha Nair",
                description: `M.Sc - Manipal Institute of Technology Joined - 2023 Research focus - Pervoskites `,
                imgUrl: "6.jpg",
            },
            {
                name: "Ms. Shreepooja Bhat",
                description: `M.Sc - Manipal Institute of Technology Joined - 2023 Research focus - Memristors `,
                imgUrl: "7.jpg",
            },
            {
                name: "Ms. Nanditha T K",
                description: `M.Sc - St. Aloysius College, Mangalore Joined - 2023 Research focus - Bimetallic Nanomaterials `,
                imgUrl: "8.jpg",
            },
            {
                name: "Mrs Namitha B",
                description: `M.Sc - Mangalore University Joined - 2024 Research Focus - Synaptic devices`,
                imgUrl: "9.jpg",
            },
        ],
    },
    {
        title: "Msc Students",
        members: [
            {
                name: "Mr. Akarsh M Arjun",
                imgUrl: "10.jpg",
            },
        ],
    },
    {
        title: "BTech Students",
        members: [
            {
                name: "Mr. Nigel Chris Fernandes",
                imgUrl: "11.jpg",
            },
            {
                name: "Mr. Krishnakumar Sarda",
                imgUrl: "12.jpg",
            },
            {
                name: "Mr. Vedanth Prabhu",
                imgUrl: "13.jpg",
            },
        ],
    },
];

const PresentGroupMembers = () => {
    return (
        <PageLayout bgTitle="Present Group Members">
            <Container>
                {presentGroupMembers.map((section) => (
                    <div className="flex flex-col gap-5">
                        <h1 className="mb-2 text-3xl font-semibold">
                            {section.title}
                        </h1>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {section.members.map((member) => (
                                <MemberCard
                                    key={member.name}
                                    name={member.name}
                                    description={member.description}
                                    imgUrl={`${imagePath}/${member.imgUrl}`}
                                    link={member.link}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </PageLayout>
    );
};

export default PresentGroupMembers;
