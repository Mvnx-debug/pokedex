const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function covertPokemonToHtml(pokemon){
    return `
       <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    
    
    
    `
}

fetch(url)
    .then((response) => response.json()) //processo asincrono, não terá resposta de imediato
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        debugger
        console.log(pokemonList)})
    .catch((error) => console.log(error))