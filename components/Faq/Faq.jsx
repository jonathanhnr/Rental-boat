import React, { useState } from "react";

const Faq = (props) => {
 const [activeQ, setActiveQ] = useState("");

 const openQ = (id) => {
  setActiveQ(activeQ === id ? "" : id);
 };

 const getClassAnswer = (id) => {
  return activeQ === id ? "active-answer" : "";
 };

 const getClassQuestion = (id) => {
  return activeQ === id ? "active-question" : "";
 };
 return (
  <div className={"faq-box"}>
   <div
    id={props.id}
    onClick={() => openQ(props.id)}
    className={`faq-box__question  ${getClassQuestion(props.id)}`}
   >
    <p>{props.faq}</p>
    <i className="fa-solid fa-angle-down"></i>
   </div>
   <div
    id="q1"
    onClick={() => openQ(props.id)}
    className={`faq-box__answer ${getClassAnswer(props.id)}`}
   >
    {props.text}
   </div>
  </div>
 );
};

export default Faq;
