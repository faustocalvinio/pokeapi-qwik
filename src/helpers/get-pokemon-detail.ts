const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species';

export const getDetailByPokemonId = async (id:string) =>{     
    if (id==="") return;
    const resp = await fetch(`${baseUrl}/${id}`);
    const data = (await resp.json()) ;
    // const descriptionInSpanish =await data.flavor_text_entries.filter((item:any)=>item.language.name === 'es');
    const {flavor_text} = data.flavor_text_entries.find((item:any)=>item.language.name === 'es');    
    return await flavor_text
};