interface ContainerProps {
    children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
    return (
        <div className="mx-auto mt-12 flex w-full max-w-[65%] flex-col gap-2 px-10 py-5 text-justify text-4xl">
            {children}
        </div>
    );
};

export default Container;
