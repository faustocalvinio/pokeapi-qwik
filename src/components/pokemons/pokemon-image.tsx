import { component$, useSignal, useTask$ } from '@builder.io/qwik'

interface Props{
    id:number;
    size?:number;
    backImage?:boolean;
    isVisible?:boolean;
}

export const PokemonImage = component$( ({ id ,
    size = 200 ,
    backImage = false, 
    isVisible=false
    }:Props) => {
    
    const imageLoaded = useSignal(true);
    
    useTask$(async ({track}) => {    
        track(()=>id)
        imageLoaded.value=false;
    });    
    
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    if ( backImage ){
        imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    }
  
    return (
    <div class="flex justify-center items-center"
        style={{
            width: `${size}px`,
            height: `${size}px`
        }}    
    >
        { !imageLoaded.value &&  <span class="text-3xl">Cargando...</span>}
        <img 
            src={ imageUrl } 
            alt="Pokemon Sprite" 
            style={{width: `${size}px`}}
            width={200}
            height={200}
            onLoad$={ ()=> imageLoaded.value = true }
            class={[{
                'hidden': !imageLoaded.value,
                'brightness-0': isVisible
        },'transition-all']}
        /> 
    </div>
  )
});
