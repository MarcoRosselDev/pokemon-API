import React from "react";
import { Button } from "./components/Button";

const App = () => {
  return (
    <div>
      <Button
        text="Anterior"
        clicked={() => {
          console.log("clicked Anterior");
        }}
      />
      <Button
        text="Siguiente"
        clicked={() => {
          console.log("clicked Siguiente");
        }}
      />
    </div>
  );
};

export default App;
