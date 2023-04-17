import React from "react";
import PlanTrip from "./PlanTrip";
import logo1 from "../../images/plan/logo.png";
import logo2 from "../../images/plan/pngwing.com.png";
import logo3 from "../../images/plan/pngwing.png";

const PlanTripContainer = () => {
  return (
    <>
      <div className={"container"}>
        <div className="plan-container__title">
          <h3>Planeje seu passeio agora</h3>
          <h2>Aluguel de barco rápido e fácil</h2>
        </div>
          <div className={"plan-container__boxes"}>
              <PlanTrip
                  img={logo1}
                  select={"Selecione o barco"}
                  text={`Temos o carro perfeito para atender
          às suas necessidades`}
              />
              <PlanTrip
                  img={logo2}
                  select={"Operador de contato"}
                  text={`Nossos operadores experientes e amigáveis estão sempre prontos
       para ajudar com qualquer dúvida ou preocupação`}
              />
              <PlanTrip
                  img={logo3}
                  select={"Vamos navegar"}
                  text={`Varios modelos de barco para diferentes passeios`}
              />
          </div>

      </div>
    </>
  );
};

export default PlanTripContainer;
