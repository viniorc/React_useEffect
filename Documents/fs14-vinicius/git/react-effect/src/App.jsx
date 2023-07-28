import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [lista, setLista] = useState([]);

  const incrementar = () => {
    console.log("Aumentou +10");
    setCount(count + 10);
  };
  // 1. Sempre executa na renderização
  useEffect(() => {
    console.log("Rnderizou!");
  });

  // 2 - Com o array de dependencias [], é onde insiro as variaveis que serão observadas
  useEffect(() => {
    if (count === 50) console.log("Rnderizou 2!");
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setLista(data.splice(0, 12));
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      {/*<h1>{`Contador: ${count}`}</h1>
      <button onClick={incrementar}>+10</button>*/}
      <h1>Album de fotos</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {lista.map((foto) => (
          <Card
            key={foto.id}
            title={foto.id}
            text={foto.title}
            image={foto.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
