import "./Card.css";

import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const Card = ({
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  img,
  img2,
  img3,
  img4,
  img5,
  data,
  controls,
  controls2,
  slider,
  slider2,
}) => {
  return (
    <div className="container">
      <div className="active">
        <p>{text}</p> <p>{text1}</p>
        <img src={img} /> {text2} <img src={img2} />
        <p>{text3}</p>
        {controls}
        <p>{text4}</p>
        {controls2}
        <img src={img4} />
        {slider}
        {slider2}
        <p>{text5}</p>
        <p>{text6}</p>
        <p>{text7}</p>
        <img src={img5} />
      </div>
    </div>
  );
};

export default Card;
