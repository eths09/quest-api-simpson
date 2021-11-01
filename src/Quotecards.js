import React from "react";

const Quotecards = (props) => {
    return(
 <div>
  <p>{props.simpsonquote.quote}</p>
  <h2>{props.simpsonquote.character}</h2>
  <img src= {props.simpsonquote.image} alt="imgsimpson"/>
  <p>{props.simpsonquote.characterDirection}</p>
 </div>
    )
}

export default Quotecards
