import "./Card.css";

const Card = ({ slider }) => {
  return (
    <div className="container">
      <div className="active">{slider}</div>
    </div>
  );
};

export default Card;
