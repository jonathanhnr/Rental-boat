import React from "react";
import ChooseUs from "./ChooseUs";
import boat from "../../images/book-boat/pngegg.png"
import Link from "next/link";

const ChooseUsContainer = () => {
  return (
    <>
      <section  className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img src={boat.src} className="choose-container__img" alt="car_img" />
            <div id={"about"} className="text-container">
              <div className="text-container__left">
                <h4>Porque escolher-nos</h4>
                <h2>As melhores ofertas que você vai/encontrar</h2>
                <p>
                  Estamos empenhados em fornecer a você o melhor valor pelo seu
                  dinheiro, para que você possa desfrutar de serviços e produtos
                  de alta qualidade sem gastar muito. Nossas ofertas são
                  projetadas para oferecer a você a melhor experiência de
                  aluguel, então não perca a chance de economizar muito.
                </p>
                <Link href="/">
                  Mais detalhes &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
              <div className="text-container__right">
                <ChooseUs
                  title={"Navegar pelos mares"}
                  text={`Leve sua experiência de navegar para o próximo nível
                   com nossos barcos de primeira linha para suas aventuras `}
                />
                <ChooseUs
                  title={"Preço com Tudo Incluído"}
                  text={`Obtenha tudo o que você precisa em um preço conveniente
                   e transparente com nossa política de preços com tudo incluído.`}
                />
                <ChooseUs
                  title={"Sem taxas ocultas"}
                  text={`Desfrute de tranquilidade com nossa
                 política de taxas não ocultas.
                 Acreditamos em preços transparentes e honestos.`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUsContainer;
