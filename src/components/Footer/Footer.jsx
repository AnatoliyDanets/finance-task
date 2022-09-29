import Container from "../Container";
import Icons from "../../images/icons.svg";
import s from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Container>
                <ul className={s.footer__list}>
                    <li className={s.footer__item}>
                        <a href="https://www.facebook.com/">
                            {" "}
                            <svg className={s.footer__icon} width="35" height="35">
                                <use xlinkHref={`${Icons}#icon-facebook`} />
                            </svg>
                        </a>
                    </li>
                    <li className={s.footer__item}>
                        <a href="https://twitter.com/?lang=ru">
                            {" "}
                            <svg className={s.footer__icon} width="35" height="35">
                                <use xlinkHref={`${Icons}#icon-twitter`} />
                            </svg>
                        </a>
                    </li>
                    <li className={s.footer__item}>
                        <a href="https://www.youtube.com/">
                            {" "}
                            <svg className={s.footer__icon} width="35" height="35">
                                <use xlinkHref={`${Icons}#icon-youtube`} />
                            </svg>
                        </a>
                    </li>
                    <li className={s.footer__item}>
                        <a href="https://www.linkedin.com/">
                            {" "}
                            <svg className={s.footer__icon} width="35" height="35">
                                <use xlinkHref={`${Icons}#icon-linkedin`} />
                            </svg>
                        </a>
                    </li>
                </ul>
                <p className={s.footer__text}>Copyright © 2021 - FinanceLedge</p>
            </Container>
        </footer>
    );
}
