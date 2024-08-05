
import { Categories, Cursos } from "@/config/interface";
import imageFondo from "/public/image/fondo-category.png"
import { notFound } from "next/navigation";
import { Cards, UseSwiper } from "@/components";
import axios from "axios";
import Image from "next/image";

export default async function CategoryPage({ params }: { params: { category: string } }) {

    const dbCursos: Cursos[] = await axios.get("https://c19-72-t-python-react.onrender.com/cursos")
        .then(res => res.data)
        .catch(err => console.log(err))

    const dbCategorias: Categories[] = await axios.get("https://c19-72-t-python-react.onrender.com/categorias")
        .then(res => res.data)
        .catch(err => console.log(err))

    const dbVideos = await axios.get("https://c19-72-t-python-react.onrender.com/videos")
        .then(res => res.data)
        .catch(err => console.log(err))

    const categoria = params.category.replaceAll("%20", " ").replace("%C3%B1", "ñ").replace("%C3%B3", "ó")

    const idCategoria = dbCategorias.filter(category => category.name_category === categoria)

    const resultado = dbCategorias.some(category => category.name_category === categoria)

    if (!resultado) {
        return notFound()
    }

    return (
        <div className="relative">
            <Image src={imageFondo} alt="fondo verde" priority fill />
            <article className="max-w-[1600px] mx-auto px-4 pb-20 pt-10 relative">
                <h3 className="text-xl text-texto-green">{"Categoría >"}  <span>{categoria}</span></h3>

                <UseSwiper cursos={dbCursos} dbVideos={dbVideos} id={idCategoria[0].id} />

            </article>
        </div>
    )
}
