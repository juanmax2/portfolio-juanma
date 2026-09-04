import type { Project } from "../models/Project.model";
import { CardProject } from "./CardProject";
import './ProjectList.css'



export function ProjectsList() {
    const PROJECTS: Project[] = [
        {
            title: "Rick and Morty",
            description: "Buscador de Rick and morty aprovechando su api, para practicar fetch, usando axios, creando un fetch muy completo y tipado. Manejo de context para favoritos.",
            tags: [{id: 'RM-react', img:'/react.svg'}, {id:'RM-typescript', img: '/typescript.svg'}, {id:'RM-vite', img: '/vite.svg'}],
            way: "https://github.com/juanmax2/RickandMorty",
            image: "/rickandmorty.webp"
        },
        {
            title: "Demon Slayer",
            description: "Buscador de Demon Slayer, usando zod, react-router, react-hook-form, context para el inicio de sesion, local storage.",
            tags: [{id: 'DS-react', img:'/react.svg'}, {id: 'DS-typescript', img:'/typescript.svg'}, {id:'DS-vite', img: '/vite.svg'}],
            way: "https://github.com/juanmax2/demon-slayer",
            image: "/kimetsu.webp"
        },
        {
            title: "E-commerce",
            description: "Aplicación para un carrito de la compra usando context, listando los objetos de una API ofreciente añadir, limpiar carrito, una lista de productos que te pueden interesar.",
            tags: [{id: 'E-react', img: '/react.svg'}, {id: 'E-typescript', img:'/typescript.svg'}, {id:'E-vite', img: '/vite.svg'}],
            way: "https://github.com/juanmax2/e-commerce",
            image: "/ecommerce.webp"
        },
        {
            title: "Kanban Board",
            description: "Aplicación para la gestión de tareas, formulario controlado y válidado con zod, uso de zustand con persist para administrar las tareas y dnd kit para el drag and drop.",
            tags: [{id: 'K-react', img: '/react.svg'}, {id: 'K-typescript', img:'/typescript.svg'}, {id:'K-zustand', img:'/zustand.webp'}, {id:'K-vite', img: '/vite.svg'}],
            way: "https://github.com/juanmax2/kanban-board",
            image: "/task.webp"
        },
        {
            title: "DB-Wiki",
            description: "Aplicación de busqueda de personajes de Dragon Ball, hecha enteramente con React y JavaScript, usando Tailwind para el diseño.",
            tags: [{id:'DB-react', img:'/react.svg'}, {id:'DB-javascript', img:'/javascript.svg'}, {id:'DB-tailwind', img:'/tailwind.svg'}, {id:'DB-vite', img: '/vite.svg'}],
            way: "https://github.com/juanmax2/DB-wiki",
            image: "/db.webp"
        },
    ]


    return (
        <section id="projects" className="projects-container">
            <h2 className="projects-title">Projectos</h2>
            {
                PROJECTS.map((project: Project) => (
                    <CardProject key={project.title} project={project} />
                ))
            }
        </section>
    )
}