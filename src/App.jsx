import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    getEvolution(pokemonId);
  });

  async function getEvolution(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    console.log(response);
  }

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
