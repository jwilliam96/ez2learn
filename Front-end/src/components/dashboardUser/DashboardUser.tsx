import Link from "next/link";
import imagen from "../../../public/landing/imgAprende.png";
import Image from "next/image";

export function Dashboard() {
  return (

    <div className="flex flex-col flex-grow p-6 text-texto-morado">
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-bold mt-5 text-title-card">Bienvenido, William sanchez!</h1>

      </div>
      <section className="mt-10 flex">
        <div className="flex-grow mr-10">
          <h2 className="text-4xl font-bold mt-10 text-title-card">Comienza tu aprendizaje</h2>
          <p className="text-2xl  mt-3">
            Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada  saved fringilla enim turpis, at mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image src={imagen} alt="Video" priority className="rounded-md w-[420px] h-auto  object-cover" />
        </div>
      </section>
      <button className="bg-fondo-button text-white rounded-md max-w-min px-4 py-2 mt-4">
        <Link href={"/dashboard/classes"} > empezar </ Link ></button>
    </div>

  );
}
