interface PageLayoutProps {
    children: React.ReactNode;
    bgTitle?: string;
}

const PageLayout = ({ children, bgTitle }: PageLayoutProps) => {
    const bgUrl =
        "https://storage.googleapis.com/phoneauth-377dc.appspot.com/images/GM%27s_Research_Group_-_Bg/bg3.png";

    return (
        <div>
            <div
                className="bg-cover bg-center p-0"
                style={{
                    background: `url(${bgUrl}) center center / cover no-repeat`,
                }}
            >
                <div className="flex h-[300px] items-center justify-center p-10 md:p-10">
                    <div
                        className="w-1/2 border-[5px] border-white p-4 text-center md:border-[10px] md:p-10"
                        style={{
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <span className="text-center text-[2rem] font-semibold text-white md:text-[4rem]">
                            {bgTitle}
                        </span>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default PageLayout;
