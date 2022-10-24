import "./Products.css";

import "./products.json";

export default function Products() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1536667842290-7602f6a43a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Simples",
      title: "Carro nº 1",
      location: "São Paulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Simples",
      title: "Carro nº 2",
      location: "São Paulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },

    {
      img: "https://images.unsplash.com/photo-1507242032263-5986fb156d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=845&q=80",
      category: "Fora de estrada",
      title: "Carro nº 3",
      location: "Diadema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1585688458395-51aa0a34e9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Fora de estrada",
      title: "Carro nº 4",
      location: "Diadema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },

    {
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Luxo",
      title: "Carro nº 5",
      location: "Lauro de Freitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      category: "Luxo",
      title: "Carro nº 6",
      location: "Lauro de Freitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },

    {
      img: "https://images.unsplash.com/photo-1560282105-59bdc968ef1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      category: "Econômico",
      title: "Carro nº 7",
      location: "Salvador",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1666335009164-2597314da8e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Econômico",
      title: "Carro nº 8",
      location: "Salvador",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },

    {
      img: "https://images.unsplash.com/photo-1625776903580-e8af5930c225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      category: "SUV",
      title: "Carro nº 9",
      location: "São Paulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1609361528403-2b64dae24628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "SUV",
      title: "Carro nº 10",
      location: "Lauro de Freitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lectus ante. Fusce malesuada nibh orci. Nam vel dictum elit.",
    },
  ];
  return (
    <>
      <div className="div-products">
        <h2 className="div-title">Recomendações</h2>

        {products.map((category, index) => (
          <div className="products" key={index}>
            <div className="products-card">
              <div className="div-products-image">
                <img className="products-image" src={category.img} />
              </div>

              <div className="div-products-information">
                <h2> {category.title} </h2>
                <h3> {category.category} </h3>
                <p> {category.location} </p>
                <p> {category.description} </p>
                <button className="products-button">Ver detalhes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
