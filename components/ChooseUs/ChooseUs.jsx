import React from 'react';

const ChooseUs = (props) => {
    return (
       <div className={"text-container__right"}>
           <div className={"text-container__right__box"}>
               <div className="text-container__right__box__text">
                   <h4>{props.title}</h4>
                   <p>
                       {props.text}
                   </p>
               </div>
           </div>
       </div>
    );
};

export default ChooseUs;