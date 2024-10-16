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



const presentGroupMembers: section[] = [
    {
        title: 'PhD Scholars',
        members: [
            {
                name: 'Ms. Shilpa M P',
                description: `M.Sc - St. Philomena College, Puttur Joined - 2020 Research focus - Nanomaterials `,
                imgUrl: `https://lh5.googleusercontent.com/GHucLVe7O_BoOw2kFo0M__DWWAK2zjshfo76W0vD6Ew4CPDkh79jDXt44iICM7m0g8ne06mqQpKGQKpF1U58GNXrnLuG9TOXWkuDRgusPlXGuStxdED88QxH9d2k3-HRMw=w1280`,
                link: 'https://scholar.google.com/citations?hl=en&user=qW0kcPgAAAAJ'
            }, {
                name: `Mr. Shivakumar J S`,
                description: `M.Sc - Karnatak University,  Dharwad Joined - 2021 Research focus - Nanofluids `,
                imgUrl: 'https://lh3.googleusercontent.com/0dBXMV62wKQWjvuWr4WzrU-BAYLcQ27Tj8pmeRw0LmiLjZIO92Smjaa9maNq85j8KNZm2nS454-2lDQx6yNdZXSCoLu0QfD_gZcsW9iFtN3YEZi5nmb8CHZ_VQID9hkGeg=w1280',
                link: 'https://scholar.google.com/citations?user=3FyabecAAAAJ&hl=en&oi=sra'
            }, {
                name: 'Mr. Saideep S Bhat',
                description: `M.Sc - Manipal Institute of Technology Joined - 2022 Research focus - Thin Films `,
                imgUrl: 'https://lh4.googleusercontent.com/zHNjRVFrXb8qUfIhBqFLTl8Xp0bhEKkYNSreCqpJhO_lM-r9tfMcuJsg9XjQnxwR0qD8SCiarMo0BeXZisHc1DLc65K8bW4WxEgZyYjWYDryL2BCAqBp4ElbPZlWyrazMQ=w1280',
                link: 'https://scholar.google.com/citations?hl=en&user=WWAh2CUAAAAJ'
            }, {
                name: 'Mrs. Nanditha Nair',
                description: `M.Sc - Manipal Institute of Technology Joined - 2023 Research focus - Pervoskites `,
                imgUrl: 'https://lh5.googleusercontent.com/X_gxsY50M02eR6hVAy1FnW1iVXiDzgXehGKL9I9t1OVzxrBNiJeq1ZlptF0C9J0t5UCSSLPOyTMay0WvQ8haKIZTd3YRbATboYrBI3bhSPmz7IWhL48HZxcKj6BkHxzuAw=w1280',
            }, {
                name: 'Ms. Shreepooja Bhat',
                description: `M.Sc - Manipal Institute of Technology Joined - 2023 Research focus - Memristors `,
                imgUrl: 'https://lh6.googleusercontent.com/YOBp3EGpjUURjD6xLwekk0-rwRlOvajL-Diy6IfrBdoWplOsWmshlaa3P_477Nm0lh4kRm9GchCxjJyLoYii4Y-RpHTe3mrtEVnFIVjIDfwA8LwWIsKDvpNCzFzInXoASg=w1280',
            }, {
                name: 'Ms. Nanditha T K',
                description: `M.Sc - St. Aloysius College, Mangalore Joined - 2023 Research focus - Bimetallic Nanomaterials `,
                imgUrl: 'https://lh4.googleusercontent.com/bHDKyr5aKTF4cZi0NhDo-j_M2dxfnwTMFd_NDhxG1juOsAH6mwjiWawsauTlqpCLerdUTCxjKchS8HKvtwB_nIZeyyGcP6n5YPBf5h1PHdaB6ag-f-LHR5-KUKUyoxhW9Q=w1280',
            }
            , {
                name: 'Mrs Namitha B',
                description: `M.Sc - Mangalore University Joined - 2024 Research Focus - Synaptic devices`,
                imgUrl: 'https://lh4.googleusercontent.com/bA-2DYM2BK3DD0QrNDwbKgtuhvRKU6D1PYiQnP5VmS3bDcLgrYPwyxK437XLDAubUb3TS2NixB-m3KaS96RuuemhVFBHXX17coYOKpCxLe9v8TAOrpwGIoSFOMErSHLkYw=w1280'
            }
        ]
    },
    {
        title: 'Msc Students',
        members: [
            {
                name: 'Mr. Akarsh M Arjun',
                imgUrl: 'https://lh6.googleusercontent.com/pWH4s5tHDDPv4F2zkw6bwAdDGLbMTLZJaLeYe0os9jZFBQCygvJtGRnMg-948-BKM1TG454kY8v1Kk6qf9s2FrXLXSKmZhI_E49bDkCp_7CSEkeF_jf1Zya3fZTxTT7Llw=w1280'
            }
        ]
    },
    {
        title: 'BTech Students',
        members: [
            {
                name: 'Mr. Nigel Chris Fernandes',
                imgUrl: 'https://lh5.googleusercontent.com/zbBo1uRPBedD2aZcaILnjvi02wryKHfImFRiIBPMUaThD9rmjQEtm2XLm1Q7cgl0P-ucawlGQwWVoFT8H2rPvmMm-0OREFT-orh7g_MWK_QkuJOFUlEFWEQ3erNu0XHMPQ=w1280'
            },
            {
                name: 'Mr. Krishnakumar Sarda',
                imgUrl: 'https://lh5.googleusercontent.com/4FnFDt3RLwsjpeplU0ZFQUWAxVd6R6y0q_EOo_h8UiQWk4sV8Gy0ZfJHS6fEF-yMWVeL9KzxZq15LeSpzCxXx6gMMLxhF92rhHbGxXjhemzDGbQpShqBSajvQl1muYNBpg=w1280'
            },
            {
                name: 'Mr. Vedanth Prabhu',
                imgUrl: 'https://lh6.googleusercontent.com/SSGC13u08gMDkYrLzFyh6zqmlo6jNNu7iSk5jusF2NvI4aDyG2gjDQIgGguv4NmuFxYzd4Sor8LRsfB5ED5fIVjs_6W6sB2lTtjlJmM735by64WYpFzOdc2ALWlqt6KdMg=w1280'
            }
        ]
    }
]

const PresentGroupMembers = () => {
    return (
        < PageLayout bgUrl="https://lh4.googleusercontent.com/4AYLfJhPvpZ6MOqwsFw4sphEgbSx3zdiY2-i_F0RxCrRBbWUayECwmc7QLak6y_WytpnycinRiBygzJkO9QVf_c=w16383"
            bgTitle="Present Group Members" >
            {
                presentGroupMembers.map((section) => (
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

export default PresentGroupMembers;
