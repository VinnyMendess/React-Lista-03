import React from "react";

function Elementary() {
  const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <>
      <h2>Title</h2>
      <ul>
        {itens.map((itens) => (
          <li>{itens}</li>
        ))}
      </ul>
      <p>§ p </p>
    </>
  );
}

export default Elementary;