import classNames from "classnames";
import Icons from "../../images/icons.svg";
import Button from "../Button";
import Container from "../Container";
import s from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={classNames(s.hero, s.hero__container)} id="Hero">
            <Container>
                <h1 className={s.hero__title}>The Sky Is The Limit</h1>
                <p className={s.hero__text}>
                    We provide world class financial assistance
                </p>
                <Button style={{ margin: "0 auto" }}>
                    {
                        <>
                            <svg className={s.hero__logo} width="9" height="18">
                                <use xlinkHref={`${Icons}#icon-angle-right`} />
                            </svg>
                            <span>{"Read More"}</span>{" "}
                        </>
                    }
                </Button>
            </Container>
        </section>
    );
}
