import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";
import s from "./Gallery.module.css";

export default function SimpleGallery(props) {
    const smallScreenPadding = {
        top: 20, bottom: 20, left: 20, right: 20
    };
    const largeScreenPadding = {
        top: 30, bottom: 30, left: 32, right: 32
    };
    useEffect(() => {

        let lightbox = new PhotoSwipeLightbox({
            gallery: "#" + props.galleryID,
            children: "a",
            pswpModule: () => import("photoswipe"),
            paddingFn: (viewportSize) => {
                return viewportSize.x < 700 ? smallScreenPadding : largeScreenPadding
            },

        });

        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.galleryID]);

    return (
        <ul className={s.cases__list} id={props.galleryID}>
            {props.images.map((image, index) => (
                <li className={s.cases__item}>
                    <a
                        href={image.largeURL}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={props.galleryID + "-" + index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <picture>
                            <source
                                srcSet={image.thumbnailWebURL}
                                media="(min-width:1360px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={image.thumbnailURL}
                                media="(min-width: 1360px)"
                            />
                            <source
                                srcSet={image.thumbnailWebURL}
                                media="(min-width:768px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={image.thumbnailURL}
                                media="(min-width: 768px)"
                            />
                            <source
                                srcSet={image.thumbnailWebURL}
                                media="(min-width: 320px)"
                                type="image/webp"
                            />
                            <source
                                srcSet={image.thumbnailURL}
                                media="(min-width: 320px)"
                            />

                            <img
                                className={s.cases__img}
                                src={image.thumbnailURL}
                                alt="cases"
                                width={280}
                                height={176}

                            />
                        </picture>

                    </a>
                </li>
            ))}

        </ul>
    );
}
