import { useState } from "react";
import Link from "next/link";

function CarBox({ car }) {
    const [carLoad, setCarLoad] = useState(false);
    return (
        <>
            <div className="box-boats">
                {/* car */}
                <div className="pick-boat">
                    {carLoad && <span className="loader"></span>}
                    <img
                        style={{ display: carLoad ? "none" : "block" }}
                        src={car.img.src}
                        alt="car_img"
                        onLoad={() => setCarLoad(false)}
                    />
                </div>
                {/* description */}
                <div className="pick-description">
                    <div className="pick-description__price">
                        <span>${car.price}</span>/ aluguel por dia
                    </div>
                    <div className="pick-description__table">
                        <div className="pick-description__table__col">
                            <span>Modelo</span>
                            <span>{car.model}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Marca</span>
                            <span>{car.mark}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Ano</span>
                            <span>{car.year}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>AC</span>
                            <span>{car.air}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Transmissão</span>
                            <span>{car.transmission}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Combustivel</span>
                            <span>{car.fuel}</span>
                        </div>
                    </div>
                    {/* btn cta */}
                    <Link className="cta-btn" href="#booking-section">
                      Reserve agora
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CarBox;
