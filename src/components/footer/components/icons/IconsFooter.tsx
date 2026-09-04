import './IconsFooter.css'

interface Props {
    href: string;
    src: string;
    classname: string;
}

export function IconFooter({href, src, classname}: Props) {

    return (
        <li className='icon-footer-container'> 
            <a 
                target='_blank'
                href={href}
                className={classname}    
            >
                <img src={src} alt={classname} />
            </a>
        </li>
    )
}