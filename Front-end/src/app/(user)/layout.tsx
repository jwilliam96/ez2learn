import { Sidebar, TopMenuUser } from "@/ui/User";
import fondo from "/public/user/fondo.png"
import Image from "next/image";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative h-screen p-8">
            <Image src={fondo} alt="fondo verde" fill priority />
            <div className=" h-full max-w-[1800px] mx-auto relative flex items-center">
                <Sidebar />
                <div className="h-full w-full">
                    <TopMenuUser />
                    {children}
                </div>
            </div>
        </div>
    );
}