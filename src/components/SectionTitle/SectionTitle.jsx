
import s from "./SectionTitle.module.css"

export default function SectionTitle({ style, children }) {
    return (
        <h2 className={s.section} style={style}>{children}</h2>
    )
}