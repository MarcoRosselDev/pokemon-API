import React, { useState } from "react";
import { Button } from "./components/Button";
import { useState } from "react";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  return (
    <div>
      <Button
        text="Anterior"
        clicked={() => {
          setPokemonId(pokemonId - 1);
        }}
      />
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
