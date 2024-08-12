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

export const getCourses = async () => {

    try {

        const courses = await prisma.courses.findMany()

        return courses

    } catch (error) {
        console.log({ message: "no se pudo traer los cursos", error });
    }
}