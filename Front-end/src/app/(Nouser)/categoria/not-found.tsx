import Image from "next/image"
import fondoImage from "/public/image/fondo-notFound.png"
import CategoryCard from "@/app/ui/categorias/CategoryCard";

export default function NotFound() {


    return (
        <div className="min-h-screen relative">
            <Image src={fondoImage} alt="fondo verde" fill priority />
            <div className="max-w-[1600px] mx-auto relative pt-10 text-texto-green ">
                <h1 className="text-7xl font-bold">No encontramos lo que buscas <br /><span>{":("}</span></h1>

                <p className="my-6">Tu búsqueda de “curso de Inteligencia Artificial para principiantes” no devolvió ningun resultado </p>
                <h2 className="font-bold">Tips para una mejor Búsqueda: </h2>
                <ul className="my-6 list-disc list-inside">
                    <li>Busca por Instructor, Categoría o Curso</li>
                    <li>Checkea tu escritura</li>
                    <li>Generaliza tu busqueda usando menos o más palabras generales</li>
                    <li>Tambien puedes navegar por Categoría</li>
                </ul>
                <CategoryCard />
            </div>
        </div>
    );
}