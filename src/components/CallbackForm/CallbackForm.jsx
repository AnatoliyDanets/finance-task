import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Icons from "../../images/icons.svg";
import s from "./CallbackForm.module.css";

const CallbackSchema = Yup.object().shape({
    name: Yup.string()
        .typeError()
        .min(2, "Minimum 2 characters!")
        .max(32, "Maximum 32 characters!")
        .required("This is a required field"),
    email: Yup.string()
        .email("Incorrect Email")
        .min(6, "Minimum 6 characters!")
        .required("This is a required field"),
});

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

export default function CallbackForm() {
    const handleSubmit = (values) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ...values,
            }),
        })
            .then(() => {
                alert("Success!");

            })
            .catch((error) => {
                alert(`Error:${error}`);

            });
    };
    return (
        <section className={s.callback} id="Contact">
            <picture>
                <source
                    srcSet={require("../../images/home/contact@2x.webp")}
                    media="(min-width:1360px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/contact@2x.jpg")}
                    media="(min-width: 1360px)"
                />
                <source
                    srcSet={require("../../images/home/contact_1x.webp")}
                    media="(min-width:768px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/contact@1x.jpg")}
                    media="(min-width: 768px)"
                />
                <source
                    srcSet={require("../../images/home/contact.webp")}
                    media="(min-width: 320px)"
                    type="image/webp"
                />
                <source
                    srcSet={require("../../images/home/contact.jpg")}
                    media="(min-width: 320px)"
                />

                <img
                    className={s.callback__image}
                    src={require("../../images/home/contact.jpg")}
                    alt="contact"
                />
            </picture>

            <div className={s.callback__container}>
                <Formik
                    initialValues={{
                        "bot-field": "",
                        "form-name": "contact",
                        name: "",
                        email: "",
                    }}
                    validateOnBlur
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values)
                    }}
                    validationSchema={CallbackSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleReset,
                        handleBlur,
                        isValid,
                        dirty,
                    }) => (
                        <form
                            className={s.callback__form}
                            name="contact"
                            method="POST"
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <h3 className={s.callback__title}>Request Callback</h3>

                            <ul className={s.callback__form_list}>
                                <li key={1} className={s.callback__form_item}>
                                    <div className={s.error__wrap}>
                                        {touched.name && errors.name && (
                                            <span className={s.error}>
                                                <svg className={s.error__icon} width="14" height="14">
                                                    <use xlinkHref={`${Icons}#icon-warn`} />
                                                </svg>
                                                {errors.name}
                                            </span>
                                        )}
                                        <input
                                            className={s.callback__form_input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </li>
                                <li key={2} className={s.callback__form_item}>
                                    <div className={s.error__wrap}>
                                        {touched.email && errors.email && (
                                            <span className={s.error}>
                                                <svg className={s.error__icon} width="14" height="14">
                                                    <use xlinkHref={`${Icons}#icon-warn`} />
                                                </svg>
                                                {errors.email}
                                            </span>
                                        )}
                                        <input
                                            className={s.callback__form_input}
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Enter email*"
                                        />
                                    </div>
                                </li>
                            </ul>

                            <Button type={"submit"} children={"Send"} disabled={!isValid} />
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
