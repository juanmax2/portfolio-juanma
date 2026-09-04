import type { Tecnology } from "../models/Tecnology.model";
import { CardTecnology } from "./CardTecnology";
import './ListTecnologies.css'

export function ListTecnologies() {

    const TECNOLOGIES: Tecnology[] = [
        {name: 'React', image: '/react.svg'},
        {name: 'JavaScript', image: '/javascript.svg'},
        {name: 'TypeScript', image: '/typescript.svg'},
        {name: 'Tailwind CSS', image: '/tailwind.svg'},
        {name: 'Zustand', image: '/zustand.webp'},
        {name: 'Vite', image: '/vite.svg'},
    ]

    return (
        <section id="tecnologies" className="tecnologies-section">
            <h2>Lista de tecnologías</h2>
            <ul className="list-tecnologies">
                {TECNOLOGIES.map((tecnology) => (
                    <CardTecnology key={tecnology.name} tecnology={tecnology} />
                ))}
            </ul>
        </section>
    )
}