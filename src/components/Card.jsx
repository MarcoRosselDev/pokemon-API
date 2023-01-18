const Card = ({ name, img }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={img} alt="pokemon img" />
    </div>
  );
};

export { Card };
