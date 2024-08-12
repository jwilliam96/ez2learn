"use server"

import prisma from "@/lib/prisma"


// GET CATEGORIAS
export const getCategories = async () => {

    try {

        const categories = await prisma.categories.findMany()

        return categories

    } catch (error) {
        console.log({ message: "no se pudo traer las categorias" })
    }
}

// category = "Desarrollo Web"

export const getCoursesByCategory = async (category: string) => {

    try {
        const categories = await prisma.categories.findFirst({
            where: {
                category: category
            }
        })

        const courses = await prisma.courses.findMany({
            where: {
                categoryId: categories?.id
            }
        })

        return courses


    } catch (error) {
        console.log({ message: "no se pudo traer los cursos" })
    }
}