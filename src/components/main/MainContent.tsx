import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { ProjectsList } from "./projects/components/ProjectList";
import { ListTecnologies } from "./tecnologies/components/ListTecnologies";
import './MainContent.css'

export function MainContent() {

    return (
        <main className="main-container">
            <Hero />
            <About />
            <ProjectsList />
            <ListTecnologies />
        </main>
    )
}