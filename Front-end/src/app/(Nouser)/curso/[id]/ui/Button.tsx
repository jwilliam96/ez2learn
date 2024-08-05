"use client"

import { Cursos, Videos } from "@/config/interface"
import { useCart } from "@/store/cart"

interface Props {
    curso: Cursos
    video: Videos

}

export default function Button({ curso, video }: Props) {

    const agregar = useCart(state => state.agregar)

    const handleIncrement = () => {
        agregar({ id: curso.id, description: curso.description, image: video.link, price: curso.price, title: curso.name_curso })
    }

    return (
        <button
            onClick={handleIncrement}
            className=" bg-[#2C2C2C] text-white py-6 rounded-xl font-semibold text-xl">
            Agregar al carrito
        </button>
    )
}
