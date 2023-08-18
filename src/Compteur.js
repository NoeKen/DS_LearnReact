import { useState } from "react";
// import App from "./App";

function Compteur() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={increment}>Cliquez</button>
    </div>
  );
}

export default Compteur;