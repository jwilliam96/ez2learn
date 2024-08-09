import Image from "next/image"
import fondo from "/public/image/fondo-notFound.png"
import { Cart } from "@/ui"

function CartPage() {
    return (
        <div className="relative">
            <Image src={fondo} alt="fondo verde" fill priority />
            <Cart />
        </div>
    )
}

export default CartPage