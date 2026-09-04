import { IconFooter } from "./IconsFooter";
import './NavFooter.css'

export function NavFooter() {

    return (
        <nav className="nav-footer">
            <ul className="list-footer">
                <IconFooter
                    key="linkedin"
                    classname="linkedin icon-footer"
                    href="#"
                    src="./linkedin.svg"
                />
                <IconFooter
                    key="github"
                    classname="github icon-footer"
                    href="https://github.com/juanmax2"
                    src="./github.svg"
                />
                <IconFooter
                    key="instagram"
                    classname="intagram icon-footer"
                    href="https://www.instagram.com/juanmajge?igsh=MWNzdjZ2ZzlpNDRycg=="
                    src="/instagram.svg"
                />
                <IconFooter
                    key="gmail"
                    classname="gmail icon-footer"
                    href="#"
                    src="/gmail.svg"
                />
                <p>juanmajge@gmail.com</p>
                
            </ul>
        </nav>
    )
}