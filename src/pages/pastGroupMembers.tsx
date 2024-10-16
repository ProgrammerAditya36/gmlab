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

const pastGroupMembers: section[] = [
    {
        title: "B Tech Students",
        members: [
            {
                name: "Mr. Tarun",
                description: "B.Tech. Project - 2021. Current Affiliation - Junior Research Fellow, IISC Bangalore",
                imgUrl: "https://lh6.googleusercontent.com/iyG6n66xIMno3n05_jAK-BTmpNOnAz92ImDg5wOuZ8TRJ8oHE1oRZYxHa4wI1fnlHPQNS-zRY9LjxmM_Ie1sngxqUFYxmrucS1PXIkWOgLQEcJpvuptqdZ1F9JgjwFd3rA=w1280",
            },
            {
                name: "Ms. Vasavi Prasuna Silaparasetti",
                description: "B.Tech. Project - 2020-2022. Current affiliation - Deloitte Touche Tohmatsu Limited",
                imgUrl: "https://lh6.googleusercontent.com/srNWy_KnL796lLJTNZm6BZhszYiFmREBgwxeMa55Ng8jsHmdCd2hr_n3JSVDcYD3FK2cI88GifFXQwHO89mktmrTRiTE0Q_mSvEpe5VWFsLTOv0m_lFJz7p1YP1hcR6DwQ=w1280",
            },
            {
                name: "Mr. Tavish Pattanayak",
                description: "B.Tech. Project - 2017. Current affiliation - PhD Candidate, Georgia Institute of Technology, Atlanta",
                imgUrl: "https://lh3.googleusercontent.com/FNupwhrsK0jjvkjLJDxkg5XkM8pZyj_lkHtFxS1mSC_FBk8tBVZrBruYLRQUhBy7xsIc4Z2tNunOh7UVkUat2Z8Y6eM6nTMoKQBlKdp73SFGG0pHL34tLT0QT3ZkRF33JQ=w1280",
            },
        ],
    }, {
        title: "M.Sc. Students",
        members: [
            {
                name: "Ms. Sangeetha",
                description: "Project Duration - 2017-19\nCurrent Affiliation - Assistant Professor, Yenepoya Engineering College",
                imgUrl: "https://lh5.googleusercontent.com/I0XHLa1vk_rrpyQHqHJJO4-WFpWg8EKuX_qo7R4hl8yfOROh5np9N8rPDKvUEX-MAVE7T9EA0Ibvm_EA5VN5PFETLCrAH8QPlSdS4Ro1-FTwBUeshRADGXxPr70gIK_2fw=w1280"
            },
            {
                name: "Ms. Anju Jolly",
                description: "Project Duration - 2016-2017\nCurrent Affiliation - Research Scholar, Coventry University, United Kingdom",
                imgUrl: "https://lh4.googleusercontent.com/MFCnXbtKQp6ebtLqhMKw2SytsWIXQ5fBf2VboJt3Z4w1oKBvNP2E3K8CKZAMXb4t5nZfZ92hqx_84MZRiKIJd5vZXFCTvWwcSec8vZPlvUsZd43LimMK54E-PdojaQE7Xg=w1280"
            },
            {
                name: "Ms. Anjana Uday",
                description: "Project Duration - 2016-17\nCurrent Affiliation - Research Scholar, University of Cologne, Germany",
                imgUrl: "https://lh3.googleusercontent.com/8EA5mnxcA693O7pr5WpOf5zuVHniU3gf5p-LwwdHRPbeF5OHgJQQJhymPl4OMJcRrbwskBg94eRaJtmU-QIbjLpH8MJIy24qJm-84rNwzFtCsl_0jqBbtuY639gjhPVK4w=w1280"
            },
            {
                name: "Ms. Anusha Dsouza",
                description: "Project Duration - 2019- 2020\nCurrent Affiliation - Research Scholar, CENS",
                imgUrl: "https://lh4.googleusercontent.com/5kIpWYktwgN35ywtzVZ3qvce9ZWXRix5bIBjuuCKt448iqzfe36h5O2zS8sA-B_oo82bzHZIRLDlPyfnF6S5eycyZ7VvdLmIukyx1lr-U5WUQdtT6ER5xjkXngktGmRPyw=w1280"
            },
            {
                name: "Ms. Indira",
                description: "Project Duration - 2019-2020\nCurrent Affiliation - Lecturer, Hubli",
                imgUrl: "https://lh6.googleusercontent.com/B2XFnLDAY4kCPS72ecDBbHFnfV5A5gtIg2OmPGoGzFog0kUTTRAgH1bZDT5Yjym42706amBUwxdvQv9t_ykVX74IGgEx9WNpJyFCpPgjpxCFtkQiQanZr6jwkSioldcR-w=w1280"
            },
            {
                name: "Ms. Shreya",
                description: "Project Duration - 2021-2022\nCurrent Affiliation - Intern, CENS",
                imgUrl: "https://lh3.googleusercontent.com/JkrwfmAlDJ-pRiMXUcY7bKI-c7FAJM71xE6OuG3f--eW-Pp6o7ksnp5EFxohkefjH99Z2Xtr5C3-Iv289E1CkzrC3MJbgBMlxRqingeGyfJhesciIPbEOczQB2NJ2ktWPw=w1280"
            },
            {
                name: "Mr. Desmond Gracian",
                description: "Project Duration - 2022-23\nCurrent Affiliation - Straive",
                imgUrl: "https://lh4.googleusercontent.com/QgjjV1Uk-i6SD8uCJPO6QF2Thk4DQiCO-ymuuTNfiY4ndYnlwmVlG34BnJgB_I8UWVgE27g2tFBk8FLNgQqI0my9LJmw6b3qIalPtjlBzBYwz0Jf_72cn9U76OaAxoFQYQ=w1280"
            },
            {
                name: "Mr. Madhu Sarthi J",
                description: "Project Duration - 2022-24",
                imgUrl: "https://lh3.googleusercontent.com/YZBD4oxS0ASURxAh1MmoF9e18ssmaFvFFqIrQyvBoZmsIFySKjVWDrsvUvoO3191ZcMeqNECL_9HejwEeOkipICGLb09m6q-VXCwyAPWxabtBXtfmlpUD9_WPJL5tfrrNQ=w1280"
            }
        ]
    }, {
        title: 'M.Tech Students',
        members: [
            {
                name: 'Mr. Mithun',
                description: 'Project Duration - 2020 - 2021 Current Affiliation - Atimi software',
                imgUrl: 'https://lh6.googleusercontent.com/zz4iHwBmzDx-OLQec1XxMy70rKKKIPMQJrzsnUXguGda7_-7P8yhiljTuJnOxQGz_xaR9M8GumJa6ukOlWjQ3cJ-Kyp3FoMhhs6YZDHMyIB4qu-NK9JWsJiGbExd2BrB=w1280'



            }
        ]
    },
    {
        title: 'Resesarch Interns',
        members: [
            {
                name: 'Ms. Vishwashree',
                description: 'Project Duration - 2023-2024 Current Affiliation - Atimi software',
                imgUrl: 'https://lh6.googleusercontent.com/VDHbYWBsmmPRQK3-YfT9KDfliTL2BW0CABc90gNMFcgnn34JdOqXOCaFooEqQZzQUnZXv8rQb3v2rqhGsWWydZHHjo87RDJz-SbshaWgujRAw0TFOWk_chTlj-cTWKLamQ=w1280'
            }
        ]
    }
]
const PastGroupMembers = () => {
    return (
        < PageLayout bgUrl="https://lh4.googleusercontent.com/4AYLfJhPvpZ6MOqwsFw4sphEgbSx3zdiY2-i_F0RxCrRBbWUayECwmc7QLak6y_WytpnycinRiBygzJkO9QVf_c=w16383"
            bgTitle="Past Group Members" >
            {
                pastGroupMembers.map((section) => (
                    <div className="flex flex-col  gap-5">
                        <h1 className="text-3xl font-semibold mb-2">{section.title}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                section.members.map((member) => (
                                    <MemberCard key={member.name} name={member.name} description={member.description} imgUrl={member.imgUrl} link={member.link} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </PageLayout>
    );
};

export default PastGroupMembers;
