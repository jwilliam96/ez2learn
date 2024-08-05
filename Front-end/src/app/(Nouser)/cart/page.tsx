import Image from "next/image"
import Cart from "./ui/Cart"
import fondo from "/public/image/fondo-notFound.png"

function CartPage() {
    return (
        <div className="relative">
            <Image src={fondo} alt="fondo verde" fill priority />
            <Cart />
        </div>
    )
}

export default CartPage