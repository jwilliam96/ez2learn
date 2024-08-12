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

export const getCoursesByCategory = async (categoryId: string) => {
    try {
        const courses = await prisma.courses.findMany({
            where: {
                categoryId: categoryId
            }
        });
        return courses;
    } catch (error) {
        console.log({ message: "no se pudo traer los cursos", error });
    }
}