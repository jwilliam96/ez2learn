
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
    lessons?: Lessons[]
}

export interface Lessons {
    title: string;
    video: string;
    description: string;
    duration?: string;
    documento?: string;
}

export interface Categories {
    id: string
    category: string
}
