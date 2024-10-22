import { useState } from "react";

function Remover() {
  const [lista, setLista] = useState([
    { id: 1, item: "item 1" },
    { id: 2, item: "item 2" },
    { id: 3, item: "item 3" },
    { id: 4, item: "item 4" },
    { id: 5, item: "item 5" },
    { id: 6, item: "item 6" },
    { id: 7, item: "item 7" },
  ]);

  const remocao = (id) => {
    const novas = lista.filter((lista) => lista.id !== id);
    setLista(novas);
  };

  return (
    <>
      <ul>
        {lista.map((lista) => (
          <li key={lista.id}>
            {lista.item}
            <button onClick={() => remocao(lista.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Remover;