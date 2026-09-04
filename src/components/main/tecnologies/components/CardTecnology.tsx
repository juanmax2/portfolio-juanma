import type { Tecnology } from "../models/Tecnology.model";
import './CardTecnology.css'
interface Props {
    tecnology: Tecnology;
}

export function CardTecnology({tecnology}: Props) {

        return (
            <li className={`${tecnology.name} tech-container`}>
                <h3 className="tech-title">{tecnology.name}</h3>
                <img className="tech-img" src={tecnology.image} alt={tecnology.name} />
            </li>
        )
}