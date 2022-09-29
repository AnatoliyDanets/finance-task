import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import s from "./Features.module.css";

export default function Features() {
    const [isHover, setIsHover] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });

    const boxStyle = {
        backgroundColor: isHover ? "#ffffff" : "#28A745",
        color: isHover ? "#28A745" : "#ffffff",
        border: isHover ? "1px solid #28A745" : "1px solid #FFFFFF",
        borderRadius: "5px",
        height: isMobile ? "54px" : "57px",
        transition: " backgroundColor 250ms linear, color 250ms linear",
    };
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });
    return (
        <section className={s.features} id="About">
            <picture>
                <source
                    srcSet={require("../../images/home/people@2x.webp")}
                    media="(min-width:1360px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/people@2x.jpg")}
                    media="(min-width: 1360px)"
                />
                <source
                    srcSet={require("../../images/home/people_2x.webp")}
                    media="(min-width:768px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/people@1x.jpg")}
                    media="(min-width: 768px)"
                />
                <source
                    srcSet={require("../../images/home/people.webp")}
                    media="(min-width: 320px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/people.jpg")}
                    media="(min-width: 320px)"
                />

                <img
                    className={s.features__image}
                    src={require("../../images/home/people.jpg")}
                    alt="Our Team"
                />
            </picture>

            <Container>
                <div className={s.features__wrapper}>
                    <p className={s.features__text}>What you are looking for</p>
                    <SectionTitle
                        children={"We provide bespoke solutions"}
                        style={isDesktop ? { lineHeight: "48px" } : null}
                    />
                    <p className={s.features__discription}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                        ipsum dignissimos quae laudantium asperiores nam aliquid impedit
                        harum illum dolore explicabo ab dolores itaque rerum temporibus
                        doloribus iste maiores deleniti?
                    </p>
                    <Button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        children={"Read More"}
                        style={boxStyle}
                    />
                </div>
            </Container>
        </section>
    );
}
