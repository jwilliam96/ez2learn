
import { Cursos, Videos } from "@/config/interface";
import imagenVideo from "/public/image/video-image.png"
import VideoYoutube from "../videos/VideoYoutube";
import Link from "next/link";
import Image from "next/image";
import { IconTime } from "../icon/Icons";

interface Prop {
  curso: Cursos
  dbVideos: Videos[]
}

export function Cards({ curso, dbVideos }: Prop) {

  const videos: Videos[] = dbVideos.filter(video => video.id_curso === curso.id)

  const video = videos[0].link

  return (

    <Link href={`/curso/${curso.id}`} className="w-[253px] h-[420px] bg-fondo-card rounded-lg border border-borde-negro p-4 flex flex-col gap-1" >


      {/* IMAGE  */}
      <div className="relative ">
        <div className=" h-40 bg-gray-200 rounded-md border border-gray-300">
          {/* <Image src={imagenVideo}
            alt="Video" priority className="object-cover rounded-md w-full h-full" /> */}
          <VideoYoutube videoId={video} />


          {/* ETIQUETA */}
          <button className="absolute top-2 left-2 bg-black text-white rounded-md px-2 py-1">Nuevo</button>
        </div>
      </div>

      {/* DESCRIPTION  */}
      {/* TITLE  */}
      <div className="grid text-title-card gap-1 h-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold line-clamp-2">{curso.name_curso}</h3>

          {/* <div className=" flex items-center shrink-0">
            <IconTime />
            <span>123 hr</span>
          </div> */}
        </div>

        {/* DESCRIPTION  */}
        <p className="line-clamp-3 text-description-card overflow-hidden ">{curso.description}</p>
        <span className="text-precio-card text-2xl font-bold">${curso.price}</span>
        <button className="bg-fondo-button text-white rounded-lg w-full py-2 self-end">Comprar</button>
      </div>

    </Link>


  );
}
