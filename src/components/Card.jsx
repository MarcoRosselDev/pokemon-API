import "./card.css";

const Card = ({ name, img }) => {
  return (
    <div className="card-container">
      <p>{name}</p>
      <img src={img} alt="pokemon img" />
    </div>
  );
};

export { Card };
