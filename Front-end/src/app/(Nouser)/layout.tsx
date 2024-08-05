import { Footer, TopMenu } from "@/components";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TopMenu />
            {children}
            <Footer />
        </div>
    );
}