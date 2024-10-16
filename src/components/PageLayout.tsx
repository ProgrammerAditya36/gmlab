
interface PageLayoutProps {
    children: React.ReactNode;
    bgUrl: string;
    bgTitle: string;
}
const PageLayout = ({ children, bgUrl, bgTitle }: PageLayoutProps) => {
    return (
        <div>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                }}
            >
                <div className="flex justify-center items-center p-4 md:p-10">
                    <div className="border-[5px] md:border-[10px] border-white p-4 md:p-10">
                        <span className="text-[2rem] md:text-[8rem] text-white font-semibold text-center">{
                            bgTitle
                        }
                        </span>
                    </div>

                </div>
            </div>
            <div className=" mx-auto max-w-[65%]  my-10">
                <div className="flex  flex-col gap-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageLayout