import { $, component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1);
  const showBackImage  = useSignal(false);
  const isPokemonVisible = useSignal(false);

  const nav = useNavigate();

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonId.value}/`)
  });

  return (
    <div class="flex flex-col justify-center items-center">
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-9xl">{pokemonId}</span>
      <div onClick$={ () => goToPokemon() } class="border border-red-600)">
        <PokemonImage 
          id={ pokemonId.value } 
          backImage={ showBackImage.value }
          isVisible={ isPokemonVisible.value }          
        />
      </div>      
      <div class="flex flex-row  gap-2 mt-2 mb-2">        
        <button onClick$={ ()=> changePokemonId(-1) } class="btn btn-primary">Anterior</button>
        <button onClick$={ ()=> changePokemonId(+1) }  class="btn btn-primary">Siguiente</button>                
        <button onClick$={ ()=> showBackImage.value = !showBackImage.value }  class="btn btn-primary">Voltear</button>
        <button onClick$={ ()=> isPokemonVisible.value = !isPokemonVisible.value }  class="btn btn-primary">Revelar</button>
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
