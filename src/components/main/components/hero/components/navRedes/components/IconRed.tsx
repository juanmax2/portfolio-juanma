import './IconRed.css'

interface Props {
    href: string;
    src: string;
    classname: string;
}

export function IconRed({href, src, classname}: Props) {

    return (
        <li className='icon-red-container'> 
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