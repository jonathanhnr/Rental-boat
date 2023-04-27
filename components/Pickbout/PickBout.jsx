import { useState } from "react";
import { BOAT_DATA } from "./BoatData";
import BoatBox from "./BoatBox";

function PickCar() {
  const [active, setActive] = useState(BOAT_DATA[0][0]);
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section  className="pick-section">
        <div className="container">
          <div id={"models"} className="pick-container">
            <div className="pick-container__title">
              <h3>Modelos de barcos</h3>
              <h2>A nossa frota de aluguel</h2>
              <p>
                Escolha entre uma variedade de nossos incríveis veículos para alugar para o seu
                próxima passeio
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                {BOAT_DATA.map(([car], index) => {
                  const id = `btn${index + 1}`;
                  return (
                    <button
                      key={car.name}
                      className={`${coloringButton(id)}`}
                      onClick={() => {
                        setActive(car);
                        btnID(id);
                      }}
                    >
                      {car.name}
                    </button>
                  );
                })}
              </div>
              <BoatBox car={active} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
