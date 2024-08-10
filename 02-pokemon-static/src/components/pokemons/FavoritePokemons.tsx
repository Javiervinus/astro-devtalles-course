import type { FavoritePokemon } from "@interfaces/favorite-pokemon.interface";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const pokemons = localStorage.getItem("favorites");
  if (pokemons) {
    return JSON.parse(pokemons);
  }
  return [];
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
  const deletePokemon = (id: number) => {
    const newFavorites = pokemons().filter((f) => f.id !== id);
    console.log(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setPokemons(newFavorites);
  };
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      {/* <For each={pokemons()}
    {
        pokemon=><h1>{pokemon.name}</h1>
    }
    
    ></For> */}

      <For each={pokemons()}>
        {(pokemon) => (
          <FavoritePokemonCard
            pokemon={pokemon}
            deleteFavorite={deletePokemon}
          />
        )}
      </For>
    </div>
  );
};
