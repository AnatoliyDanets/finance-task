import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import s from "./Blog.module.css";

export default function Blog() {
    const [isHover, setIsHover] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const boxStyle = {
        backgroundColor: isHover ? "#ffffff" : "#0284d0",
        color: isHover ? "#0284D0" : "#ffffff",
        border: isHover ? "1px solid #0284d0" : "1px solid #FFFFFF",
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

    return (
        <section className={s.blog} id="Blog">
            <picture>
                <source
                    srcSet={require("../../images/home/blog@2x.webp")}
                    media="(min-width:1360px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/blog@2x.jpg")}
                    media="(min-width: 1360px)"
                />
                <source
                    srcSet={require("../../images/home/blog_1x.webp")}
                    media="(min-width:768px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/blog@1.jpg")}
                    media="(min-width: 768px)"
                />
                <source
                    srcSet={require("../../images/home/blog.webp")}
                    media="(min-width: 320px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/blog.jpg")}
                    media="(min-width: 320px)"
                />

                <img
                    className={s.blog__image}
                    src={require("../../images/home/blog.jpg")}
                    alt="blog"
                />
            </picture>

            <Container>
                <div className={s.blog__wrapper}>
                    <p className={s.blog__text}>April 16 2020</p>
                    <SectionTitle children={"Blog Post One"} />
                    <p className={s.blog__discription}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                        ipsum dignissimos quae laudantium asperiores nam aliquid impedit
                        harum illum dolore explicabo ab dolores itaque rerum temporibus
                        doloribus iste maiores deleniti?
                    </p>
                    <Button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        children={"Read Our Blog"}
                        style={boxStyle}
                    />
                </div>
            </Container>
        </section>
    );
}
