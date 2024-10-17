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
const imagePath = `/images/GM's_Research_Group_-_Past_Group_Members`;

const pastGroupMembers: section[] = [
    {
        title: "B Tech Students",
        members: [
            {
                name: "Mr. Tarun",
                description:
                    "B.Tech. Project - 2021. Current Affiliation - Junior Research Fellow, IISC Bangalore",
                imgUrl: "3.jpg",
            },
            {
                name: "Ms. Vasavi Prasuna Silaparasetti",
                description:
                    "B.Tech. Project - 2020-2022. Current affiliation - Deloitte Touche Tohmatsu Limited",
                imgUrl: "4.jpg",
            },
            {
                name: "Mr. Tavish Pattanayak",
                description:
                    "B.Tech. Project - 2017. Current affiliation - PhD Candidate, Georgia Institute of Technology, Atlanta",
                imgUrl: "5.jpg",
            },
        ],
    },
    {
        title: "M.Sc. Students",
        members: [
            {
                name: "Ms. Sangeetha",
                description:
                    "Project Duration - 2017-19\nCurrent Affiliation - Assistant Professor, Yenepoya Engineering College",
                imgUrl: "6.jpg",
            },
            {
                name: "Ms. Anju Jolly",
                description:
                    "Project Duration - 2016-2017\nCurrent Affiliation - Research Scholar, Coventry University, United Kingdom",
                imgUrl: "7.jpg",
            },
            {
                name: "Ms. Anjana Uday",
                description:
                    "Project Duration - 2016-17\nCurrent Affiliation - Research Scholar, University of Cologne, Germany",
                imgUrl: "8.jpg",
            },
            {
                name: "Ms. Anusha Dsouza",
                description:
                    "Project Duration - 2019- 2020\nCurrent Affiliation - Research Scholar, CENS",
                imgUrl: "9.jpg",
            },
            {
                name: "Ms. Indira",
                description:
                    "Project Duration - 2019-2020\nCurrent Affiliation - Lecturer, Hubli",
                imgUrl: "10.jpg",
            },
            {
                name: "Ms. Shreya",
                description:
                    "Project Duration - 2021-2022\nCurrent Affiliation - Intern, CENS",
                imgUrl: "11.jpg",
            },
            {
                name: "Mr. Desmond Gracian",
                description:
                    "Project Duration - 2022-23\nCurrent Affiliation - Straive",
                imgUrl: "12.jpg",
            },
            {
                name: "Mr. Madhu Sarthi J",
                description: "Project Duration - 2022-24",
                imgUrl: "13.jpg",
            },
        ],
    },
    {
        title: "M.Tech Students",
        members: [
            {
                name: "Mr. Mithun",
                description:
                    "Project Duration - 2020 - 2021 Current Affiliation - Atimi software",
                imgUrl: "14.jpg",
            },
        ],
    },
    {
        title: "Resesarch Interns",
        members: [
            {
                name: "Ms. Vishwashree",
                description:
                    "Project Duration - 2023-2024 Current Affiliation - Atimi software",
                imgUrl: "15.jpg",
            },
        ],
    },
];
const PastGroupMembers = () => {
    return (
        <PageLayout
            bgUrl="https://lh4.googleusercontent.com/4AYLfJhPvpZ6MOqwsFw4sphEgbSx3zdiY2-i_F0RxCrRBbWUayECwmc7QLak6y_WytpnycinRiBygzJkO9QVf_c=w16383"
            bgTitle="Past Group Members"
        >
            <Container>
                {pastGroupMembers.map((section) => (
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

export default PastGroupMembers;
