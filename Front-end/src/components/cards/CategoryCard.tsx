import Helps from "@/utils/Helps"
import Link from "next/link"


export default function CategoryCard() {

    const { categoriasIcon } = Helps()


    return (
        <div className="relative">
            <h2 className="text-center text-5xl text-texto-green pt-10 font-bold">Descubre tu próxima pasión Tech</h2>
            <div className="flex flex-wrap justify-center gap-10 max-w-[1200px] mx-auto py-12 text-texto-morado">
                {
                    categoriasIcon.map(category => (
                        <Link href={`/categoria/${category.categoria}`} key={category.categoria} className="bg-fondo-card  size-40 rounded-md flex flex-col justify-center items-center">
                            {category.icon}
                            <span className="text-center font-bold mt-2 ">{category.categoria}</span>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
