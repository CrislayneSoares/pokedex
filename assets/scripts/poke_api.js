
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

//-------------------------------------------------------
    pokemon.height = pokeDetail.height / 10
    pokemon.weight = pokeDetail.weight / 10

    const abilities = pokeDetail.abilities.map((ability) => ability.ability.name)
    const [abilitie] = abilities

    pokemon.abilities = abilities
    pokemon.abilitie = abilitie

    pokemon.base = pokeDetail.base_experience

    const bases = pokeDetail.stats.map((base_stat) => base_stat.base_stat) 
    pokemon.bases = bases 

    pokemon.total = bases[0] + bases[1] + bases[2] + bases[3] + bases[4] + bases[5]

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBory) => jsonBory.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemosDetails) => pokemosDetails)
}