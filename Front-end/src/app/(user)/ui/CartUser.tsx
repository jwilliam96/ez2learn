"use client"

import { useCart } from "@/store/cart";
import Link from "next/link";
import CartCard from "./CartCard";

export default function CartUser() {

    const cursos = useCart(state => state.cart)
    const suma = cursos.reduce((total, num) => total + num.price, 0);


    return (
        <div className="grid grid-cols-3 py-20 grow text-texto-green">

            <div className='col-span-2'>

                <h1 className='text-5xl font-bold tracking-wide'>CART</h1>

                <div className="h-0.5 my-2 rounded-full bg-texto-green " />

                <p className="my-4"><span>+ {cursos.length}</span> cursos en el cart</p>

                {/* CARD  */}
                <div className="grid gap-4">
                    {
                        cursos.map((curso) => (
                            <div key={curso.id} className="h-34 border text-texto-morado bg-fondo-card border-borde-negro rounded p-3 flex items-center justify-center">

                                <CartCard curso={curso} />

                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="col-span-1 text-texto-morado flex flex-col gap-2 ml-5 p-6 w-80 h-fit border border-fondo bg-[#dff4ccf3] rounded-md justify-self-center">

                <p className='text-sm text-gray-500 font-bold'>Total:</p>
                <h1 className='text-5xl font-bold'>${suma}.00</h1>
                <del className='text-sm text-gray-500'>$9000</del>
                <p className='text-sm text-gray-500'>77% de descuento</p>

                <Link href={"/auth/login"} >
                    <button className="mt-6 w-[270px] h-12 rounded-md bg-fondo-button border border-gray-700 text-white">
                        Pagar
                    </button>
                </Link>

                <hr className='my-2'></hr>

                <p>Promociones:</p>
                <p className='border-2 border-fondo border-dashed p-2 text-gray-500'>Tienes este codigo disponible CUPON2024s</p>

                <div className='grid grid-cols-3 w-[270px] mt-1'>
                    <input type="text" placeholder='Introducir codigo' className='border border-[#434343] outline-none col-span-2 p-2' />
                    <button type='submit' className='bg-[#434343] text-white h-12 col-span-1'>Aplicar</button>
                </div>

            </div>

        </div>
    )
}
