import { useState, useEffect } from "react";
import "./App.css";

// ---- Reusable Catch Button ----
function MyButton(props) {
  const [caught, setCaught] = useState(false);

  function handleClick() {
    setCaught(true);
  }

  return (
    <button className="button" onClick={handleClick}>
      {caught ? "Caught!" : props.text}
    </button>
  );
}

// ---- Pokemon Card Component ----
function Pokemon(props) {
  return (
    <div className="Pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Type: {props.type}</p>
      <MyButton text={"Catch " + props.name} />
    </div>
  );
}

// ---- Search Component ----
function Search() {
  // State variables for Pokemon info
  const [name, setName] = useState("pikachu");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  // Fetch data from PokeAPI
  async function fetchPokemon() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();

      // Update state with API data
      setImage(data.sprites.front_default);
      setType(data.types[0].type.name);
    } catch (error) {
      console.error("Error fetching data:", error);
      setImage("");
      setType("Not found");
    }
  }

  // Load default Pokémon on startup
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Handle typing in search box
  function handleChange(event) {
    setName(event.target.value);
  }

  // Handle button click
  function handleSearch() {
    fetchPokemon();
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Show card only if image exists */}
      {image && <Pokemon name={name} image={image} type={type} />}
    </div>
  );
}

    const favorites = [
      { id: "charizard", name: "Charizard", type: "fire", image: process.env.PUBLIC_URL + "/images/charizard.jpg" },
      { id: "mew", name: "Mew", type: "psychic", image: process.env.PUBLIC_URL + "/images/mew.jpg" },
      { id: "pikachu", name: "Pikachu", type: "electric", image: process.env.PUBLIC_URL + "/images/pikachu.jpg" }
    ];

    <div className="list-container">
      <h2 className="list-header">My fav</h2>
      <div className="pokemon-items">
        {favorites.map(p => (
          <Pokemon key={p.id} name={p.name} type={p.type} image={p.image} />
        ))}
      </div>
    </div>

    {/* Gallery: show all images separately below the other content */}
    <div className="gallery">
      <h2 className="gallery-header">All Images</h2>
      <div className="gallery-grid">
        {favorites.map(img => (
          <img
            key={img.id}
            src={img.image}
            alt={img.name}
            className="gallery-image"
          />
        ))}
      </div>
    </div>

// ---- App Component ----
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
    </div>
  );
}

export default App;