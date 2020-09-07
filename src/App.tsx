import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const PokemonCollection = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["	Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill	",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple String" />
        <Pokemon
          name={PokemonCollection[0].name}
          weight={PokemonCollection[0].weight}
          awesome={PokemonCollection[0].awesome}
          terrifying={PokemonCollection[0].terrifying}
          abilities={PokemonCollection[0].abilities}
        />
        <Pokemon
          name={PokemonCollection[1].name}
          weight={PokemonCollection[1].weight}
          awesome={PokemonCollection[1].awesome}
          terrifying={PokemonCollection[1].terrifying}
          abilities={PokemonCollection[1].abilities}
        />
        <Pokemon
          name={PokemonCollection[2].name}
          weight={PokemonCollection[2].weight}
          awesome={PokemonCollection[2].awesome}
          terrifying={PokemonCollection[2].terrifying}
          abilities={PokemonCollection[2].abilities}
        />
        <Pokemon
          name={PokemonCollection[3].name}
          weight={PokemonCollection[3].weight}
          awesome={PokemonCollection[3].awesome}
          terrifying={PokemonCollection[3].terrifying}
          abilities={PokemonCollection[3].abilities}
        />
      </main>
    </div>
  );
}

export default App;
