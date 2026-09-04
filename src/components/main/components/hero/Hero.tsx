import { ImageHeader } from "./components/image/ImageHeader";
import { NavRedes } from "./components/navRedes/NavRedes";
import { Subtitle } from "./components/subtitle/Subtitle";
import { Title } from "./components/title/Title";
import './Hero.css'


export function Hero() {

    return (
        <section id="home" className="hero">
            <ImageHeader />
            <Title />
            <Subtitle />
            <NavRedes />
        </section>
    )
}