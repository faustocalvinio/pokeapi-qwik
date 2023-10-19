import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { usePokemonGame } from '~/hooks/use-pokemon-game';

export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {

    const id = Number(params.id);
    if ( isNaN( id ) ) redirect( 301, '/' );
    if ( id <= 0 ) redirect( 301, '/' );
    if ( id > 1000 ) redirect( 301, '/' );
    
    return id;
});

export default component$(() => {
    // const location = useLocation();
    const pokemonId = usePokemonId();
    // const pokemonGame = useContext(PokemonGameContext);
    const {
        toggleFromBack,
        toggleVisible,
        isPokemonVisible,
        showBackImage
    } = usePokemonGame();
    
    return (
        <>
         
            <span class="text-5xl">Pokemon: { pokemonId } </span>
            <PokemonImage 
                id={ pokemonId.value }
                isVisible={ isPokemonVisible.value }
                backImage={ showBackImage.value }
            />
            <div class="flex gap-4 mt-4">
                <button onClick$={ toggleVisible } class="btn btn-primary text-lg">Toggle Visible</button>
                <button onClick$={ toggleFromBack } class="btn btn-primary text-lg">Toggle Back Image</button>
            </div>
        </>
    )
});
export const head: DocumentHead = {
    title: 'Pokemon by Id Page',
}