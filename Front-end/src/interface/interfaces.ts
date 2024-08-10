
type category = "Desarrollo Web" | "Ciencia de Datos" | "Desarrollo Movil" | "Lenguaje de Programación" | "Desarrollo de Videojuegos" | "Bases de Datos" | "Testeo de Software" | "Ingeniería de Software" | "Herramientas de Desarrollo" | "Desarrollo No-Code"

export interface Courses {
    title: string
    description: string
    video: string
    category: category
    rating: number
    offer: boolean
    sales: number
    price: number
    duration?: string
}

export interface Lessons {
    title: string;
    link: string;
    description: string;
    duration?: string;
    documento?: string;
}


