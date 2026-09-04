import { IconRed } from "./components/IconRed";
import './NavRedes.css'

export function NavRedes() {

    return (
        <nav className="nav-redes">
            <ul className="list-redes">
                <IconRed
                    key="linkedin-red"
                    classname="linkedin icon-red"
                    href="#"
                    src="./linkedin.svg"
                />
                <IconRed
                    key="github-red"
                    classname="github icon-red"
                    href="https://github.com/juanmax2"
                    src="./github.svg"
                />
                <IconRed
                    key="instagram-red"
                    classname="intagram icon-red"
                    href="https://www.instagram.com/juanmajge?igsh=MWNzdjZ2ZzlpNDRycg=="
                    src="/instagram.svg"
                />
                
            </ul>
        </nav>
    )
}