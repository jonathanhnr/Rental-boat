import Link from "next/link";

function Footer() {
    return (<>
        <footer >
            <div className="container">
                <div id={"contact"} className="footer-content">
                    <ul className="footer-content__1">
                        <li>
                            Aluguel de <span> barcos</span>
                        </li>
                        <li>
                            Oferecemos uma grande variedade de barcos
                        </li>
                        <li>
                            <a href="tel:123456789">
                                <i className="fa-solid fa-phone"></i> &nbsp;
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa-solid fa-envelope"></i>
                                &nbsp;
                            </a>
                        </li>
                    </ul>

                    <ul className="footer-content__2">
                        <li>EMPRESA</li>
                        <li>
                            <Link href="/">Mobile</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>

                    </ul>

                    <ul className="footer-content__2">
                        <li>Atendimento</li>
                        <li>seg - sex: 9:00AM - 9:00PM</li>
                        <li>sab: 9:00AM - 19:00PM</li>
                        <li>dom: fechado</li>
                    </ul>

                    <ul className="footer-content__2">
                        <li>INSCRIÇÃO</li>
                        <li>
                            <p>Escreva o seu endereço de e-mail para as últimas notícias e atualizações.</p>
                        </li>
                        <li>
                            <input type="email" placeholder="Email"></input>
                        </li>
                        <li>
                            <button className="submit-email">Enviar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;

