import type { Project } from "../models/Project.model"
import './CardProject.css'

interface Props {
    project: Project
}

export function CardProject({
    project
}: Props) {

    return (
        <article className="project-container">
            <h3 className="title-project">
                {project.title}
            </h3>
            <p className="project-description">{project.description}</p>
            
            <img className="project-img" src={project.image} alt={project.title} />
            <ul className="tags-container">
                <li>Tecnologies:</li>
                {
                    project.tags.map((tag) => (
                        <li key={tag.id}>
                            <img className="tag-img" src={tag.img} alt="" />
                        </li>
                    ))
                }
            </ul>
            <p>Proyecto: <a className="link-project" target="_blanck" href={project.way}>{project.title}</a></p>
        </article>
    )
}