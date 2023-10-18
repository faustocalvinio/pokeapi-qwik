import { component$, useComputed$ } from '@builder.io/qwik';
import { type DocumentHead , Link , routeLoader$, useLocation } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { getSmallPokemons } from '~/helpers/get-small-pokemons';
import type { SmallPokemon } from '~/interfaces';

export const usePokemonList = routeLoader$<SmallPokemon[]>(async({query}) => {
  const offset = Number(query.get('offset') || 0 );
  // if ( isNaN( offset ) ) redirect( 301, pathname );
  // if ( offset < 0 ) redirect( 301, pathname );
  // if ( offset > 1000 ) redirect( 301, 'https://google.es' );

  return await getSmallPokemons(offset);
});

export default component$(() => {
  const pokemons = usePokemonList();
  
  const location = useLocation();

  const currentOffset = useComputed$<number>(() => {
    // const offsetString = location.url.searchParams.get('offset');
    const offsetString = new URLSearchParams(location.url.search);
    // if ( isNaN( offsetString ) ) redirect( 301, '/' );
    return Number(offsetString.get('offset') || 0 );
  })
  // console.log(location.url.searchParams.get('offset'));

  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Offset: { currentOffset }</span>
        <span>Esta cargando pagina {location.isNavigating ? 'Si' : 'No'}</span>      
      </div>
      <div  class="mt-10">
        <Link 
          href={`/pokemons/list-ssr/?offset=${currentOffset.value - 10}`}  
          class="btn btn-primary mr-2"
        >
          Anteriores
        </Link>
        <Link 
          href={`/pokemons/list-ssr/?offset=${currentOffset.value + 10}`} 
          class="btn btn-primary mr-2"
        >
          Siguientes
        </Link>
      </div>
      <div class="grid grid-cols-6 mt-5">       
        {
          pokemons.value.map( ({ name,id }) => (
            <div key={name} class="m-5 flex flex-col justify-center items-center">
              <PokemonImage id={id} />
              <span class="capitalize">{name}</span>
            </div>
          ))
        }
      </div>

     
    </>
  )
});

export const head: DocumentHead = {
  title: "List SSR",  
};