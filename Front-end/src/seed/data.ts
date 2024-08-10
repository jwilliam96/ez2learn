
import { Categories, Courses, Lessons } from "../interface"


interface SeedData {
    cursos: Courses[]
    lessons: Lessons[]
    categories: string[]
}

export const initialData: SeedData = {

    categories: [
        "Desarrollo Web", "Ciencia de Datos", "Desarrollo Movil", "Lenguaje de Programación", "Desarrollo de Videojuegos", "Bases de Datos", "Testeo de Software", "Ingeniería de Software", "Herramientas de Desarrollo", "Desarrollo No-Code"
    ],

    cursos: [
        {
            title: "Introducción al Desarrollo Web",
            description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
            video: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            category: "Desarrollo Web",
            rating: 4.8,
            offer: true,
            sales: 1500,
            price: 19.99,
            duration: "10 horas",
        },
        {
            title: "Fundamentos de Ciencia de Datos",
            description: "Explora los conceptos básicos de la ciencia de Datos y cómo aplicarlos.",
            video: "https://www.youtube.com/watch?v=ua-CiDNNj30",
            category: "Ciencia de Datos",
            rating: 4.7,
            offer: false,
            sales: 1200,
            price: 24.99,
            duration: "12 horas"
        },
        {
            title: "Desarrollo Móvil con Flutter",
            description: "Crea aplicaciones móviles usando Flutter y Dart.",
            video: "https://www.youtube.com/watch?v=fq4N0hgOWzU",
            category: "Desarrollo Movil",
            rating: 4.9,
            offer: true,
            sales: 2000,
            price: 29.99,
            duration: "15 horas"
        },
        {
            title: "Python para Principiantes",
            description: "Aprende a programar en Python desde cero.",
            video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
            category: "Lenguaje de Programación",
            rating: 4.8,
            offer: false,
            sales: 2500,
            price: 34.99,
            duration: "8 horas"
        },
        {
            title: "Desarrollo de Videojuegos con Unity",
            description: "Crea impresionantes videojuegos utilizando Unity.",
            video: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
            category: "Desarrollo de Videojuegos",
            rating: 4.6,
            offer: true,
            sales: 1800,
            price: 39.99,
            duration: "20 horas"
        },
        {
            title: "Diseño y Desarrollo de Bases de Datos",
            description: "Conoce cómo diseñar y desarrollar bases de datos eficientes.",
            video: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
            category: "Bases de Datos",
            rating: 4.5,
            offer: false,
            sales: 1100,
            price: 21.99,
            duration: "9 horas"
        },
        {
            title: "Introducción al Testeo de Software",
            description: "Aprende las técnicas básicas de testeo de Software.",
            video: "https://www.youtube.com/watch?v=AZFTLKwCg6g",
            category: "Testeo de Software",
            rating: 4.7,
            offer: true,
            sales: 900,
            price: 17.99,
            duration: "7 horas"
        },
        {
            title: "Principios de Ingeniería de Software",
            description: "Estudia los principios fundamentales de la Ingeniería de Software.",
            video: "https://www.youtube.com/watch?v=1s1Yvnfc1eM",
            category: "Ingeniería de Software",
            rating: 4.8,
            offer: false,
            sales: 1400,
            price: 26.99,
            duration: "11 horas"
        },
        {
            title: "Herramientas de Desarrollo: Git y GitHub",
            description: "Domina las herramientas esenciales para el desarrollo de software como Git y GitHub.",
            video: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            category: "Herramientas de Desarrollo",
            rating: 4.9,
            offer: true,
            sales: 2100,
            price: 22.99,
            duration: "6 horas"
        },
        {
            title: "Desarrollo No-Code con Bubble",
            description: "Crea aplicaciones web sin código utilizando Bubble.",
            video: "https://www.youtube.com/watch?v=2KNpZibzR9A",
            category: "Desarrollo No-Code",
            rating: 4.6,
            offer: false,
            sales: 800,
            price: 14.99,
            duration: "5 horas"
        }
    ],

    lessons: [{
        title: "",
        link: "",
        description: "",
        duration: "",
        documento: ""
    }]
}