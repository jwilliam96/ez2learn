import { cursos } from "./data"
import prisma from "../lib/prisma"

async function main() {

    await prisma.courses.createMany({
        data: cursos
    })

}

(() => {
    if (process.env.NODE_ENV === "production") return

    main()

})
    ()