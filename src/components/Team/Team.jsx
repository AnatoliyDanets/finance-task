import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Icons from "../../images/icons.svg";
import s from "./Team.module.css";

export default function Team() {
    return (
        <section className={s.team}>
            <Container>

                <p className={s.team__text}>Who we are</p>
                <SectionTitle children={"Our Professional Team"} style={{ color: "#333333", margin: "0 auto 24px" }} />
                <p className={s.team__discription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                    sapiente!
                </p>
                <ul className={s.team__list}>
                    <li className={s.team__item}>
                        <article className={s.team__card}>
                            <div className={s.team__social}>
                                <picture>
                                    <source
                                        srcSet={require("../../images/team/person1@2x.webp")}
                                        media="(min-width:768px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person1@2x.jpg")}
                                        media="(min-width: 768px)"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person1.webp")}
                                        media="(min-width: 320px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person1.jpg")}
                                        media="(min-width: 320px)"
                                    />

                                    <img className={s.team__image}
                                        src={require("../../images/team/person1.jpg")}
                                        alt="Our Team"
                                    />
                                </picture>

                                <div>
                                    <ul className={s.team__social_list}>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.facebook.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-facebook`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://twitter.com/?lang=ru">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-twitter`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.youtube.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-youtube`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.linkedin.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-linkedin`} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.team__info}>
                                <h3 className={s.team__title}>John Doe</h3>
                                <p className={s.team__employee}>
                                    President
                                </p>
                            </div>
                        </article>
                    </li>
                    <li className={s.team__item}>

                        <article className={s.team__card}>
                            <div className={s.team__social}>
                                <picture>

                                    <source
                                        srcSet={require("../../images/team/person2@2x.webp")}
                                        media="(min-width:768px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person2@2x.jpg")}
                                        media="(min-width: 768px)"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person2.webp")}
                                        media="(min-width: 320px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person2.jpg")}
                                        media="(min-width: 320px)"
                                    />

                                    <img className={s.team__image}
                                        src={require("../../images/team/person2.jpg")}
                                        alt="Our Team"
                                    />
                                </picture>

                                <div  >
                                    <ul className={s.team__social_list}>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.facebook.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-facebook`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://twitter.com/?lang=ru">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-twitter`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.youtube.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-youtube`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.linkedin.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-linkedin`} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.team__info}>
                                <h3 className={s.team__title}>Jane Doe</h3>
                                <p className={s.team__employee}>
                                    Vice President
                                </p>
                            </div>
                        </article>
                    </li>
                    <li className={s.team__item}>
                        <article className={s.team__card}>
                            <div className={s.team__social}>
                                <picture>

                                    <source
                                        srcSet={require("../../images/team/person3@2x.webp")}
                                        media="(min-width:768px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person3@2x.jpg")}
                                        media="(min-width: 768px)"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person3.webp")}
                                        media="(min-width: 320px)"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={require("../../images/team/person3.jpg")}
                                        media="(min-width: 320px)"
                                    />

                                    <img className={s.team__image}
                                        src={require("../../images/team/person3.jpg")}
                                        alt="Our Team"
                                    />
                                </picture>

                                <div  >
                                    <ul className={s.team__social_list}>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.facebook.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35" >
                                                    <use xlinkHref={`${Icons}#icon-facebook`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://twitter.com/?lang=ru">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-twitter`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.youtube.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-youtube`} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className={s.team__social_item}>
                                            <a href="https://www.linkedin.com/">
                                                {" "}
                                                <svg className={s.team__icon} width="35" height="35">
                                                    <use xlinkHref={`${Icons}#icon-linkedin`} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.team__info}>
                                <h3 className={s.team__title}>Steve Smith</h3>
                                <p className={s.team__employee}>
                                    Marketing Head
                                </p>{" "}
                            </div>
                        </article>
                    </li>
                </ul>
            </Container>
        </section>
    );
}
