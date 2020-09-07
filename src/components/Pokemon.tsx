import React from "react";

type Props = {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[];
};

export default function Pokemon({
  name,
  weight,
  awesome,
  terrifying,
  abilities,
}: Props) {
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight} kg</p>
      <p>Awesome: {awesome ? "YES!" : "nah, not really"}</p>
      <p>Terrifying: {terrifying ? "Very" : "Nope, lovable!"}</p>
      <p>Abilities: {abilities}</p>
    </div>
  );
}
