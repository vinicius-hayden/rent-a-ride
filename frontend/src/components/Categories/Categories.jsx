import "./Categories.css";

export default function Categories() {
  const categories = [
    {
      id: 1,
      h2: "Simples",
      p: "807.105 carros",
      image: "https://images.unsplash.com/photo-1490985830292-06e0fe60d725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80",
    },
    {
      id: 2,
      h2: "Para estrada",
      p: "807.105 carros",
      image: "https://images.unsplash.com/photo-1467489904517-075c242c2b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1018&q=80",
    },
    {
      id: 3,
      h2: "Luxo",
      p: "807.105 carros",
      image: "https://images.unsplash.com/photo-1488667732045-ad6830a850cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      h2: "Econômico",
      p: "807.105 carros",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      h2: "SUV",
      p: "807.105 carros",
      image: "https://images.unsplash.com/photo-1615063029891-497bebd4f03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    },
  ];

  return (
    <>
      <div className="div-main">
        <h2 className="div-title">Buscar por categorias</h2>

        {categories.map((category, index) => (
        <div className="categories" key={index}>
          <div className="categories-card">
            <img className="categories-image" src={category.image} />
            <h2> {category.h2} </h2>
            <p> {category.p} </p>
          </div>
        </div>
        ))}
        
      </div>
    </>
  );
}
