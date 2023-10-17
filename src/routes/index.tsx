import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1);
 
  return (
    <div class="flex flex-col justify-center items-center">
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-9xl">{pokemonId}</span>

      {/* TODO CREAR IMAGEN */}
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`} 
        alt="Pokemon Sprite" 
        style={{width: "200px"}}
        width={200}
        height={200}
      />

      <div class="flex flex-row justify-between items-center w-[20%] mt-2 mb-2">
        
        <button onClick$={ ()=> pokemonId.value-- } class="btn btn-primary mt-2">Anterior</button>
        <button onClick$={ ()=> pokemonId.value++ }  class="btn btn-primary">Siguiente</button>
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
