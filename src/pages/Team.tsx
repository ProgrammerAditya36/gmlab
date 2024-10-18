import Container from "../components/Container";
import PageLayout from "../components/PageLayout";
import ProfileCard from "../components/ProfileCard";

const Team = () => {
    interface Member {
        name: string;
        description: string;
        imgUrl: string;
        link?: string;
    }
    const members: Member[] = [
        {
            name: "Dr. Gurumurthy",
            description:
                "The dynamic leader at the helm of our lab, ensuring seamless progress and success",
            link: "/team/dr-gurumurthy",
            imgUrl: `https://storage.googleapis.com/phoneauth-377dc.appspot.com/images/GM's_Research_Group_-_Team/3.jpg`,
        },
        {
            name: "Present Group Members",
            description: "The Brilliant Minds Fueling Innovation in Our Lab.",
            link: "/team/presentGroupMembers",
            imgUrl: `https://storage.googleapis.com/phoneauth-377dc.appspot.com/images/GM's_Research_Group_-_Team/4.jpg`,
        },
        {
            name: "Past Group Members",
            link: "/team/pastGroupMembers",
            description:
                "Former lab members, whose dedicated work laid the foundation for our continued success",
            imgUrl: `https://storage.googleapis.com/phoneauth-377dc.appspot.com/images/GM's_Research_Group_-_Team/5.jpg`,
        },
    ];
    return (
        <PageLayout bgTitle="MEET THE TEAM">
            <Container>
                {members.map((member) => (
                    <ProfileCard
                        title={member.name}
                        description={member.description}
                        imgUrl={member.imgUrl}
                        link={member.link}
                    />
                ))}
            </Container>
        </PageLayout>
    );
};

export default Team;
