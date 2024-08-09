import { Footer } from "@/ui";
import { TopMenu } from "@/ui/NoUser";

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