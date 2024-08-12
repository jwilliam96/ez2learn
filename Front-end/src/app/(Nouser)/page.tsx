
import { SvgAprende, SvgEnseña, SvgLandingOne, SvgLandingTwo } from "@/components/svg/SvgIcons"
import imageFondoCategory from "/public/landing/fondoCategory.png"
import imageFondoAprende from "/public/landing/fondoAprende.png"
import imageFondoEnseña from "/public/landing/fondoEnseña.png"
import CategoryCard from "../../components/cards/CategoryCard";
import imageAprende from "/public/landing/imgAprende.png"
import imageEnseña from "/public/landing/imgEnseña.png"
import imageHeader from "/public/landing/header.png"
import Image from "next/image";


export default async function Home() {

  // const cursos = await prisma.courses.findMany()
  // await prisma.$disconnect();

  return (
    <main >

      {/* HEADER  */}

      <div className="bg-gray-100 relative h-[550px] flex justify-center items-center">
        <SvgLandingOne className="absolute top-0 left-0 z-40" />
        <SvgLandingTwo className="absolute bottom-0 right-0 z-40" />

        <div className="text-center text-[#AFF6F1] relative z-30">
          <h1 className="text-7xl font-bold mb-6 ">Tu conocimiento, tu flexibilidad</h1>
          <p className="text-2xl mb-4">Libertad para aprender, simplicidad para enseñar</p>
        </div>
        <Image src={imageHeader} alt="fondo morado" className=" object-cover" fill priority />
      </div>


      {/* SECCIÓN ENSEÑA  */}
      <section className="relative text-[#F5F5F5]  h-[550px]">
        <Image src={imageFondoEnseña} alt="fondo morado" className="object-cover" fill priority />
        <SvgEnseña className="absolute bottom-0 right-0 " />

        <div className="flex items-center max-w-[1400px] h-full mx-auto relative py-4">

          <div className="flex justify-center items-center w-1/2">
            <Image src={imageEnseña} alt="hombre" />
          </div>

          <div className=" w-1/2">
            <h2 className="text-6xl font-bold">Enseña a tu manera</h2>
            <span className="text-2xl">Cuando quieras, como quieras</span>
            <p className="my-4 text-start text-2xl">Convierte tu conocimiento en un legado digital. Únete a EZ2LEARN y comienza tu viaje como educador online hoy</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN APRENDE  */}

      <section className="relative text-title-green h-[550px]">
        <Image src={imageFondoAprende} alt="fondo morado" className="object-cover" fill priority />
        <SvgAprende className="absolute bottom-0 left-0" />

        <div className="flex items-center max-w-[1400px] h-full mx-auto relative py-4">

          <div className="w-1/2">
            <h2 className="text-6xl font-bold">Aprende a tu ritmo </h2>
            <span>Adapta el aprendizaje a tu vida, no al revés</span>
            <p className="my-4 text-start">Descubre un mundo de conocimientos a tu alcance. Únete a Ez2Learn y comienza tu viaje de aprendizaje personalizado hoy</p>
          </div>

          <div className="flex justify-center items-center w-1/2">
            <Image src={imageAprende} alt="mujer" className="mb-6" />
          </div>
        </div>
      </section>

      {/* CARDS  POPULARES*/}

      <section className="relative">
        <Image src={imageFondoCategory} alt="fondo morado" fill className="object-fill" priority />
        <div className="max-w-[1550px] mx-auto relative pt-20 pb-40">
          <h2 className="text-2xl font-bold text-texto-green">Cursos Populares</h2>
          <span className="text-texto-green">Aprende algo nuevo o mejora tus habilidades</span>

          {/* <UseSwiper cursos={dbCursos} dbVideos={dbVideos} id="bf9f838b-c82f-41fd-acfb-29d16389d4e1" /> */}

        </div>
      </section>

      {/* CATEGORIAS  */}

      <section className="bg-fondo py-8">
        <CategoryCard />
      </section>


    </main>
  );
}
