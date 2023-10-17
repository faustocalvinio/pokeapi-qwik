import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {
  const location = useLocation();
  
  return (
    <div class="flex flex-col justify-center items-center gap-2">
      <h1>Hello World</h1>
      <span class="text-2xl">Pokemon number: {location.params.id} </span>
      <PokemonImage 
        id={parseInt(location.params.id)}
      />
    </div>
    )
});