// nesecitamos crear un elemento raiz

import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

console.log(root);

root.render(<App />);
// de este root nos interesa el metodo render que es para dibujar
