const Home = () => {
    return (
        <div className="flex flex-col">
            <img src="/image.png" alt="" className=" object-contain" />
            <div className="flex-shrink-0 h-2/3 mx-auto p-10 w-full  lg:w-1/2 ">
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-blue-500">Welcome to Nano and Functional Materials Lab. </h1>
                    <p className="text-lg mt-4 text-justify ">
                        Our group focuses on the fabrication of mono-, bi- and tri-metallic nanomaterials, 2D layered nanostructures, tuning MWCNTs, and their multifunctional properties (electronic, optical, thermal, etc.) for their applications in gas sensing, thermal conductivity, wastewater treatment, biological activity, NLO studies etc. Our main goal is to transfer the research findings into technology to solve societal problems via cost-effective and efficient devices.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Home;
