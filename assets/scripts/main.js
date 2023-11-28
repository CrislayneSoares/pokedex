const pokemonList = document.getElementById("pokemonsList")
const loadMoreButtun = document.getElementById("loadMoreButton")

const maxRecords = 151
const limit = 10
let offset = 0

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
        ` 
            <li class="pokemon ${pokemon.type}">
                <a href="../assets/pages/card.html">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol>
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                    </div>
                </a>
            </li>
        `
        ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButtun.addEventListener('click', () => {
    offset += limit

    const qtdNextPage = offset + limit

    if (qtdNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)
        
        loadMoreButtun.parentElement.removeChild(loadMoreButtun)
    } else {
        loadPokemonItems(offset, limit)
    }
})