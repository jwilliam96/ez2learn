import { IconBook, IconComment, IconExit, IconHouse, IconLogo, IconOpenBook, IconSetting } from "@/components";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="flex flex-col h-full mr-12 ">
      <div className="bg-fondo text-texto-green h-full px-6 rounded-xl  border border-borde-negro">
        <div className="flex flex-col justify-between h-full py-10">
          <Link href="/" className="">
            <IconLogo size={30} />
          </Link>
          <div className="flex flex-col items-center space-y-10 flex-grow justify-center">
            <Link href="/dashboard/user" className="">
              <IconHouse />
            </Link>
            <Link href="/" className="">
              <IconOpenBook />
            </Link>
            <Link href="/dashboard/classes" className="">
              <IconBook />
            </Link>
            <Link href="/" className="">
              <IconComment />
            </Link>
            <Link href="/" className="">
              <IconSetting />
            </Link>
          </div>
          <Link href="/" className="">
            <IconExit />
          </Link>
        </div>
      </div>
    </div>
  );
}
