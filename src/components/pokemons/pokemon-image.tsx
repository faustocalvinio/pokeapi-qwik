import { component$, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'

interface Props{
    id:number | string;
    size?:number;
    backImage?:boolean;
    isVisible?:boolean;
}

export const PokemonImage = component$( ({ id ,
    size = 200 ,
    backImage = false, 
    isVisible=true
    }:Props) => {
    
    const imageLoaded = useSignal(false);
    
    useTask$(async ({track}) => {    
        track(()=>id)
        imageLoaded.value=false;
    });    
    
    const imageUrl = useComputed$(() => {
        return ( backImage )
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${ id }.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
    })

  
    return (
    <div class="flex justify-center items-center"
        style={{
            width: `${size}px`,
            height: `${size}px`
        }}    
    >
        { !imageLoaded.value &&  <span class="text-3xl">Cargando...</span>}
        <img 
            src={ imageUrl.value } 
            alt="Pokemon Sprite" 
            style={{width: `${size}px`}}
            width={200}
            height={200}
            onLoad$={ ()=> { imageLoaded.value = true } }
            class={[{
                'hidden': !imageLoaded.value,
                'brightness-0': !isVisible
        },'transition-all']}
        /> 
    </div>
  )
});
