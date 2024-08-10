import prisma from "../lib/prisma"
import { initialData } from "./data"

async function main() {

    // Eliminar Tablas
    await prisma.categories.deleteMany()
    await prisma.courses.deleteMany()

    const { cursos, lessons, categories } = initialData

    const dbCategories = categories.map(category => ({ category }))

    // const categoryData = await prisma.categories.findMany()

    // Creación de Tablas

    await prisma.categories.createMany({
        data: dbCategories
    })

    //  await prisma.courses.createMany({
    //      data: cursos
    //  })


    console.log("se ejecuto correctamente")
}

(() => {
    if (process.env.NODE_ENV === "production") return
    main()
})
    ()