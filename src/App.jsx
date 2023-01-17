import React, { useState } from "react";
import { Button } from "./components/Button";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  return (
    <div>
      <Button
        text="Anterior"
        clicked={() => {
          // if (pokemonId === 1) {
          //   setPokemonId(1);
          // } else {
          //   setPokemonId(pokemonId - 1);
          // }

          // es mejor con ternarios:

          pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
        }}
      />
      {pokemonId}
      <Button
        text="Siguiente"
        clicked={() => {
          setPokemonId(pokemonId + 1);
        }}
      />
    </div>
  );
};

export default App;
