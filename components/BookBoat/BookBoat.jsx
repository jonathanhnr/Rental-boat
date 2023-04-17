import React, { useEffect, useState } from "react";
import Real415 from "../../images/book-boat/Wooden-Boat-Transparent-Images.png"
import Real365 from "../../images/book-boat/Boat-Background-PNG.png";
import Real275 from "../../images/book-boat/Boat-PNG-Images-HD.png";
import Real220 from "../../images/book-boat/Boat-PNG-HD-Quality.png";
import Real60 from "../../images/book-boat/Boat-Transparent-Image.png";
import Real40ht from "../../images/book-boat/Boat-Transparent-File.png";


const BookBoat = () => {
  const [modal, setModal] = useState(false); //class - active modal

  //booking boat
  const [boatType, setBoatType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [boatImg, setBoatImg] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)
  const [sucesMessage, setSucesMessage] = useState(false)

  const openModal = (e) => {
    e.preventDefault();
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      boatType === ""
    ) {
     setErrorMessage(true)
    } else {
      setModal(!modal);

      setErrorMessage(false)
    }
  };
  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(current => !current);
    setSucesMessage(true)
  };

  // taking value of booking inputs
  const handleBoat = (e) => {
    setBoatType(e.target.value);
    setBoatImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };
  // based on value name show car img
  let imgUrl;
  switch (boatImg) {
    case "Real 415":
      imgUrl = Real415;
      break;
    case "Real 40 ht":
      imgUrl = Real40ht;
      break;
    case "Real 365":
      imgUrl = Real365;
      break;
    case "Real 275":
      imgUrl = Real275;
      break;
    case "Real 220":
      imgUrl = Real220;
      break;
    case "real 60":
      imgUrl = Real60;
      break;
    default:
      imgUrl = "";
  }


  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}

        <div onClick={openModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        <div className={"container"}>
          <div className={"book-content"}>
            <div className={"book-content__box"}>
              <h2>Reserve um barco</h2>
              <p className={`error-message ${errorMessage ?  "error-message--open": ""}`}>
                Todos os campos obrigatórios! <i onClick={() => setErrorMessage(false)} className="fa-solid fa-xmark"></i>
              </p>

              <p className={`booking-done ${sucesMessage ? "booking-done--open" : "" }`}>
                Verifique seu e-mail para confirmar o pedido.{" "}
                <i onClick={() => setSucesMessage(false)} className="fa-solid fa-xmark"></i>
              </p>
              <form className="box-form">
                <div className="box-form__boat-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp;Selecione seu tipo de barco  <b>*</b>
                  </label>
                  <select value={boatType} onChange={handleBoat}>
                    <option>Selecione o seu tipo de barco</option>
                    <option value="Real 415">Real 415</option>
                    <option value="Real 40 ht">Real 40 ht</option>
                    <option value="Real 365">Real 365</option>
                    <option value="Real 275">Real 275</option>
                    <option value="Real 220">Real 220</option>
                    <option value="real 60">Real 60</option>
                  </select>
                </div>

                <div className="box-form__boat-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Retirada{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Selecione o local de retirada</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__boat-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Entrega{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Selecione o local de entrega</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__boat-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Hora-R <b>*</b>
                  </label>
                  <input
                      id="picktime"
                      value={pickTime}
                      onChange={handlePickTime}
                      type="date"
                  ></input>
                </div>

                <div className="box-form__boat-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Hora-E <b>*</b>
                  </label>
                  <input
                      id="droptime"
                      value={dropTime}
                      onChange={handleDropTime}
                      type="date"
                  ></input>
                </div>
                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Completar reserva</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Ao concluir esta consulta de reserva, você receberá:
          </h4>
          <p>
            Seu voucher de aluguel para apresentar na chegada ao balcão de aluguel e um número de atendimento ao cliente gratuito.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__boat-info">
          <div className="dates-div">
            <div className="booking-modal__boat-info__dates">
              <h5>locação e data</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Data e Hora de retirada</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__boat-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Data e hora de entrega</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__boat-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Local de retirada</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__boat-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Local de Desembarque</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__boat-info__model">
            <h5>
              <span>Barco -</span> {boatType}
            </h5>
            {imgUrl && <img src={imgUrl.src} alt="boat_img" />}
          </div>
          <div className="reserve-button">
            <button onClick={confirmBooking}>Reserve agora</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookBoat;
