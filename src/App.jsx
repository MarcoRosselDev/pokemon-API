import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
//styles
import "./app.css";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  useEffect(() => {
    getEvolution(pokemonId);
  }, [pokemonId]);

  async function getEvolution(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    let pokemonEvoArray = [];

    let pokemonName = data.chain.species.name;
    let pokemonImg = await getPokemonImg(pokemonName);
    pokemonEvoArray.push([pokemonName, pokemonImg]);

    if (data.chain.evolves_to.length !== 0) {
      let pokemonLv2 = data.chain.evolves_to[0].species.name;
      let pokemonLv2Img = await getPokemonImg(pokemonLv2);
      pokemonEvoArray.push([pokemonLv2, pokemonLv2Img]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokeomnLv3Img = await getPokemonImg(pokemonLv3);
        pokemonEvoArray.push([pokemonLv3, pokeomnLv3Img]);
        setPokemonEvolutions(pokemonEvoArray);
      }
    }
  }

  async function getPokemonImg(name) {
    const responseImg = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    const dataImg = await responseImg.json();
    return dataImg.sprites.other["official-artwork"].front_shiny;
  }

  function prevClick() {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
  }
  function nextClick() {
    setPokemonId(pokemonId + 1);
  }

  return (
    <>
      <div className="container">
        {pokemonEvolutions.map((pokemon) => (
          <Card
            name={pokemon[0]}
            key={pokemon.length * Math.random() * 10}
            img={pokemon[1]}
          />
        ))}
      </div>
      <div className="buttons">
        <Button text="Anterior" clicked={() => prevClick()} />

        <Button text="Siguiente" clicked={() => nextClick()} />
      </div>
    </>
  );
};

export default App;
