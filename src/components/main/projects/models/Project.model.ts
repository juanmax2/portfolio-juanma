interface Tag {
    id: string;
    img: string
}

export interface Project {
    title: string;
    description: string;
    tags: Tag[];
    way: string;
    image: string;
}
