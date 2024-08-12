"use client"

import { useCart } from "@/utils/store/cart"
import { Courses, Lessons } from "@prisma/client"

interface Props {
    curso: Courses
    video: Lessons

}

export default function Button({ curso, video }: Props) {

    const agregar = useCart(state => state.agregar)

    const handleIncrement = () => {
        agregar({ id: curso.id, description: curso.description, image: video.link, price: curso.price, title: curso.title })
    }

    return (
        <button
            onClick={handleIncrement}
            className=" bg-[#2C2C2C] text-white py-6 rounded-xl font-semibold text-xl">
            Agregar al carrito
        </button>
    )
}
