"use client"

import { useCart } from "@/store/cart";
import { IconCartIcon } from "../icon/Icons";
import Link from "next/link";

export default function CartMenu() {

    const cart = useCart(state => state.cart)

    return (
        <Link href={"/cart"} className="relative">
            {
                cart.length > 0 && (
                    <div
                        className="size-7 rounded-full bg-[#E03E1A] absolute -right-1 -top-2 text-texto-green flex justify-center items-center font-bold border border-borde-negro " >
                        {cart.length}
                    </div>
                )
            }
            <div className="size-12 bg-fondo rounded-full flex justify-center items-center">
                <IconCartIcon size={30} className="stroke-2 text-texto-green" />
            </div>
        </Link>
    )
}
