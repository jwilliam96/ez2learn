import { IconFigma, UseSwiper } from "../../../components/index";
import axios from "axios";

export async function Catalogo() {

  const categories = [
    { title: "Web Development", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Data Science", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Mobile Development", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Programming Languages", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Game Development", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Database Design & Development", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Software Testing", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Software Engineering", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "Software Development Tools", icon: <IconFigma className={"w-12 h-12 mb-2"} /> },
    { title: "No-Code Development", icon: <IconFigma className={"w-12 h-12 mb-2"} /> }
  ]



  return (


    <section className="flex w-full">
      <div className="flex flex-col h-full">
        {/* <h1 className="text-5xl font-bold mb-5">Categorias</h1>
          <div className="grid grid-cols-5 gap-6">

            {
              categories.map(category => (
                <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-md" key={category.title}>
                  {category.icon}
                  <button className="text-black font-semibold text-xl">{category.title}</button>
                </div>

              ))
            }

          </div> */}
        <h1 className="text-4xl font-bold mt-10 text-texto-morado">Cursos Populares</h1>
        <div className="mt-3 flex-grow">
          <h2 className="text-xl font-semibold text-texto-morado">Aprende algo nuevo o mejora tus habilidades</h2>

          {/* SLIDER  */}
          {/* <UseSwiper cursos={dbCursos} dbVideos={dbVideos} id="bf9f838b-c82f-41fd-acfb-29d16389d4e1" /> */}

        </div>
      </div>
    </section>

  );
}
