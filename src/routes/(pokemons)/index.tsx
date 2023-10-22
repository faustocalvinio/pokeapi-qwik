import { $, component$ } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";
import { usePokemonGame } from "~/hooks/use-pokemon-game";

export default component$(() => {

  const nav = useNavigate();
  const {
    isPokemonVisible,
    nextPokemon,
    pokemonId,
    prevPokemon,
    showBackImage,
    toggleFromBack,
    toggleVisible,
  } = usePokemonGame();

  const goToPokemon = $((id:number) => {
    nav(`/pokemon/${id}/`)
  });

  return (
    <div class="flex flex-col justify-center items-center">
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-9xl">{pokemonId}</span>
      <div onClick$={ () => goToPokemon(pokemonId.value) } class="border border-red-600)">
        <PokemonImage 
          id={ pokemonId.value } 
          backImage={ showBackImage.value }
          isVisible={ isPokemonVisible.value }          
        />
      </div>      
      <div class="flex flex-row  gap-2 mt-2 mb-2">        
        <button onClick$={ prevPokemon } class="btn btn-primary">Anterior</button>
        <button onClick$={ nextPokemon }  class="btn btn-primary">Siguiente</button>                
        <button onClick$={ toggleFromBack }  class="btn btn-primary">Voltear</button>
        <button onClick$={ toggleVisible }  class="btn btn-primary">Revelar</button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Primera aplicaion en Qwik",
    },
  ],
};
