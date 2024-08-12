import prisma from "../lib/prisma"
import { initialData } from "./data"

async function main() {

    // Eliminar Tablas
    await prisma.courses.deleteMany()
    await prisma.categories.deleteMany()

    const { cursos, lessons, categories } = initialData

    // Creación de Tablas
    const dbCategories = categories.map(category => ({ category }))

    await prisma.categories.createMany({
        data: dbCategories
    })

    const categoryData = await prisma.categories.findMany()



    const categoriesMap = categoryData.reduce((map, category) => {
        map[category.category] = category.id
        return map
    }, {} as Record<string, string>)


    cursos.forEach(async (curso) => {
        const { category, ...rest } = curso

        await prisma.courses.create({
            data: {
                ...rest,
                categoryId: categoriesMap[category]
            }
        })
    })


    console.log("se ejecuto correctamente")
}

(() => {
    if (process.env.NODE_ENV === "production") return
    main()
})
    ()