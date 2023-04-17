import React from "react";

const PlanTrip = ({select, text, img}) => {
  return (
    <>
      <section className={"plan-section"}>
          <div className={"container"}>
              <div className={"plan-container"}>
                  <div className={"plan-container__boxes"}>
                      <div className={"plan-container__boxes__box"}>
                          <img src={img.src} alt="icon-image"/>
                          <h3>{select}</h3>
                          <p>{text}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default PlanTrip;