import { IconNotification } from "@/components"
import { Categories } from "@/interface"
import { CiSearch } from "react-icons/ci"
import Link from "next/link"
import axios from "axios"
import imageUser from "/public/image/imageUser.jpg"
import Image from "next/image"
import CartMenuUser from "./CartMenuUser"


export async function TopMenuUser() {

    const categorias: Categories[] = await axios.get("https://c19-72-t-python-react.onrender.com/categorias")
        .then(res => res.data)
        .catch(error => error)

    return (
        <div className="border-b border-fondo mb-10">

            {/* MENU  */}
            <div className=" grid grid-cols-2 py-6 i mx-auto text-fondo">


                {/* INPUT  */}
                <div className="flex items-center max-w-[800px] grow bg-fondo rounded-full overflow-hidden mx-6 border border-texto-green">
                    <input type="text" className="grow rounded-s-full pl-8 outline-none bg-fondo text-texto-green" />
                    <CiSearch size={22} className="my-2 mx-4 shrink-0 text-texto-green " />
                </div>

                {/* CATEGORIAS  */}
                <div className="flex items-center justify-self-center gap-16">
                    <div className="relative group py-2">
                        <span className="mx-4 text-xl cursor-pointer  text-texto-green bg-fondo rounded-full px-6 py-1.5">Categorías</span>

                        <nav className="hidden hover:block group-hover:block absolute z-30 bg-fondo border rounded-lg mt-1 text-texto-green">
                            <ul className="grid grid-cols-2 gap-4 w-[500px] p-4">
                                {
                                    categorias.map(category => (
                                        <li key={category.id}><Link href={`/categoria/${category.name_category}`}>{category.name_category}</Link></li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    {/* NOTIFICACIONES  */}
                    <div className="size-12 rounded-full bg-fondo flex justify-center items-center">
                        <IconNotification className="text-texto-green " size={30} />
                    </div>

                    <CartMenuUser />

                    {/* IMAGE  */}
                    <div className="size-12 bg-fondo rounded-full overflow-hidden">
                        <Image src={imageUser} alt="huella" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </div>
    )
}
