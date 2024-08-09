"use client"

import { IconDelete } from "@/components";
import VideoYoutube from "@/components/videos/VideoYoutube";
import { useCart } from "@/utils/store/cart";

interface Prop {
    curso: Cart
}

interface Cart {
    id: string
    title: string
    description: string
    image: string
    price: number
}

export function CartCard({ curso }: Prop) {

    const eliminar = useCart(state => state.eliminar)
    const handleDele = () => {
        eliminar(curso.id)
    }

    return (
        <div className="flex h-28 justify-between w-full ">
            {/* <Image src={imagenVideo} priority alt="imagenDeVideo" className="h-full col-span-2" /> */}
            <div className="flex">
                <div className="h-full w-[220px] border border-borde-negro">
                    <VideoYoutube videoId={curso.image} />
                </div>
                <div className="col-span-4 ml-2 mt-2">

                    <p className="tracking-wide w-52 text-title-card font-bold text-xl">{curso.title}</p>
                    <p className="text-xs w-80 mt-1  tracking-normal line-clamp-3">{curso.description}</p>

                </div>
            </div>

            <div className=" flex w-fit items-center gap-8 mr-6">

                <p className=" font-bold text-2xl">${curso.price}.00</p>
                <button
                    onClick={handleDele}
                    className=" "><IconDelete className="text-red-800" /></button>

            </div>
        </div>
    )
}
