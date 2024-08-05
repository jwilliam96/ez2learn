export interface Categories {
    id: string
    name_category: string
}

export interface Cursos {
    id: string;
    name_curso: string;
    description: string;
    idioma: string;
    review: number;
    price: number;
    duration_total: number;
    etiqueta: string;
    sales: number;
    trailer: null;
    id_user: string;
    id_category: string;
}

export interface Videos {
    id: string;
    name_video: string;
    link: string;
    duration: number;
    id_curso: string;
}
