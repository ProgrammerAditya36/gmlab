import PageLayout from "../components/PageLayout";

const Contact = () => {
    return (
        <PageLayout>
            <div className="flex items-center justify-center bg-gray-200">
                <div className="flex w-full max-w-[65%] flex-col gap-2 px-10 py-5 text-justify text-4xl">
                    <div className="block text-left font-semibold text-gray-600">
                        Address:
                    </div>
                    <div className="block text-left font-semibold">
                        Dr. Gurumurthy S C
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Associate Professor
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Department of Physics
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Manipal Institute of Technology
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Manipal Academy of Higher Education
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Manipal-576 104
                    </div>
                    <div className="block text-left font-semibold text-blue-600">
                        Karnataka, India
                    </div>
                    <div className="block text-left font-semibold">
                        Email:
                        <a href={"mailto:gurumurthy.sc@manipal.edu"}>
                            gurumurthy.sc@manipal.edu
                        </a>
                        &
                        <a href={"mailto:gurumurthy.s.c@gmail.com "}>
                            gurumurthy.s.c@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;
