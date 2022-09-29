import { useMediaQuery } from "react-responsive";
import "photoswipe/style.css";
import SimpleGallery from "../Gallery/Gallery";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import s from "./Cases.module.css";

export default function Cases() {
    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });

    return (
        <section className={s.cases} id="Cases">
            <Container>
                <p className={s.cases__text}>This is what we do</p>
                <SectionTitle
                    children={"Business Cases"}
                    style={{
                        color: "#333333",
                        width: isMobile ? "219px" : "unset",
                        lineHeight: isDesktop ? "48px" : null,
                        margin: "0 auto 24px",
                    }}
                />
                <p className={s.cases__discription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                    sapiente!
                </p>

                <SimpleGallery
                    galleryID="my-test-gallery"
                    images={[
                        {
                            largeURL: require("../../images/cases/cases1@2x.jpg"),
                            thumbnailURL: require("../../images/cases/cases1.jpg"),
                            largeWebURL: require("../../images/cases/cases1@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases1.webp"),
                            width: 1304,
                            height: 820,
                        },
                        {
                            largeURL: require("../../images/cases/cases2@2x.jpg"),
                            thumbnailURL: require("../../images/cases/cases2.jpg"),
                            largeWebURL: require("../../images/cases/cases2@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases2.webp"),
                            width: 1304,
                            height: 820,
                        },
                        {
                            largeURL: require("../../images/cases/cases3@2x.jpg"),
                            thumbnailURL: require("../../images/cases/cases3.jpg"),
                            largeWebURL: require("../../images/cases/cases3@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases3.webp"),
                            width: 1304,
                            height: 820,
                        },
                        {
                            largeURL: require("../../images/cases/cases4@2x.jpg"),
                            thumbnailURL: require("../../images/cases/cases4.jpg"),
                            largeWebURL: require("../../images/cases/cases4@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases4.webp"),
                            width: 1304,
                            height: 820,
                        },
                        {
                            largeURL: require("../../images/cases/cases5@2x.jpg"),
                            thumbnailURL: require("../../images/cases/cases5.jpg"),
                            largeWebURL: require("../../images/cases/cases5@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases5.webp"),
                            width: 1304,
                            height: 820,
                        },
                        {
                            largeURL: require("../../images/cases/cases6@2x.webp"),
                            thumbnailURL: require("../../images/cases/cases6.jpg"),
                            largeWebURL: require("../../images/cases/cases6@2x.webp"),
                            thumbnailWebURL: require("../../images/cases/cases6.webp"),
                            width: 1304,
                            height: 820,
                        },
                    ]}
                />
            </Container>
        </section>
    );
}
