import type { FavoritePokemon } from "@interfaces/favorite-pokemon.interface";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
  deleteFavorite: (id: number) => void;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [isVisible, SetIsVisible] = createSignal(true);
  const { pokemon } = props;
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  //   const deleteFavorite = () => {
  //     console.log("Borrando pokemon");
  //     const favorite = JSON.parse(
  //       localStorage.getItem("favorites") || "[]"
  //     ) as FavoritePokemon[];
  //     const newFavorites = favorite.filter((f) => f.id !== pokemon.id);
  //     localStorage.setItem("favorites", JSON.stringify(newFavorites));
  //     SetIsVisible(false);
  //   };
  return (
    <Show when={isVisible()}>
      <div class=" flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: ${pokemon.name}-image;`}
          />
          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          class="text-red-400"
          onClick={() => props.deleteFavorite(pokemon.id)}
        >
          Borrar
        </button>
      </div>
    </Show>
  );
};
