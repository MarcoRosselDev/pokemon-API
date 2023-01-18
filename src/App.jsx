import React, { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  function prevClick() {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
  }
  function nextClick() {
    setPokemonId(pokemonId + 1);
  }

  return (
    <div>
      <Card />
      <Button text="Anterior" clicked={() => prevClick()} />
      {pokemonId}
      <Button text="Siguiente" clicked={() => nextClick()} />
    </div>
  );
};

export default App;
