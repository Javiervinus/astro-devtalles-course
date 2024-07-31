import type { FavoritePokemon } from "@interfaces/favorite-pokemon.interface";
import { createSignal, For } from "solid-js";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const pokemons = localStorage.getItem("favorites");
  if (pokemons) {
    return JSON.parse(pokemons);
  }
  return [];
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      {/* <For each={pokemons()}
    {
        pokemon=><h1>{pokemon.name}</h1>
    }
    
    ></For> */}

      <For each={pokemons()}>{(pokemon) => <h1>{pokemon.name}</h1>}</For>
    </div>
  );
};