import React from "react";

function Imagem(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ borderRadius: "50%", border: "3px solid #000", width: "100px" }}
    />
  );
}

function Alt() {
  const photos = [
    {
      url: "https://images.genius.com/25740ac590649b213ec7ebaac8eca224.300x300x1.png",
      alt: "top musicas brasileiras",
    },
    {
      url: "https://renatorusso.com.br/wp-content/uploads/2016/03/dois.jpg",
      alt: "Dois Legião Urbana",
    },
  ];

  return (
    <div className="photos">
      {photos.map((photos) => (
        <Imagem src={photos.url} alt={photos.alt} />
      ))}
    </div>
  );
}

export default Alt;