import { IconLogo } from "@/components";
import Link from "next/link";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="h-16 border-b fixed inset-0 bg-fondo z-30">
                <div className="max-w-[1400px] text-texto-green mx-auto flex items-center h-full">
                    <Link href={"/"}> <IconLogo size={30} /></Link>
                </div>
            </div>
            {children}
        </>
    );
}