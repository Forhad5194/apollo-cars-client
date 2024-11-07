import Banner from "./components/home/banner";

export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<div>
        <Banner/>
        {children}
    </div>);
}