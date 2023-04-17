import React, {useEffect, useState} from 'react';
import Link from "next/link";
import boatLogo from "../../images/hero/hero-bg.png"
import boat from "../../images/hero/Wooden-Boat-Transparent-Images.png"

const Hero = () => {
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    const bookBtn = () => {
        document
            .querySelector("#booking-section")
            .scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.pageYOffset > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img className="bg-shape" src={boatLogo.src} alt="bg-shape" />
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Planeje seu passeio agora</h4>
                            <h1>
                                Economize <span>muito</span> com nosso aluguel de barcos
                            </h1>
                            <p>
                                Alugue o barco dos seus sonhos. Preços imbatíveis, milhas ilimitadas,
                                opções de coleta flexíveis e muito mais.
                            </p>
                            <div className="hero-content__text__btns">
                                <Link
                                    onClick={bookBtn}
                                    className="hero-content__text__btns__book-ride"
                                    href="/"
                                >
                                    Agendar aluguel &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link className="hero-content__text__btns__learn-more" href="/">
                                    Saber mais &nbsp; <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* img */}
                        <img
                            src={boat.src}
                            alt="boat-img"
                            className="hero-content__boat-img"
                        />
                    </div>
                </div>

                {/* page up */}
                <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        </>
    );
};

export default Hero;