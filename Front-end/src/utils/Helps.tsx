import { DataScience, DesarrolloDatos, DesarrolloMobile, DesarrolloNoCode, DesarrolloVideojuegos, DesarrolloWeb, HerramientasDesarrollo, IngenieriaSoftware, LenguajeProgramacion, TesteoSoftware } from "@/components";



export default function Helps() {
    const categoriasIcon = [
        {
            categoria: "Desarrollo Web",
            icon: <DesarrolloWeb />
        },
        {
            categoria: "Ciencia de datos",
            icon: <DataScience />
        },
        {
            categoria: "Desarrollo movil",
            icon: <DesarrolloMobile />
        },
        {
            categoria: "Lenguaje de programación",
            icon: <LenguajeProgramacion />
        },
        {
            categoria: "Desarrollo de videojuegos",
            icon: <DesarrolloVideojuegos />
        },
        {
            categoria: "Desarrollo y diseño de base de datos",
            icon: <DesarrolloDatos />
        },
        {
            categoria: "Testeo de software",
            icon: <TesteoSoftware />
        },
        {
            categoria: "Ingenieria de software",
            icon: <IngenieriaSoftware />
        },
        {
            categoria: "Herramientas de desarrollo",
            icon: <HerramientasDesarrollo />
        },
        {
            categoria: "Desarrollo no-code",
            icon: <DesarrolloNoCode />
        },
    ]
    return { categoriasIcon }
}
