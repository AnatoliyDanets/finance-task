/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import Icons from "../../images/icons.svg";
import s from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={s.header__nav}>
            <a href="" className={s.header__logo}>
                <svg className={s.header__logo_item} width="39.31" height="30.63">
                    <use xlinkHref={`${Icons}#icon-logo`} />
                </svg>{" "}
                <span className={s.header__logo_item}>Finance</span>{" "}
                <span className={s.header__logo_item}>Ledger</span>
            </a>
            <ul className={s.header__list}>
                <li key={1} className={s.header__item}>
                    <Link
                        className={s.header__link}
                        activeClass="active"
                        to="Hero"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li key={2} className={s.header__item}>
                    <Link
                        className={s.header__link}
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li key={3} className={s.header__item}>
                    <Link
                        className={s.header__link}
                        activeClass="active"
                        to="Cases"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Cases
                    </Link>
                </li>
                <li key={4} className={s.header__item}>
                    <Link
                        className={s.header__link}
                        activeClass="active"
                        to="Blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Blog
                    </Link>
                </li>
                <li key={5} className={s.header__item}>
                    <Link
                        className={s.header__link}
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
