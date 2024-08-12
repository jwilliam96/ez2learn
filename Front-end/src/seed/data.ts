
import { Courses, Lessons } from "../interface"


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

        // CATEGORIA DESARROLLO WEB
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
            lessons: [
                {
                    title: "CSS Avanzado: Flexbox y Grid",
                    description: "Domina las técnicas avanzadas de diseño con CSS, incluyendo Flexbox y Grid.",
                    link: "https://www.youtube.com/watch?v=J4q5hctO6D4",
                    duration: "8 horas",
                },
                {
                    title: "JavaScript: De Principiante a Avanzado",
                    description: "Lleva tus habilidades de JavaScript al siguiente nivel, cubriendo temas desde lo básico hasta conceptos avanzados.",
                    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                    duration: "15 horas",
                },
                {
                    title: "Responsive Design con Bootstrap",
                    description: "Aprende a crear sitios web responsivos utilizando el framework Bootstrap.",
                    link: "https://www.youtube.com/watch?v=5GcQtLDGXy8",
                    duration: "7 horas",
                },
                {
                    title: "Desarrollo Web Full Stack con MERN",
                    description: "Crea aplicaciones web completas utilizando MongoDB, Express, React y Node.js.",
                    link: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
                    duration: "20 horas",
                }
            ]
        },
        {
            title: "CSS Avanzado: Flexbox y Grid",
            description: "Domina las técnicas avanzadas de diseño con CSS, incluyendo Flexbox y Grid.",
            video: "https://www.youtube.com/watch?v=J4q5hctO6D4",
            category: "Desarrollo Web",
            rating: 4.7,
            offer: false,
            sales: 1200,
            price: 24.99,
            duration: "8 horas",
            lessons: []
        },
        {
            title: "JavaScript: De Principiante a Avanzado",
            description: "Lleva tus habilidades de JavaScript al siguiente nivel, cubriendo temas desde lo básico hasta conceptos avanzados.",
            video: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            category: "Desarrollo Web",
            rating: 4.9,
            offer: true,
            sales: 3000,
            price: 29.99,
            duration: "15 horas",
            lessons: []
        },
        {
            title: "Responsive Design con Bootstrap",
            description: "Aprende a crear sitios web responsivos utilizando el framework Bootstrap.",
            video: "https://www.youtube.com/watch?v=5GcQtLDGXy8",
            category: "Desarrollo Web",
            rating: 4.6,
            offer: false,
            sales: 900,
            price: 14.99,
            duration: "7 horas",
            lessons: []
        },
        {
            title: "Desarrollo Web Full Stack con MERN",
            description: "Crea aplicaciones web completas utilizando MongoDB, Express, React y Node.js.",
            video: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
            category: "Desarrollo Web",
            rating: 4.9,
            offer: true,
            sales: 2500,
            price: 34.99,
            duration: "20 horas",
            lessons: []
        },

        //CATEGORIA CIENCIA DE DATOS
        {
            title: "Fundamentos de Ciencia de Datos",
            description: "Explora los conceptos básicos de la ciencia de Datos y cómo aplicarlos.",
            video: "https://www.youtube.com/watch?v=ua-CiDNNj30",
            category: "Ciencia de Datos",
            rating: 4.7,
            offer: false,
            sales: 1200,
            price: 24.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Introducción a Python para Ciencia de Datos",
            description: "Domina Python y sus bibliotecas esenciales para la ciencia de datos, como NumPy y Pandas.",
            video: "https://www.youtube.com/watch?v=vh0G3rJGzzI",
            category: "Ciencia de Datos",
            rating: 4.9,
            offer: false,
            sales: 2000,
            price: 19.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Análisis de Datos con R",
            description: "Aprende a analizar y visualizar datos utilizando el lenguaje de programación R.",
            video: "https://www.youtube.com/watch?v=_V8eKsto3Ug",
            category: "Ciencia de Datos",
            rating: 4.7,
            offer: true,
            sales: 1500,
            price: 23.99,
            duration: "9 horas",
            lessons: []
        },
        {
            title: "Machine Learning para Principiantes",
            description: "Introducción a los conceptos clave de machine learning y cómo aplicarlos en proyectos.",
            video: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
            category: "Ciencia de Datos",
            rating: 4.8,
            offer: false,
            sales: 2200,
            price: 29.99,
            duration: "14 horas",
            lessons: []
        },
        {
            title: "Visualización de Datos con Tableau",
            description: "Aprende a crear visualizaciones impactantes y dashboards interactivos utilizando Tableau.",
            video: "https://www.youtube.com/watch?v=0SroZ3uOmZE",
            category: "Ciencia de Datos",
            rating: 4.6,
            offer: true,
            sales: 1300,
            price: 22.99,
            duration: "8 horas",
            lessons: []
        },

        // CATEGORIA DESARROLLO MOVIL
        {
            title: "Desarrollo de Apps con React Native",
            description: "Crea aplicaciones móviles multiplataforma utilizando React Native.",
            video: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
            category: "Desarrollo Movil",
            rating: 4.8,
            offer: true,
            sales: 2500,
            price: 29.99,
            duration: "15 horas",
            lessons: []
        },
        {
            title: "Introducción a Swift para iOS",
            description: "Aprende los conceptos básicos de Swift para desarrollar aplicaciones iOS.",
            video: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
            category: "Desarrollo Movil",
            rating: 4.7,
            offer: false,
            sales: 1800,
            price: 24.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Desarrollo de Apps Android con Kotlin",
            description: "Domina Kotlin para crear aplicaciones Android eficientes y modernas.",
            video: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
            category: "Desarrollo Movil",
            rating: 4.9,
            offer: true,
            sales: 2200,
            price: 27.99,
            duration: "14 horas",
            lessons: []
        },
        {
            title: "Flutter: Desarrollo de Apps Móviles",
            description: "Construye aplicaciones móviles nativas con Flutter y Dart.",
            video: "https://www.youtube.com/watch?v=fq4N0hgOWzU",
            category: "Desarrollo Movil",
            rating: 4.8,
            offer: false,
            sales: 2000,
            price: 26.99,
            duration: "13 horas",
            lessons: []
        },
        {
            title: "Introducción al Desarrollo Movil Híbrido",
            description: "Aprende a desarrollar aplicaciones híbridas utilizando frameworks como Ionic y Cordova.",
            video: "https://www.youtube.com/watch?v=r0JRhKc4v9E",
            category: "Desarrollo Movil",
            rating: 4.6,
            offer: true,
            sales: 1700,
            price: 22.99,
            duration: "10 horas",
            lessons: []
        },


        // CATEGORIA LENGUAJE DE PROGRAMACIÓN
        {
            title: "Python para Principiantes",
            description: "Aprende a programar en Python desde cero.",
            video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
            category: "Lenguaje de Programación",
            rating: 4.8,
            offer: false,
            sales: 2500,
            price: 34.99,
            duration: "8 horas",
            lessons: []
        },
        {
            title: "Aprende Python desde Cero",
            description: "Domina Python, uno de los lenguajes de programación más populares y versátiles.",
            video: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
            category: "Lenguaje de Programación",
            rating: 4.9,
            offer: true,
            sales: 3000,
            price: 19.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Java para Principiantes",
            description: "Introduce a los fundamentos de Java, un lenguaje robusto y ampliamente utilizado.",
            video: "https://www.youtube.com/watch?v=eIrMbAQSU34",
            category: "Lenguaje de Programación",
            rating: 4.8,
            offer: false,
            sales: 2500,
            price: 24.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Programación en C#",
            description: "Aprende a desarrollar aplicaciones usando C#, un lenguaje clave para .NET.",
            video: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
            category: "Lenguaje de Programación",
            rating: 4.7,
            offer: true,
            sales: 2200,
            price: 21.99,
            duration: "11 horas",
            lessons: []
        },
        {
            title: "JavaScript: El Lenguaje de la Web",
            description: "Conviértete en un experto en JavaScript, el lenguaje esencial para desarrollo web.",
            video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            category: "Lenguaje de Programación",
            rating: 4.9,
            offer: false,
            sales: 2800,
            price: 22.99,
            duration: "9 horas",
            lessons: []
        },
        {
            title: "Master en C++",
            description: "Domina C++, un lenguaje poderoso para programación de sistemas y aplicaciones de alto rendimiento.",
            video: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
            category: "Lenguaje de Programación",
            rating: 4.8,
            offer: true,
            sales: 2400,
            price: 26.99,
            duration: "14 horas",
            lessons: []
        },

        // CATEGORIA DESARROLLO DE VIDEOJUEGO
        {
            title: "Introducción al Desarrollo de Videojuegos con Unity",
            description: "Aprende a crear videojuegos 2D y 3D utilizando Unity, uno de los motores más populares.",
            video: "https://www.youtube.com/watch?v=IlKaB1etrik",
            category: "Desarrollo de Videojuegos",
            rating: 4.9,
            offer: true,
            sales: 3200,
            price: 29.99,
            duration: "20 horas",
            lessons: []
        },
        {
            title: "Desarrollo de Videojuegos con Unreal Engine",
            description: "Domina Unreal Engine para desarrollar videojuegos de alta calidad y realismo.",
            video: "https://www.youtube.com/watch?v=gQmiqmxJMtA",
            category: "Desarrollo de Videojuegos",
            rating: 4.8,
            offer: false,
            sales: 2800,
            price: 34.99,
            duration: "22 horas",
            lessons: []
        },
        {
            title: "Programación de Videojuegos con C# en Unity",
            description: "Aprende a programar mecánicas de juego en C# dentro de Unity, desde cero.",
            video: "https://www.youtube.com/watch?v=pwZpJzpE2lQ",
            category: "Desarrollo de Videojuegos",
            rating: 4.7,
            offer: true,
            sales: 2500,
            price: 27.99,
            duration: "18 horas",
            lessons: []
        },
        {
            title: "Diseño de Niveles para Videojuegos",
            description: "Explora las técnicas y herramientas para crear niveles atractivos y funcionales en videojuegos.",
            video: "https://www.youtube.com/watch?v=5YV1cXc4zH0",
            category: "Desarrollo de Videojuegos",
            rating: 4.6,
            offer: false,
            sales: 2100,
            price: 24.99,
            duration: "15 horas",
            lessons: []
        },
        {
            title: "Introducción a la Programación de Juegos en 2D",
            description: "Aprende a desarrollar videojuegos en 2D con herramientas y lenguajes específicos.",
            video: "https://www.youtube.com/watch?v=1qsfNIAjpoA",
            category: "Desarrollo de Videojuegos",
            rating: 4.8,
            offer: true,
            sales: 2300,
            price: 22.99,
            duration: "12 horas",
            lessons: []
        },

        // CATEGORIA BASE DE DATOS
        {
            title: "Diseño y Desarrollo de Bases de Datos",
            description: "Conoce cómo diseñar y desarrollar bases de datos eficientes.",
            video: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
            category: "Bases de Datos",
            rating: 4.5,
            offer: false,
            sales: 1100,
            price: 21.99,
            duration: "9 horas",
            lessons: []
        },
        {
            title: "Fundamentos de Bases de Datos",
            description: "Aprende los conceptos esenciales de bases de datos, incluyendo diseño y modelado.",
            video: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
            category: "Bases de Datos",
            rating: 4.8,
            offer: true,
            sales: 2100,
            price: 19.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "SQL para Principiantes",
            description: "Domina el lenguaje SQL y aprende a consultar y gestionar bases de datos relacionales.",
            video: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
            category: "Bases de Datos",
            rating: 4.9,
            offer: false,
            sales: 2800,
            price: 24.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Administración de Bases de Datos con MySQL",
            description: "Conviértete en un experto en la administración y optimización de bases de datos MySQL.",
            video: "https://www.youtube.com/watch?v=EN6Dx22cPRI",
            category: "Bases de Datos",
            rating: 4.7,
            offer: true,
            sales: 2400,
            price: 29.99,
            duration: "15 horas",
            lessons: []
        },
        {
            title: "Introducción a MongoDB",
            description: "Aprende a trabajar con MongoDB, una de las bases de datos NoSQL más populares.",
            video: "https://www.youtube.com/watch?v=ofme2o29ngU",
            category: "Bases de Datos",
            rating: 4.8,
            offer: false,
            sales: 2000,
            price: 22.99,
            duration: "11 horas",
            lessons: []
        },
        {
            title: "Diseño y Modelado de Bases de Datos",
            description: "Aprende a diseñar y modelar bases de datos de manera eficiente y efectiva.",
            video: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
            category: "Bases de Datos",
            rating: 4.6,
            offer: true,
            sales: 1800,
            price: 21.99,
            duration: "13 horas",
            lessons: []
        },

        // CATEGORIA TESTEO DE SOFTWARE
        {
            title: "Introducción al Testeo de Software",
            description: "Aprende las técnicas básicas de testeo de Software.",
            video: "https://www.youtube.com/watch?v=AZFTLKwCg6g",
            category: "Testeo de Software",
            rating: 4.7,
            offer: true,
            sales: 900,
            price: 17.99,
            duration: "7 horas",
            lessons: []
        },
        {
            title: "Fundamentos del Testeo de Software",
            description: "Aprende los conceptos básicos de testing, incluyendo tipos de pruebas y procesos.",
            video: "https://www.youtube.com/watch?v=URSWYvyc42M",
            category: "Testeo de Software",
            rating: 4.7,
            offer: true,
            sales: 1900,
            price: 17.99,
            duration: "8 horas",
            lessons: []
        },
        {
            title: "Testeo Automatizado con Selenium",
            description: "Domina Selenium para realizar pruebas automatizadas en aplicaciones web.",
            video: "https://www.youtube.com/watch?v=hv3MmtR9F-A",
            category: "Testeo de Software",
            rating: 4.8,
            offer: false,
            sales: 2200,
            price: 23.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Introducción a JUnit para Testeo en Java",
            description: "Aprende a escribir y ejecutar pruebas unitarias en Java utilizando JUnit.",
            video: "https://www.youtube.com/watch?v=HLTxPHZcEbA",
            category: "Testeo de Software",
            rating: 4.6,
            offer: true,
            sales: 1600,
            price: 19.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Test Driven Development (TDD) en JavaScript",
            description: "Domina el enfoque de desarrollo guiado por pruebas (TDD) en proyectos de JavaScript.",
            video: "https://www.youtube.com/watch?v=ILb9-c5j8uI",
            category: "Testeo de Software",
            rating: 4.9,
            offer: false,
            sales: 2500,
            price: 24.99,
            duration: "14 horas",
            lessons: []
        },
        {
            title: "Automatización de Pruebas con Cypress",
            description: "Aprende a automatizar pruebas end-to-end para aplicaciones web con Cypress.",
            video: "https://www.youtube.com/watch?v=7NfM1xQx5pQ",
            category: "Testeo de Software",
            rating: 4.8,
            offer: true,
            sales: 2100,
            price: 22.99,
            duration: "11 horas",
            lessons: []
        },

        // CATEGORIA INGENIERÍA DE SOFTWARE
        {
            title: "Principios de Ingeniería de Software",
            description: "Estudia los principios fundamentales de la Ingeniería de Software.",
            video: "https://www.youtube.com/watch?v=1s1Yvnfc1eM",
            category: "Ingeniería de Software",
            rating: 4.8,
            offer: false,
            sales: 1400,
            price: 26.99,
            duration: "11 horas",
            lessons: []
        },
        {
            title: "Fundamentos de Ingeniería de Software",
            description: "Aprende los principios y prácticas fundamentales en la ingeniería de software.",
            video: "https://www.youtube.com/watch?v=VTpdoEKF60w",
            category: "Ingeniería de Software",
            rating: 4.7,
            offer: true,
            sales: 2400,
            price: 19.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Diseño de Software Orientado a Objetos",
            description: "Domina los conceptos de diseño orientado a objetos y cómo aplicarlos en proyectos de software.",
            video: "https://www.youtube.com/watch?v=gj4VwpY9That",
            category: "Ingeniería de Software",
            rating: 4.8,
            offer: false,
            sales: 2000,
            price: 24.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Patrones de Diseño en Ingeniería de Software",
            description: "Aprende a implementar patrones de diseño comunes para crear software robusto y escalable.",
            video: "https://www.youtube.com/watch?v=v9ejT8FO-7I",
            category: "Ingeniería de Software",
            rating: 4.9,
            offer: true,
            sales: 2600,
            price: 29.99,
            duration: "15 horas",
            lessons: []
        },
        {
            title: "Ingeniería de Requisitos",
            description: "Descubre cómo capturar, analizar y gestionar los requisitos de software de manera efectiva.",
            video: "https://www.youtube.com/watch?v=ft4W5nSA3NY",
            category: "Ingeniería de Software",
            rating: 4.6,
            offer: false,
            sales: 1800,
            price: 22.99,
            duration: "11 horas",
            lessons: []
        },
        {
            title: "Gestión de Proyectos de Software con Agile",
            description: "Aprende a gestionar proyectos de software utilizando metodologías ágiles como Scrum.",
            video: "https://www.youtube.com/watch?v=9TycLR0TqFA",
            category: "Ingeniería de Software",
            rating: 4.8,
            offer: true,
            sales: 2300,
            price: 26.99,
            duration: "13 horas",
            lessons: []
        },

        // CATEGORIA DE HERRAMIENTAS DE DESARROLLO
        {
            title: "Herramientas de Desarrollo: Git y GitHub",
            description: "Domina las herramientas esenciales para el desarrollo de software como Git y GitHub.",
            video: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            category: "Herramientas de Desarrollo",
            rating: 4.9,
            offer: true,
            sales: 2100,
            price: 22.99,
            duration: "6 horas",
            lessons: []
        },
        {
            title: "Dominando Git y GitHub",
            description: "Aprende a usar Git para el control de versiones y GitHub para colaborar en proyectos.",
            video: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            category: "Herramientas de Desarrollo",
            rating: 4.9,
            offer: true,
            sales: 3000,
            price: 19.99,
            duration: "8 horas",
            lessons: []
        },
        {
            title: "Docker para Desarrolladores",
            description: "Domina Docker y aprende a crear, desplegar y gestionar contenedores en tus proyectos.",
            video: "https://www.youtube.com/watch?v=3c-iBn73dDE",
            category: "Herramientas de Desarrollo",
            rating: 4.8,
            offer: false,
            sales: 2500,
            price: 24.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Introducción a Visual Studio Code",
            description: "Aprende a utilizar Visual Studio Code, uno de los editores de código más populares y potentes.",
            video: "https://www.youtube.com/watch?v=VqCgcpAypFQ",
            category: "Herramientas de Desarrollo",
            rating: 4.7,
            offer: true,
            sales: 2200,
            price: 14.99,
            duration: "6 horas",
            lessons: []
        },
        {
            title: "Automatización de Tareas con Jenkins",
            description: "Aprende a configurar y utilizar Jenkins para automatizar tareas de desarrollo y despliegue.",
            video: "https://www.youtube.com/watch?v=FxAAJIb5A9I",
            category: "Herramientas de Desarrollo",
            rating: 4.8,
            offer: false,
            sales: 2000,
            price: 21.99,
            duration: "9 horas",
            lessons: []
        },
        {
            title: "Introducción a Kubernetes",
            description: "Domina Kubernetes para la orquestación de contenedores y gestión de aplicaciones en la nube.",
            video: "https://www.youtube.com/watch?v=X48VuDVv0do",
            category: "Herramientas de Desarrollo",
            rating: 4.9,
            offer: true,
            sales: 2700,
            price: 29.99,
            duration: "12 horas",
            lessons: []
        },

        // CATEGORIA DE DESARROLLO NO-CODE
        {
            title: "Desarrollo No-Code con Bubble",
            description: "Crea aplicaciones web sin código utilizando Bubble.",
            video: "https://www.youtube.com/watch?v=2KNpZibzR9A",
            category: "Desarrollo No-Code",
            rating: 4.6,
            offer: false,
            sales: 800,
            price: 14.99,
            duration: "5 horas",
            lessons: []
        },
        {
            title: "Introducción a Web flow para Diseño Web No-Code",
            description: "Aprende a diseñar y construir sitios web sin código utilizando Web flow.",
            video: "https://www.youtube.com/watch?v=k9T7-IgK73U",
            category: "Desarrollo No-Code",
            rating: 4.8,
            offer: true,
            sales: 2100,
            price: 22.99,
            duration: "8 horas",
            lessons: []
        },
        {
            title: "Automatización de Flujos de Trabajo con Zapier",
            description: "Descubre cómo automatizar tareas y flujos de trabajo con Zapier sin escribir código.",
            video: "https://www.youtube.com/watch?v=IvPHEhYEOm4",
            category: "Desarrollo No-Code",
            rating: 4.7,
            offer: false,
            sales: 1900,
            price: 19.99,
            duration: "7 horas",
            lessons: []
        },
        {
            title: "Creación de Aplicaciones Móviles con Adalo",
            description: "Aprende a construir aplicaciones móviles sin código usando Adalo.",
            video: "https://www.youtube.com/watch?v=3gRrPccPSzY",
            category: "Desarrollo No-Code",
            rating: 4.9,
            offer: true,
            sales: 2500,
            price: 27.99,
            duration: "10 horas",
            lessons: []
        },
        {
            title: "Construcción de Aplicaciones Web con Bubble",
            description: "Domina Bubble para crear aplicaciones web complejas sin escribir una sola línea de código.",
            video: "https://www.youtube.com/watch?v=9t4ktNNFbh8",
            category: "Desarrollo No-Code",
            rating: 4.8,
            offer: false,
            sales: 2300,
            price: 25.99,
            duration: "12 horas",
            lessons: []
        },
        {
            title: "Desarrollo de Bases de Datos con Airtable",
            description: "Aprende a crear y gestionar bases de datos utilizando Airtable, una herramienta no-code poderosa.",
            video: "https://www.youtube.com/watch?v=7V9m5U5eZ9k",
            category: "Desarrollo No-Code",
            rating: 4.6,
            offer: true,
            sales: 1700,
            price: 21.99,
            duration: "9 horas",
            lessons: []
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