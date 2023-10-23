import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { PokemonGameContext, PokemonListContext } from "../";
import type{ PokemonGameState, PokemonListState } from "../";

export const PokemonProvider = component$(() => {
  
    const pokemonGame = useStore<PokemonGameState>({
        pokemonId:4,
        showBackImage:true,
        isPokemonVisible:false,
      });
    
      const pokemonList= useStore<PokemonListState>({
        currentPage:0,
        isLoading:  false,
        pokemons:  [],
      });    
    
      useContextProvider( PokemonGameContext,pokemonGame );
      useContextProvider( PokemonListContext,pokemonList );

      useVisibleTask$(() => {       
        if(localStorage.getItem('pokemon-game')){
            const data = JSON.parse(localStorage.getItem('pokemon-game')!);
            pokemonGame.pokemonId = data.pokemonId;
            pokemonGame.showBackImage = data.showBackImage;
            pokemonGame.isPokemonVisible = data.isPokemonVisible;
        }
      });

      useVisibleTask$(({track}) => {
        track(()=> [pokemonGame.isPokemonVisible, pokemonGame.pokemonId, pokemonGame.showBackImage]);        
        localStorage.setItem('pokemon-game', JSON.stringify(pokemonGame));        
      });
    return (<Slot />);
});