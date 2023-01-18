import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    getEvolution(pokemonId);
    console.log("ejecutado");
  }, [pokemonId]);

  async function getEvolution(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();
    let pokemonName = data.chain.species.name;
    getPokemonImg(pokemonName);
  }

  async function getPokemonImg(name) {
    const responseImg = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    const dataImg = await responseImg.json();
    console.log(dataImg.sprites.other["official-artwork"].front_shiny);
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

      <Button text="Siguiente" clicked={() => nextClick()} />
    </div>
  );
};

export default App;
