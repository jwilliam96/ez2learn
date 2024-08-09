import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Props {
    cart: Cart[]
    agregar: (by: Cart) => void
    eliminar: (by: string) => void
}

interface Cart {
    id: string
    title: string
    description: string
    image: string
    price: number
}

export const useCart = create<Props>()(
    persist(
        (set) => ({
            cart: [],
            agregar: (by) => set((state) => {

                return { cart: [...state.cart, by] }
            }),
            eliminar: (by) => set((state) => ({ cart: state.cart.filter(car => car.id !== by) })),
        }),

        { name: "no-country", }

    )
)

