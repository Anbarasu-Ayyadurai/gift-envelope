import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Envelope = ({ imageUrl }) => {
    const openTl = useRef(null);
    const zoomTl = useRef(null);

    useEffect(() => {
        // Open animation
        openTl.current = gsap.timeline({ paused: true, reversed: true })
            .to(".top-cover", {
                duration: 0.5,
                ease: "power1.out",
                transformOrigin: "top",
                rotateX: 180
            }, 0)
            .to(".top", { zIndex: 1 }, 0.05)
            .to(".top", {
                filter: "drop-shadow(0px 2px 3px rgba(50, 0, 50, 0))"
            }, 0);

        // Zoom animation
        zoomTl.current = gsap.timeline({ paused: true, reversed: true })
            .to(".paper", { zIndex: 1 }, 0.3)
            .to(".paper", {
                duration: 0.5,
                y: -120,
                opacity: 1,
                visibility: "visible",
                zIndex: 2
            }, 0.5)
            .to(".paper", {
                duration: 0.5,
                y: 0,
                scale: 2,
                opacity: 1,
                zIndex: 3,
                ease: "power1.out"
            }, 1)
            .to(".shadow", { scaleX: 1.5 }, 1);

    }, []);

    const handleOpen = () => {
        document.querySelector(".paper").classList.add("show");
        openTl.current.play();
        zoomTl.current.play();
    };

    const handleClose = () => {
        zoomTl.current.reverse();

        setTimeout(() => {
            openTl.current.reverse();
            document.querySelector(".paper").classList.remove("show");
        }, 1000);
    };

    setTimeout(() => {
        handleOpen()
    }, 500);

    return (
        <div className="envelope">
            <div className="cover">
                <div className="bottom"></div>

                <div className="side">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>

                <div className="top" onClick={handleOpen}>
                    <div className="top-cover"></div>
                </div>
            </div>

            <div className="paper">
                <img
                    src={imageUrl}
                    alt="card"
                    className="portrait"
                />

                <div className="close" onClick={handleClose}>
                    ✕
                </div>
            </div>

            <div className="shadow"></div>
        </div>
    );
};

export default Envelope;