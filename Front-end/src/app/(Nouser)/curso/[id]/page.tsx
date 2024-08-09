import { Categories, Cursos, Videos } from "@/interface";
import VideoYoutube from "@/components/videos/VideoYoutube";
import fondo from "/public/image/fondo-curso.png"
import { notFound } from "next/navigation";
import { IconStars } from "@/components";
import Button from "./ui/Button";
import Image from "next/image";
import axios from "axios";

export default async function CursoPage({ params }: { params: { id: string } }) {


    const getCursos: Cursos[] = await axios.get("https://c19-72-t-python-react.onrender.com/cursos")
        .then(res => res.data)
        .catch(err => console.log(err))

    const resultado = getCursos.some(cur => cur.id === params.id)

    if (!resultado) {
        return notFound()
    }

    const getVideos: Videos[] = await axios.get("https://c19-72-t-python-react.onrender.com/videos")
        .then(res => res.data)
        .catch(err => console.log(err))

    const getCategorias: Categories[] = await axios.get("https://c19-72-t-python-react.onrender.com/categorias")
        .then(res => res.data)
        .catch(err => console.log(err))

    const curso: Cursos[] = getCursos.filter(cur => cur.id === params.id)

    const categoria = getCategorias.filter(category => category.id === curso[0].id_category)

    const video = getVideos.filter(v => v.id_curso === curso[0].id)


    return (
        <article className="  relative">
            <Image src={fondo} alt="fondo verde" fill />

            <div className="max-w-[1600px] mx-auto py-8 relative">

                {/* TITLE  */}
                <span className="text-texto-green">{`Categoria > ${categoria[0].name_category}`}</span>
                <h2 className="text-6xl font-semibold text-texto-green">{curso[0].name_curso}</h2>


                <div className="h-[550px] grid grid-cols-6 gap-20 my-10">
                    {/* VIDEO  */}
                    <div className="col-span-4">
                        <VideoYoutube videoId={video[0].link} />
                    </div>

                    {/* DESCRIPTION  */}
                    <div className="col-span-2 py-4 w-[400px] bg-fondo-card ">
                        <div className="w-10/12  h-full mx-auto flex flex-col justify-between">

                            {
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="flex items-center px-6 gap-8 mb-4 border rounded-md py-2 bg-fondo-card text-title-card border-borde-negro">
                                        <IconStars size={90} />
                                        <p>Cat ipsum dolor sit amet, dont wait for the storm to pass, dance in the rain.</p>
                                    </div>
                                ))
                            }

                            <span className="text-center text-5xl font-bold text-green-700 my-6">$ {curso[0].price}.00</span>
                            <Button curso={curso[0]} video={video[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}