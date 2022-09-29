import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import Navigation from "../Navigation";
import s from "./Header.module.css";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="home"
            className={s.header}
            style={
                isMobile && scrollY >= 120
                    ? { position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.8)" }
                    : { position: "absolute", backgroundColor: "transparent" }
                        ? isTablet && scrollY >= 70
                            ? { position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.8)" }
                            : { position: "absolute", backgroundColor: "transparent" }
                        : null
            }
        >
            <Container>
                <Navigation />
            </Container>
        </header>
    );
}
