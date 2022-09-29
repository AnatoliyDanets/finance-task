import s from "./Button.module.css";

export default function Button({ style, type, disabled, onClick, onMouseEnter, onMouseLeave, children }) {
    return (
        <button
            type={type}
            style={style}
            disabled={disabled}
            onClick={onClick}
            className={s.btn}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    );
}