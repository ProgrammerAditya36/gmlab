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
            name: 'Dr. Gurumurthy',
            description: 'The dynamic leader at the helm of our lab, ensuring seamless progress and success',
            imgUrl: "https://lh6.googleusercontent.com/pPj3ylpE6WEC9mxYF30vXRDb_Oc3AdBp4bFBGJbrbdiduipuuVKJ_-cMviI0gOsLuVvVQayy-34O63P2YG5YXS8C8VR7XuVSzo1QD3FB6rMgV4BbAbx79ibhyToYynX3WQ=w1280",
            link: '/team/dr-gurumurthy'
        },
        {
            name: 'Present Group Members',
            description: 'The Brilliant Minds Fueling Innovation in Our Lab.',
            imgUrl: 'https://lh5.googleusercontent.com/a21tj9q_uQmcAYfD-Izaryuk9j-jxV4MyTh9lvt2Uy1CHcSlU6gfxOFc_uc6nYTGM4WTzfKOGGWRFjwCdh8qTsxGaAjMzNS6a0LolRRXGU8YHM0fnj3opLWYh_M_sY_TBQ=w1280',
            link: '/team/presentGroupMembers'
        }, {
            name: 'Past Group Members',
            imgUrl: 'https://lh3.googleusercontent.com/xXx0PP9sE2o_anjNjFzivSfyaxdkO-NTYML9tsRIigNNt-tEu4ieRw--tu5P6uZYs5Mw2sGTOvdGV6tkhFwYp-518IIFfBKKxnJc_I9ly6gtYYgnrc21IFExv8OFLu_5pw=w1280',
            link: '/team/pastGroupMembers',
            description: 'Former lab members, whose dedicated work laid the foundation for our continued success'
        }
    ]
    return (
        <PageLayout bgUrl="https://lh6.googleusercontent.com/zVAYc_T0f0F6hVGEz3_yO9xPwIqjM0lhlAyGl1kuJzgGKGLLt9Cfn8n9gGRkFxNgTDi05o40QBnYgAlItFGqDos=w16383" bgTitle="MEET THE TEAM">

            {members.map((member) => (
                <ProfileCard title={member.name} description={member.description} imgUrl={member.imgUrl} link={member.link} />
            ))
            }
        </PageLayout>
    );
};

export default Team;
