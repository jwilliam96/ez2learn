import { Categories } from "@/config/interface"
import { CiSearch } from "react-icons/ci"
import Link from "next/link"
import axios from "axios"
import { IconLogo } from "../icon/Icons"
import CartMenu from "./CartMenu"

export async function TopMenu() {

    const categorias: Categories[] = await axios.get("https://c19-72-t-python-react.onrender.com/categorias")
        .then(res => res.data)
        .catch(error => error)

    return (
        <div className="border-b bg-fondo">

            {/* MENU  */}
            <div className="flex justify-between px-4 py-6 items-center  max-w-[1600px] mx-auto text-texto-green">

                {/* LOGO  */}
                <Link href={"/"}>
                    <IconLogo size={40} />
                </Link>

                {/* INPUT  */}
                <div className="flex max-w-[800px] grow bg-fondo-input-menu rounded-full overflow-hidden mx-6 border border-texto-green">
                    <input type="text" className="grow rounded-s-full pl-8 outline-none bg-fondo-input-menu" />
                    <CiSearch size={22} className="my-2 mx-4 shrink-0 " />
                </div>

                {/* CATEGORIAS  */}
                <div className="relative group py-2">
                    <span className="mx-4 text-xl cursor-pointer ">Categorías</span>

                    <nav className="hidden hover:block group-hover:block absolute z-30 bg-fondo border rounded-lg mt-1">
                        <ul className="grid grid-cols-2 gap-4 w-[500px] p-4">
                            {
                                categorias.map(category => (
                                    <li key={category.id}><Link href={`/categoria/${category.name_category}`}>{category.name_category}</Link></li>
                                ))
                            }
                        </ul>
                    </nav>

                </div>

                <CartMenu />

                {/* LOGIN - REGISTER  */}

                <div className="flex items-center">
                    <Link href={"/auth/login"}>
                        <button className="bg-fondo-btn-ingresar px-3 py-1 rounded-lg mx-4 border border-borde-gray text-fondo-input-menu text-center">Ingresar</button>
                    </Link>
                    <Link href={"/auth/register"}>
                        <button className="bg-fondo-input-menu border border-borde-negro rounded-lg text-text-green-claro px-3 py-1.5">Registro</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
